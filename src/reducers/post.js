// @flow

import { ADD_POST_DATA } from '../constants/actions';

const initialState = {};
type State = {};
const postData = (state: State = initialState, action: Action) => {
  if (action.type === ADD_POST_DATA) {
    return action.payload;
  }
  return state;
};

export default postData;
