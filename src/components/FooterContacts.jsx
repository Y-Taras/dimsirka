// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

const FooterContacts = () => (
  <div className="footer__contacts">
    <div className="footer__address">
      <span className="footer__category-title">
        <FormattedMessage id={'footer.contacts.title'} />
      </span>
      <address className="footer__address-content">
        <a href="mailto:dimsirka@gmail.com" className="footer__address-email">
          dimsirka@gmail.com
        </a>
        <span className="footer__address-postal">
          <FormattedMessage id={'footer.contacts.adr'} />
        </span>
        <a href="tel:+380342756421" className="footer__address-phone">
          (0342)&nbsp;75&nbsp;64&nbsp;21
        </a>
      </address>
    </div>
    <div className="footer__social">
      <a
        href="https://www.facebook.com/groups/dimsirka"
        className="footer__social-icon footer__icon footer__icon--facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={'visuallyhidden'}>Facebook page link</span>
      </a>
      <a
        href="https://www.instagram.com/dim__sirka"
        className="footer__social-icon footer__icon footer__icon--instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={'visuallyhidden'}>Instagram posts link</span>
      </a>
      <a
        href="https://www.gofundme.com/DimSirkaIF"
        className="footer__social-icon footer__icon footer__icon--me"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={'visuallyhidden'}>GoFundMe fundraising link</span>
      </a>
    </div>
  </div>
);

export default FooterContacts;
