/* eslint-disable no-console */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Match } from 'react-router-dom';

import { getPost } from '../actions/actionCreators';

class Post extends Component {
  componentDidMount() {
    if (!this.props.post[this.props.match.params.id]) {
      this.props.getPostData();
    }
  }

  props: {
    // post: {[key: ?string]: Post}
    post: { [?string]: {
      articleBody: string
    } },
    getPostData: Function,
    match: Match,
  };

  render() {
    const postId = this.props.match.params.id;
    return (
      <pre>
        <code>
          {JSON.stringify(this.props.post[postId], null, 4)}
          {this.props.post[postId] ? console.log(this.props.post[postId].articleBody) : ''}
        </code>
      </pre>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const defaultPost = {
    [ownProps.match.params.id]: {
      articleId: null,
      author: null,
      datePublished: null,
      dateModified: null,
      headline: null,
      articleBody: null
    }
  };
  const post = state.postData ? state.postData : defaultPost;
  return { post };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getPostData() {
    dispatch(getPost(ownProps.match.params.id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
