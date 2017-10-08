// @flow

import { ADD_POST_DATA } from '../constants/actions';

const initialState = {};

const postData = (state = initialState, action: Action) => {
  if (action.type === ADD_POST_DATA) {
    return action.payload;
  }
  return state;
};

export default postData;
