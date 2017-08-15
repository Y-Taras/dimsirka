// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPostList } from '../redux/actionCreators';

class Posts extends Component {
  componentDidMount() {
    if (!this.props.postList[0]) {
      this.props.getPostListData();
    }
  }

  props: {
    postList: Array<PostListItem>,
    getPostListData: Function
  };

  render() {
    return (
      <div>
        {this.props.postList.map(post => (
            <div key={post.articleId}>
              <h2 dangerouslySetInnerHTML={{ __html: post.headline }} />
              <img src={post.image.url} alt={`${post.headline}`} />
              <p dangerouslySetInnerHTML={{ __html: post.articleSection }} />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const postList = state.postlistData ? state.postlistData : [];
  return { postList };
};

const mapDispatchToProps = (dispatch: Function) => ({
  getPostListData() {
    dispatch(getPostList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
