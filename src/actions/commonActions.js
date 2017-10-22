/* eslint-disable no-console */
// @flow

import { SET_LOCALE, SET_POSTS_CATEGORY } from '../constants/actions';

export function setLocale(locale: string) {
  return { type: SET_LOCALE, payload: locale };
}

export function setNewsCategory(newsCategory: string | null) {
  return { type: SET_POSTS_CATEGORY, payload: newsCategory };
}
