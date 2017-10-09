// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const partners = [
  { logo: 'http://via.placeholder.com/220x110', id: '1' },
  { logo: 'http://via.placeholder.com/220x110', id: '2' },
  { logo: 'http://via.placeholder.com/220x110', id: '3' },
  { logo: 'http://via.placeholder.com/220x110', id: '4' },
  { logo: 'http://via.placeholder.com/220x110', id: '5' },
  { logo: 'http://via.placeholder.com/220x110', id: '6' },
  { logo: 'http://via.placeholder.com/220x110', id: '7' },
  { logo: 'http://via.placeholder.com/220x110', id: '8' },
  { logo: 'http://via.placeholder.com/220x110', id: '9' }
];

const LandingPartners = () => (
  <section className="partners">
    <div className="container">
      <h3 className="partners__title">
        <FormattedMessage id="landing.partners.title" />
      </h3>
      <h4 className="partners__small-title">
        <FormattedMessage id="landing.partners.sponsors" />
      </h4>
      <div className="partners__logos">
        <a href="https://uteam.ua" className="partners__logo" target="_blank" rel="noopener noreferrer">
          <span className={'visuallyhidden'}>Uteam link</span>
        </a>
        <a href="https://coaxsoft.com" className="partners__logo" target="_blank" rel="noopener noreferrer">
          <span className={'visuallyhidden'}>Coax link</span>
        </a>
      </div>
      <h4 className="partners__small-title">
        <FormattedMessage id={'landing.partners.projectPartners'} />
      </h4>
      <div className="partners__list">
        {partners.map(item => (
          <div key={item.id} className={'partners__list-item'} style={{ backgroundImage: `url('${item.logo}')` }} />
        ))}
        <div className="partners__list-item">
          <Link className={'partners__additon-button'} to={'#'}>
            <FormattedMessage id={'landing.partners.join'} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default LandingPartners;
