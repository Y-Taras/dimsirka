// @flow

import React from 'react'

import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import uk from 'react-intl/locale-data/uk'
import ru from 'react-intl/locale-data/ru'
import { connect } from 'react-redux'
import { setLocale } from './actions/actionCreators'

import flattenMessages from './utils'
import messages from './constants/messages'

import Routes from './AppRoutes'

const AppI18n = (props: { getLocaleData: Function, locale: string }) => {
  addLocaleData([...en, ...uk, ...ru])

  const locale =
    (navigator.languages && navigator.languages[0]) || navigator.language ||
    navigator.userLanguage || 'uk'

  if (!props.locale) {
    props.getLocaleData(locale)
  }
  else {
    return (
      <IntlProvider locale={props.locale} key={props.locale}
                    messages={flattenMessages(messages[props.locale])}>
        <Routes/>
      </IntlProvider>
    )
  }
  return (
    <h1 style={{display: 'flex', justifyContent: 'center'}}>
      Oops something is wrong...{JSON.stringify(props)}
    </h1>
  )
}

const mapStateToProps = state => {
  const locale = state.locale ? state.locale : ''
  return {locale}
}

const mapDispatchToProps = (dispatch: Function) => ({
  getLocaleData (locale) {
    dispatch(setLocale(locale))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppI18n)
