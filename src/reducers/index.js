// @flow

import { combineReducers } from 'redux';

import locale from './locale';
import postlistData from './posts';
import postData from './post';
import newsCategory from './postsCategory';
import randomAnimalData from './landing'

const rootReducer = combineReducers({ locale, postlistData, postData, newsCategory, randomAnimalData });

export default rootReducer;
