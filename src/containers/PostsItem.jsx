/* eslint-disable no-console */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Loader } from 'react-loaders';
import FaShareAlt from 'react-icons/lib/fa/share-alt';

import type { RouterHistory } from 'react-router-dom';

import { getLang, getPrefix } from '../reducers/locale';
import PostsNavigation from '../components/PostsNavigation';
import { getPost } from '../actions/postActions';

import type { Post } from '../../flow-typed/types';

type Props = {
  getPostData: Function,
  lang: string,
  history: RouterHistory,
  urlPrefix: string,
  post: Post
};

class PostsItem extends Component<Props, void> {
  componentDidMount() {
    /* if (!this.props.post[this.props.match.params.id]) {
      this.props.getPostData();
    } */
    this.props.getPostData(this.props.lang);
  }

  render() {
    const { history, post, urlPrefix } = this.props;
    if (Object.keys(post).length === 0 && post.constructor === Object) {
      return <Loader type="line-scale-pulse-out-rapid" active />;
    }

    return (
      <section className="post">
        <div className="post__header">
          <div className="post__header-container">
            <div className="post__back-button-container">
              <button type="button" className="post__back-button" onClick={history.goBack}>
                <FormattedMessage id="news.post.back" />
              </button>
            </div>
            <span className="post__title">
              <FormattedMessage id="news.title" />
            </span>
          </div>
        </div>
        <div className="post__nav-links">
          <PostsNavigation urlPrefix={urlPrefix} />
        </div>
        <article className="post__article-container">
          <picture className="post__picture">
            <img className="post__image" src={post.attributes.image.file.url} alt={post.attributes.image.alt} />
          </picture>
          <div className="post__content">
            <h2 className="post__content-header">{post.attributes.title}</h2>
            <span className="post__content-date">
              <FormattedDate value={post.attributes.image.created_at} />
            </span>
            <div className="post__content-data" dangerouslySetInnerHTML={{ __html: post.attributes.description }} />
            <Link className="post__content-link" to={`/${urlPrefix}news`}>
              <FormattedMessage id="news.post.readAll" />
            </Link>
            <button type="button" className="post__content-share-button">
              <FaShareAlt size={24} />
              <FormattedMessage id="news.post.share" />
            </button>
          </div>
        </article>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const lang = getLang(state.locale);
  const urlPrefix = getPrefix(state.locale);
  const post = state.postData;
  return { post, lang, urlPrefix };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getPostData(locale) {
    const { id } = ownProps.match.params;
    dispatch(getPost(locale, id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsItem);
