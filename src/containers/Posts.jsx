/* eslint-disable no-console */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import PostsCards from '../components/PostsCards';
import { setNewsCategory } from '../actions/commonActions';
import { getLang, getPrefix } from '../reducers/locale';
import PostsNavigation from '../components/PostsNavigation';
import { getPostList } from '../actions/postsActions'

type Props = {
  urlPrefix: string,
  lang: string,
  postList: { apiData: Array<Content>, total: string },
  category: string | null,
  getPostListData: Function,
  setCategory: Function
};

class News extends Component {
  static defaultProps = {
    postList: { apiData: [], total: '3' }
  };

  componentDidMount() {
    this.props.getPostListData(this.props.lang, null, this.props.category);
  }

  onPageChange = current => {
    this.props.getPostListData(this.props.lang, current, this.props.category);
  };
  onCategoryChange = (evt: SyntheticMouseEvent & { currentTarget: HTMLButtonElement }) => {
    if (evt.currentTarget.id !== '6') {
      this.props.setCategory(evt.currentTarget.id);
      this.props.getPostListData(this.props.lang, null, evt.currentTarget.id);
    } else {
      this.props.setCategory(null);
      this.props.getPostListData(this.props.lang, null, null);
    }
  };

  props: Props;

  render() {
    const { postList, urlPrefix } = this.props;
    let renderPostsCards;

    if (!(Object.keys(postList).length === 0 && postList.constructor === Object)) {
      renderPostsCards = <PostsCards onChange={this.onPageChange} posts={postList} urlPrefix={urlPrefix} />;
    } else {
      renderPostsCards = <p style={{ textAlign: 'center' }}>Loader...</p>;
    }
    return (
      <section className={'news'}>
        <div className={'news__title'}>
          <FormattedMessage id={'news.title'} />
        </div>
        <div className={'news__nav-links'}>
          {['interesting', 'info', 'action', 'all'].map((item, index) => (
            <PostsNavigation key={item} id={index + 3} text={item} onCategoryChange={this.onCategoryChange} />
          ))}
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
  const category = state.newsCategory;
  return { postList, lang, urlPrefix, category };
};

const mapDispatchToProps = (dispatch: Function) => ({
  getPostListData(locale, page, category) {
    dispatch(getPostList(locale, page, category));
  },
  setCategory(category) {
    dispatch(setNewsCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
