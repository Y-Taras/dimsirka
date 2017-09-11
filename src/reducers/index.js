// @flow

import { combineReducers } from 'redux'

import locale from './locale'
import postlistData from './posts'
import postData from './post'


const rootReducer = combineReducers({ locale, postlistData, postData });

export default rootReducer;
