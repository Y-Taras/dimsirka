// @flow

import { combineReducers } from 'redux';

import locale from './locale';
import postlistData from './posts';
import postData from './post';
import newsCategory from './newsCategory';

const rootReducer = combineReducers({ locale, postlistData, postData, newsCategory });

export default rootReducer;
