/* eslint-disable no-console */
// @flow

import axios from 'axios';
import { SET_LOCALE, ADD_POSTLIST_DATA, ADD_POST_DATA } from '../constants/actions';
import SERVER from '../constants/api';

export function setLocale(locale: string) {
  return { type: SET_LOCALE, payload: locale };
}

export function addPostListData(apiData: Array<Content>) {
  return { type: ADD_POSTLIST_DATA, payload: apiData };
}

export function addPostData(apiData: Post) {
  return { type: ADD_POST_DATA, payload: apiData };
}

export function getPostList(locale: string, page?: number | null = null, categoryId?: number | null = null) {
  let REQURL;
  if (categoryId === null && page === null) {
    REQURL = `${SERVER}/api/v1/posts?locale=${locale}`;
  }
  if (categoryId === null && page !== null) {
    REQURL = `${SERVER}/api/v1/posts?locale=${locale}&page=${page}`;
  }
  if (page === null && categoryId !== null) {
    REQURL = `${SERVER}/api/v1/posts?locale=${locale}&category_id=${categoryId}`;
  }
  if (categoryId !== null && page !== null) {
    REQURL = `${SERVER}/api/v1/posts?locale=${locale}&category_id=${categoryId}&page=${page}`;
  }

  console.log(REQURL);
  return (dispatch: Function) => {
    axios
      .get(REQURL)
      .then(response => {
        console.log('axios (response.data): ', response.data);
        dispatch(addPostListData(response.data.data));
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
/*

/api/v1/posts?locale=uk - 4 posts depending on locale
/api/v1/posts?locale=uk&category_id=3&page=1 - Interesting
/api/v1/posts?locale=uk&category_id=4&page=1 - Information
/api/v1/posts?locale=uk&category_id=5&page=1 - Action



  */
