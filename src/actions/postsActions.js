/* eslint-disable no-console */
// @flow

import axios from 'axios';
import { ADD_POSTLIST_DATA } from '../constants/actions';
import SERVER from '../constants/api';

export function addPostListData(apiData: Array<Content>, total: string) {
  return { type: ADD_POSTLIST_DATA, payload: { apiData, total } };
}

export function getPostList(locale: string, page?: number | null = null, category?: string | null = null) {
  let categoryId;
  switch (category) {
    case 'our':
      categoryId = 3;
      break;
    case 'actions':
      categoryId = 4;
      break;
    case 'info':
      categoryId = 5;
      break;
    default:
      categoryId = null;
  }
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
        console.log('axios (response.headers): ', response.data);
        dispatch(addPostListData(response.data.data, response.data.meta.total));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
