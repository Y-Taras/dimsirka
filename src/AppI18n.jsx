// @flow

import React from 'react';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import uk from 'react-intl/locale-data/uk';
import ru from 'react-intl/locale-data/ru';
import { connect } from 'react-redux';
import { setLocale } from './actions/actionCreators';

import { flattenMessages } from './utils';
import messages from './constants/messages';

import Routes from './AppRoutes';
import { getLang } from './reducers/locale';

const AppI18n = (props: { setLocaleData: Function, locale: string, lang: string }) => {
  addLocaleData([...en, ...uk, ...ru]);

  const locale =
    localStorage.getItem('lang') ||
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    'uk';

  if (!props.locale) {
    props.setLocaleData(locale);
    localStorage.setItem('lang', String(locale));
  } else {
    return (
      <IntlProvider locale={props.lang} key={props.lang} messages={flattenMessages(messages[props.lang])}>
        <Routes />
      </IntlProvider>
    );
  }
  return (
    <h1 style={{ display: 'flex', justifyContent: 'center', color: 'grey', fontSize: '1.4rem' }}>
      Oops something is wrong...{JSON.stringify(props)}
    </h1>
  );
};

const mapStateToProps = state => {
  const locale = state.locale ? state.locale : '';
  const lang = getLang(state.locale);
  return { locale, lang };
};

const mapDispatchToProps = (dispatch: Function) => ({
  setLocaleData(locale) {
    dispatch(setLocale(locale));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppI18n);
