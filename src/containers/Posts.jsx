// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { getPostList } from '../actions/actionCreators';

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
      <div className="postList">
        {this.props.postList.map(post => (
            <div key={post.articleId}>
              <Link to={`/news/${post.articleId}`} >
              <span className="newsItem" dangerouslySetInnerHTML={{ __html: post.headline }} />
              <img src={post.image.url} alt={`${post.headline}`} />
              <span className="newsItem" dangerouslySetInnerHTML={{ __html: post.articleSection }} />
              </Link>
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
