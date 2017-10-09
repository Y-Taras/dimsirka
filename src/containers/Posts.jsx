/* eslint-disable no-console */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Loader } from 'react-loaders';
import type { Match } from 'react-router-dom';

import PostsCards from '../components/PostsCards';
import { getLang, getPrefix } from '../reducers/locale';
import PostsNavigation from '../components/PostsNavigation';
import { getPostList } from '../actions/postsActions';

type Props = {
  urlPrefix: string,
  lang: string,
  postList: { apiData: Array<Content>, total: string },
  getPostListData: Function,
  match: Match
};

class Posts extends Component {
  static defaultProps = {
    postList: { apiData: [], total: '3' }
  };

  componentDidMount() {
    this.props.getPostListData(this.props.lang, null, this.props.match.params.category);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      this.props.getPostListData(this.props.lang, null, nextProps.match.params.category);
    }
  }
  onPageChange = current => {
    this.props.getPostListData(this.props.lang, current, this.props.match.params.category);
  };

  props: Props;

  render() {
    const { postList, urlPrefix, match } = this.props;
    let renderPostsCards;

    if (!(Object.keys(postList).length === 0 && postList.constructor === Object)) {
      renderPostsCards = <PostsCards onChange={this.onPageChange} posts={postList} urlPrefix={urlPrefix} />;
    } else {
      renderPostsCards = <Loader type="line-scale-pulse-out-rapid" active />;
    }
    return (
      <section className={'news'}>
        <div className={'news__title'}>
          <FormattedMessage id={'news.title'} />
        </div>
        <div className={'news__nav-links'}>
          <PostsNavigation urlPrefix={urlPrefix} category={match.params.category} />
        </div>
        {renderPostsCards}
      </section>
    );
  }
}

const mapStateToProps = state => {
  const urlPrefix = getPrefix(state.locale);
  const postList = state.postlistData;
  const lang = getLang(state.locale);
  return { postList, lang, urlPrefix };
};

const mapDispatchToProps = (dispatch: Function) => ({
  getPostListData(locale, page, category) {
    dispatch(getPostList(locale, page, category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
