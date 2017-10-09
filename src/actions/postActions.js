/* eslint-disable no-console */
// @flow

import axios from 'axios';
import { ADD_POST_DATA } from '../constants/actions';
import SERVER from '../constants/api';

export function addPostData(apiData: Post) {
  return { type: ADD_POST_DATA, payload: apiData };
}

export function getPost(locale: string, postId: string) {
  return (dispatch: Function) => {
    axios
      .get(`${SERVER}/api/v1/posts/${postId}?locale=${locale}`)
      .then(response => {
        dispatch(addPostData(response.data.data));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
