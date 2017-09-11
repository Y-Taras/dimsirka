// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppI18n from './AppI18n'
import store from './store/store';

import './scss/main.scss';

const renderApp = () => {
  render(
    <Provider store={store}>
      <AppI18n/>
    </Provider>,
    document.getElementById('app')
  );
};
renderApp();

if (module.hot) {
  module.hot.accept('./AppI18n', () => {
    renderApp();
  });
}
