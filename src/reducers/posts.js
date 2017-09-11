// @flow

import { ADD_POSTLIST_DATA } from '../constants/actions';

const initialState = {
  postsList: []
};

const postlistData = (state: Array<PostListItem> = initialState.postsList, action: Action) => {
  if (action.type === ADD_POSTLIST_DATA) {
    return action.payload;
  }
  return state;
};

export default postlistData;
