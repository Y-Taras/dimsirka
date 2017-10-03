import { GET_RANDOM_ANIMAL } from '../constants/actions';

const initialState = {
  id: '',
  type: '',
  attributes: {
    age: 0,
    gender: '',
    breed: ''
  }
}

const randomAnimalData = (state = initialState, action) => {
  if (action.type === GET_RANDOM_ANIMAL) {
    return action.payload;
  }
  return state;
};

export default randomAnimalData;
