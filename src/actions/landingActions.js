/* eslint-disable no-console */
// @flow

import axios from 'axios';
import { GET_RANDOM_ANIMAL } from '../constants/actions';
import SERVER from '../constants/api';


export function getRandomAnimal(apiData: Post) {
  return { type: GET_RANDOM_ANIMAL, payload: apiData}
}

export function getRandomAnimalData(locale: string, type: string) {
  return (dispatch: Function) => {
    axios
    .get(`${SERVER}/api/v1/animals/random?locale=${locale}&type=${type}`)
    .then(response => {
      dispatch(getRandomAnimal(response.data.data));
    })
    .catch(error => {
      console.error('axios error', error); // eslint-disable-line no-console
    });
  };
}
