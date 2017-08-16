// @flow

import axios from 'axios';
import { ADD_POSTLIST_DATA, ADD_POST_DATA } from './actions';

export function addPostListData(apiData: Array<PostListItem>) {
  return { type: ADD_POSTLIST_DATA, payload: apiData };
}

export function addPostData(apiData: Post) {
  return { type: ADD_POST_DATA, payload: apiData };
}

export function getPostList() {
  return (dispatch: Function) => {
    axios
      .get('http://localhost:3000/articlesList')
      .then(response => {
        dispatch(addPostListData(response.data));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}

export function getPost(postId: string ) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/articles/${postId}`)
      .then(response => {
        dispatch(addPostData(response.data));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
