// @flow

import { ADD_POST_DATA } from '../constants/actions';

const initialState = {};

const postData = (state: {[string]: Post} = initialState, action: Action) => {
  if (action.type === ADD_POST_DATA) {
    return Object.assign({}, state, { [action.payload.articleId]: action.payload });
  }
  return state;
};

export default postData;
