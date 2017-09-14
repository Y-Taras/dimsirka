// @flow

import { SET_LOCALE } from '../constants/actions'

const initialState = {
  locale: '',
}

const locale = (state: string = initialState.locale, action: Action) => {
  if (action.type === SET_LOCALE) {
    return action.payload
  }
  return state
}

export const getPrefix = (state: string) => {
  switch (state.substr(0,2)) {
    case 'en':
      return 'en/'
    case 'uk':
      return ''
    case 'ru':
      return 'ru/'
    default:
      return ''
  }
}

export const getLang = (state: string) => {
  switch (state.substr(0,2)) {
    case 'en':
      return 'en'
    case 'uk':
      return 'uk'
    case 'ru':
      return 'ru'
    default:
      return 'uk'
  }
}

export default locale
