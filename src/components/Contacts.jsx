// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import type { RouterHistory, Location } from 'react-router-dom';

import { getLang } from '../reducers/locale';
import { setLocale } from '../actions/actionCreators';
import { switchLangHepler } from '../utils';

const Contacts = ({
  lang,
  urlPrefix,
  setLocaleData,
  location,
  history
}: {
  lang: string,
  urlPrefix: string,
  setLocaleData: Function,
  location: Location,
  history: RouterHistory
}) => {
  const changeLang = newLang => () => {
    if (lang !== newLang) {
      const newUrl = switchLangHepler(lang, newLang, location.pathname);
      setLocaleData(newLang);
      localStorage.setItem('lang', String(newLang));
      history.replace(newUrl);
    }
  };

  const langClass = 'contact--lang';
  return (
    <div className="contacts">
      <div className="contacts-left">
        <div className="contact" onClick={changeLang('uk')} role={'button'} tabIndex={0}>
          <span className={lang === 'uk' ? langClass : ''}>укр</span>
        </div>
        <div className="contact" onClick={changeLang('en')} role={'button'} tabIndex={0}>
          <span className={lang === 'en' ? langClass : ''}>eng</span>
        </div>
        <div className="contact" onClick={changeLang('ru')} role={'button'} tabIndex={0}>
          <span className={lang === 'ru' ? langClass : ''}>рус</span>
        </div>
        <a className="contact contact--mobile" href="tel:+380997124680">
          <span className="contact__text">(099)71 24 680</span>
        </a>
        <a className="contact contact--mobile" href="mailto:dimsirka@gmail.com">
          <span className="contact__text">dimsirka@gmail.com</span>
        </a>
      </div>
      <div className="contacts-right">
        <Link className="contact" to={`/${urlPrefix}webcams`}>
          <span className="contact__text">
            <FormattedMessage id="header.webcams" />
          </span>
        </Link>
        <Link className="contact" to="#">
          <span className="contact__text">
            <FormattedMessage id="header.register" />
          </span>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  lang: getLang(state.locale)
});

const mapDispatchToProps = (dispatch: Function) => ({
  setLocaleData(locale) {
    dispatch(setLocale(locale));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
