/* eslint-disable no-console */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import type { RouterHistory } from 'react-router-dom';

import { setNewsCategory } from '../actions/commonActions';
import { getLang } from '../reducers/locale';
import NewsNavigationItem from '../components/PostsNavigation';
import { getPost } from '../actions/postActions'

class Post extends Component {
  componentDidMount() {
    /* if (!this.props.post[this.props.match.params.id]) {
      this.props.getPostData();
    } */
    this.props.getPostData(this.props.lang);
  }

  onCategoryChange = (evt: SyntheticMouseEvent & { currentTarget: HTMLButtonElement }) => {
    if (evt.currentTarget.id !== '6') {
      this.props.setCategory(evt.currentTarget.id);
    } else {
      this.props.setCategory(null);
    }
    this.props.history.push('/news');
  };

  props: {
    post: Content,
    getPostData: Function,
    setCategory: Function,
    lang: string,
    history: RouterHistory
  };

  render() {
    return (
      <section className={'post'}>
        <div className={'news__title'}>
          <span className={'news__back-button'} onClick={this.props.history.goBack} role={'button'} tabIndex={'0'} />
          <FormattedMessage id={'news.title'} />
        </div>
        <div className={'news__nav-links'}>
          {['interesting', 'info', 'action', 'all'].map((item, index) => (
            <NewsNavigationItem key={item} id={index + 3} text={item} onCategoryChange={this.onCategoryChange} />
          ))}
        </div>
        <pre>
          <code>{JSON.stringify(this.props.post, null, 4)}</code>
        </pre>
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
  },
  setCategory(category) {
    dispatch(setNewsCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
