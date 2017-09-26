import { ADD_POSTLIST_DATA } from '../constants/actions';

const postListData = (state = {}, action) => {
  if (action.type === ADD_POSTLIST_DATA) {
    return action.payload;
  }
  return state;
};

export default postListData;
