/* eslint-disable no-console,no-debugger */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Pagination from 'rc-pagination';

import NewsCards from '../components/NewsCards';
import { getPostList } from '../actions/actionCreators';
import { getLang, getPrefix } from '../reducers/locale';

class News extends Component {
  componentDidMount() {
    this.props.getPostListData(this.props.lang);
  }

  onPageChange = current => {
    this.props.getPostListData(this.props.lang, current);
  };
  onCategoryChange = category => {
    this.props.getPostListData(this.props.lang, null, category);
  };

  props: {
    urlPrefix: string,
    lang: string,
    postList: Array<Content>,
    getPostListData: Function
  };

  render() {
    const { postList, urlPrefix } = this.props;
    let renderNewsCards;

    if (postList.length) {
      renderNewsCards = <NewsCards posts={postList} urlPrefix={urlPrefix} />;
    } else {
      renderNewsCards = <p style={{ textAlign: 'center' }}>Loader...</p>;
    }
    return (
      <section className={'news'}>
        <div className={'news__title'}>
          <FormattedMessage id={'news.title'} />
        </div>
        <div className={'news__nav-links'}>
          <span
            className={'news__nav-link'}
            onClick={this.onCategoryChange.bind(this, '4')}
            role={'button'}
            tabIndex={0}
          >
            <FormattedMessage id={'news.navigation.interesting'} />
          </span>
          <span
            className={'news__nav-link'}
            onClick={this.onCategoryChange.bind(this, '5')}
            role={'button'}
            tabIndex={0}
          >
            <FormattedMessage id={'news.navigation.info'} />
          </span>
          <span
            className={'news__nav-link'}
            onClick={this.onCategoryChange.bind(this, '6')}
            role={'button'}
            tabIndex={0}
          >
            <FormattedMessage id={'news.navigation.action'} />
          </span>
        </div>
        {renderNewsCards}
        <Pagination defaultCurrent={1} onChange={this.onPageChange} total={25} />
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

export default connect(mapStateToProps, mapDispatchToProps)(News);
