import React from 'react'
import { render } from 'react-dom'

import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import uk from 'react-intl/locale-data/uk'

import flattenMessages from './utils'
import messages from './api/messages'

import App from './App'

const renderApp = () => {
  addLocaleData([...en, ...uk])

  const locale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'uk'

  render(
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
      <App />
    </IntlProvider>,
    document.getElementById('app')
  )
}
renderApp()

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp()
  })
}
