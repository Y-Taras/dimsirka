// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const FooterContacts = () => (
  <div className="footer__top container--flex">
    <div className="footer__contacts-left">
      <div className="footer__logo">
        <Link to="/" className="footer__logo-image" />
        <div className="footer__logo-lines">
          <div className="footer__logo-line footer__logo-line--1st" />
          <div className="footer__logo-line footer__logo-line--2nd" />
          <div className="footer__logo-line footer__logo-line--3rd" />
        </div>
      </div>
      <div className="footer__contacts">
        <div className="footer__contacts-phone">
          <span className="footer__contacts-title">
            <FormattedMessage id="footer.contacts.tel" />
          </span>
          <a href="tel:+380997124680" className="footer__phone-link">
            <span className="footer__contacts-data">(099)&nbsp;71&nbsp;24&nbsp;680</span>
          </a>
        </div>
        <div className="footer__contacts-email">
          <span className="footer__contacts-title">email</span>
          <a href="mailto:dimsirka@gmail.com" className="footer__email-link">
            <span className="footer__contacts-data">dimsirka@ukr.net</span>
          </a>
        </div>
      </div>
    </div>
    <div className="footer__contacts-right">
      <a
        href="https://www.instagram.com/dim__sirka"
        className="footer__socials icon__instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={'visuallyhidden'}>instagram posts link</span>
      </a>
      <a
        href="https://www.facebook.com/groups/dimsirka"
        className="footer__socials icon__facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={'visuallyhidden'}>facebook page link</span>
      </a>
    </div>
  </div>
);

export default FooterContacts;
