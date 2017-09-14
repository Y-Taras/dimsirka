// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import NewsCards from '../components/NewsCards';
import { getPostList } from '../actions/actionCreators';
import { getLang } from '../reducers/locale';

class News extends Component {
  componentDidMount() {
    if (!this.props.postList[0]) {
      this.props.getPostListData(this.props.lang);
    }
  }

  props: {
    urlPrefix: string,
    lang: string,
    postList: Array<PostListItem>,
    getPostListData: Function
  };

  render() {
    const { postList, urlPrefix, lang } = this.props;
    return (
      <section className={'news'}>
        <div className={'news__title'}>
          <FormattedMessage id={'news.title'} />
        </div>
        <div className={'news__nav-links'}>
          <NavLink className={'news__nav-link'} to={`${urlPrefix}interesting`}>
            <FormattedMessage id={'news.navigation.interesting'} />
          </NavLink>
          <NavLink className={'news__nav-link'} to={'#'}>
            <FormattedMessage id={'news.navigation.info'} />
          </NavLink>
          <NavLink className={'news__nav-link'} to={'#'}>
            <FormattedMessage id={'news.navigation.action'} />
          </NavLink>
        </div>
        <NewsCards posts={postList} lang={lang} newsType={'Information'} />
      </section>
    );
  }
}

const mapStateToProps = state => {
  const postList = state.postlistData ? state.postlistData : [];
  const lang = getLang(state.locale);
  return { postList, lang };
};

const mapDispatchToProps = (dispatch: Function) => ({
  getPostListData(locale) {
    dispatch(getPostList(locale));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
