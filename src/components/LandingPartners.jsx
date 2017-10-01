// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

const LandingPartners = () => (
  <section className="partners">
    <div className="container">
      <h3 className="partners__title">
        <FormattedMessage id="landing.partners.title" />
      </h3>
      <h4 className="partners__sponsors-title">
        <FormattedMessage id="landing.partners.sponsors" />
      </h4>
      <a href="https://uteam.ua" className="partners__sponsors-logo" target="_blank" rel="noopener noreferrer">
        <span className={'visuallyhidden'}>Uteam link</span>
      </a>
      <a href="https://coaxsoft.com" className="partners__sponsors-logo" target="_blank" rel="noopener noreferrer">
        <span className={'visuallyhidden'}>Coax link</span>
      </a>
      <h4 className="patners__list-title">
        <FormattedMessage id={'landing.partners.projectPartners'} />
      </h4>
      <div className="partners__list">list
      </div>
    </div>
  </section>
);

export default LandingPartners;
