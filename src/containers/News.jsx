// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import NewsCards from '../components/NewsCards'
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
      <section className={'news'}>
        <div className={'news__title'}>
          <FormattedMessage id={'news.title'} />
        </div>
        <div className={'news__nav-links'}>
            <NavLink className={'news__nav-link'} to={'#'}>
              <FormattedMessage id={'news.navigation.interesting'} />
            </NavLink>
            <NavLink className={'news__nav-link'} to={'#'}>
              <FormattedMessage id={'news.navigation.info'} />
            </NavLink>
            <NavLink className={'news__nav-link'} to={'#'}>
              <FormattedMessage id={'news.navigation.action'} />
            </NavLink>
        </div>
        <NewsCards posts={this.props.postList}/>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const postList = state.postlistData ? state.postlistData : [];
  return { postList };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getPostListData() {
    dispatch(getPostList(ownProps.locale));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
