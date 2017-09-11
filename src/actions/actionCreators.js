// @flow

import axios from 'axios';
import { SET_LOCALE , ADD_POSTLIST_DATA, ADD_POST_DATA } from '../constants/actions';
import SERVER from '../constants/api';

export function setLocale(locale: string) {
  return { type: SET_LOCALE, payload: locale };
}

export function addPostListData(apiData: Array<PostListItem>) {
  return { type: ADD_POSTLIST_DATA, payload: apiData };
}

export function addPostData(apiData: Post) {
  return { type: ADD_POST_DATA, payload: apiData };
}

export function getPostList(locale: string) {
  return (dispatch: Function) => {
    axios
      .get(`${SERVER}/api/v1/posts?locale=${locale}`)
      .then(response => {
        dispatch(addPostListData(response.data));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}

export function getPost(postId: string, locale: string) {
  return (dispatch: Function) => {
    axios
      .get(`${SERVER}/api/v1/posts/${postId}?locale=${locale}`)
      .then(response => {
        dispatch(addPostData(response.data));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
