import { GET_RANDOM_ANIMAL } from '../constants/actions';

const randomAnimalData = (state = {}, action) => {
  if (action.type === GET_RANDOM_ANIMAL) {
    return action.payload;
  }
  return state;
};

export default randomAnimalData;
