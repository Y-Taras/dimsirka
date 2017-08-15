// @flow

import { combineReducers } from 'redux';
import { ADD_POSTLIST_DATA, ADD_POST_DATA } from './actions';

const postlistData = (state = [], action) => {
  if (action.type === ADD_POSTLIST_DATA) {
    return action.payload;
  }
  return state;
};

const postData = (state = [], action) => {
  if (action.type === ADD_POST_DATA) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({ postlistData, postData });

export default rootReducer;


