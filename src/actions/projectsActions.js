/* eslint-disable no-console */
// @flow

import axios from 'axios';
import { GET_PROJECTS_LIST } from '../constants/actions';
import SERVER from '../constants/api';

export function getProjectsList(apiData: Post) {
  return { type: GET_PROJECTS_LIST, payload: apiData };
}

export function getProjectsListData(locale: string) {
  return (dispatch: Function) => {
    axios
      .get(`${SERVER}/api/v1/projects/?locale=${locale}`)
      .then(response => {
        dispatch(getProjectsList(response.data.data));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
