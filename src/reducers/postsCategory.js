// @flow

import { SET_POSTS_CATEGORY } from '../constants/actions';

const initialState = null;

const newsCategory = (state: string | null = initialState, action: Action) => {
  if (action.type === SET_POSTS_CATEGORY) {
    return action.payload;
  }
  return state;
};

export default newsCategory;
