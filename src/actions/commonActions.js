/* eslint-disable no-console */
// @flow

import { SET_LOCALE, SET_POSTS_CATEGORY } from '../constants/actions';

export function setLocale(locale: string) {
  return { type: SET_LOCALE, payload: locale };
}

export function setNewsCategory(newsCategory: string | null) {
  return { type: SET_POSTS_CATEGORY, payload: newsCategory };
}

/*
/api/v1/posts?locale=uk - 4 posts depending on locale
/api/v1/posts?locale=uk&category_id=3&page=1 - Interesting
/api/v1/posts?locale=uk&category_id=4&page=1 - Information
/api/v1/posts?locale=uk&category_id=5&page=1 - Action
*/
