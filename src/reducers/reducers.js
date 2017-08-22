// @flow

/* eslint no-console: 0 */


import { combineReducers } from 'redux';
import { ADD_POSTLIST_DATA, ADD_POST_DATA } from '../constants/actions';

const postlistData = (state = [], action: Action) => {
  if (action.type === ADD_POSTLIST_DATA) {
    return action.payload;
  }
  return state;
};

const postData = (state = {}, action: Action) => {
  if (action.type === ADD_POST_DATA) {
    return Object.assign({}, state, { [action.payload.articleId]: action.payload })
  }
  return state;
};

const rootReducer = combineReducers({ postlistData, postData });

export default rootReducer;


