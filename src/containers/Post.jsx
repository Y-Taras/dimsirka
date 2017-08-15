// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPost } from '../redux/actionCreators';

class Post extends Component {

  componentDidMount() {
    if (!this.props.post[0]) {
      this.props.getPostData();
    }
  }

  props: {
    post: Array<Post>,
    getPostData: Function
  }

  render() {
    return (
      <pre>
        <code>
          {JSON.stringify(this.props.post, null, 4)}
        </code>
      </pre>
    );
  }
}


const mapStateToProps = state => {
  const post = state.postData ? state.postData : [];
  return { post };
};

const mapDispatchToProps = (dispatch: Function) => ({
  getPostData() {
    dispatch(getPost());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
