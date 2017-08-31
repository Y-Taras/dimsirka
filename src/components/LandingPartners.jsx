// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

const LandingPartners = () =>
  <section className="partners">
    <div className="container">
      <h3 className="partners__title">
        <FormattedMessage id="landing.partners.title" />
      </h3>
      <div className="partners__logos">
        <a
          href="https://uteam.ua"
          className="partners__logo partners__logo--1st"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={'visuallyhidden'}>Uteam link</span>
        </a>
        <a
          href="https://coaxsoft.com"
          className="partners__logo partners__logo--2nd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={'visuallyhidden'}>Coax link</span>
        </a>
      </div>
    </div>
  </section>;

export default LandingPartners;
