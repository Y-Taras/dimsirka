/* eslint-disable no-console */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import type { RouterHistory } from 'react-router-dom';

import { getLang } from '../reducers/locale';
import PostsNavigation from '../components/PostsNavigation';
import { getPost } from '../actions/postActions'

class Post extends Component {
  componentDidMount() {
    /* if (!this.props.post[this.props.match.params.id]) {
      this.props.getPostData();
    } */
    this.props.getPostData(this.props.lang);
  }

  props: {
    post: Content,
    getPostData: Function,
    lang: string,
    history: RouterHistory,
    match: Match,
    urlPrefix: string
  };

  render() {
    return (
      <section className={'post'}>
        <div className={'news__title'}>
          <span className={'news__back-button'} onClick={this.props.history.goBack} role={'button'} tabIndex={'0'} />
          <FormattedMessage id={'news.title'} />
        </div>
        <div className={'news__nav-links'}>
          <PostsNavigation urlPrefix={this.props.urlPrefix} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const lang = getLang(state.locale);
  const post = state.postData;
  return { post, lang };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getPostData(locale) {
    const id: string = ownProps.match.params.id;
    dispatch(getPost(locale, id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
