// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Match } from 'react-router-dom';

import { getPost } from '../redux/actionCreators';

class Post extends Component {
  componentDidMount() {
    if (!this.props.post[this.props.match.params.id]) {
      this.props.getPostData();
    }
  }

  props: {
    post: { [key: ?string]: Post } ,
    getPostData: Function,
    match: Match
  };

  render() {
    return (
      <pre>
        <code>
          {JSON.stringify(this.props.post[this.props.match.params.id], null, 4)}
        </code>
      </pre>
    );
  }
}

const mapStateToProps = state => {
  const post = state.postData ? state.postData : {};
  return { post };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getPostData() {
    dispatch(getPost(ownProps.match.params.id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
