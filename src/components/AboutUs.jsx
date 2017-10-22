// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import AboutUsHistory from './AboutUsHistory';

const AboutUs = () => (
  <section className="aboutUs">
    <div className="aboutUs__title">
      <FormattedMessage id="aboutUs.title" />
    </div>
    <div className="aboutUs__container">
      <AboutUsHistory />
      <picture className="aboutUs__picture">
        <img className="aboutUs__image" src="/dist/images/group_photo.png" alt="volunteer's group" />
      </picture>
      <p className="aboutUs__info">
        <FormattedMessage id="aboutUs.info_1" />
        <br />
        <FormattedMessage id="aboutUs.info_2" />
        <br />
        <br />
        <FormattedMessage id="aboutUs.info_3" />
      </p>
      <p className="aboutUs__invitation">
        <span className="aboutUs__invitation-text">
          <FormattedMessage id="aboutUs.welcome" />
        </span>
        <span className="aboutUs__invitation-contact">
          <FormattedMessage id="aboutUs.contact" />
        </span>
        <span className="aboutUs__invitation-phones">
          <FaPhone size={16} style={{ color: '#40b09f', marginTop: '3px' }} />
          <span className="aboutUs__invitation-tels">
            <a href="tel:+380997124680" className="aboutUs__invitation-link">
              {`099 712 46 80 - `}<span className="aboutUs__invitation-name">
                <FormattedMessage id="aboutUs.name_1" />
              </span>
            </a>
            <a href="tel:+380674087199" className="aboutUs__invitation-link">
              {`067 408 71 99 - `}<span className="aboutUs__invitation-name">
                <FormattedMessage id="aboutUs.name_2" />
              </span>
            </a>
          </span>
        </span>
        <span className="aboutUs__invitation-email">
          <FaEnvelopeO size={16} style={{ color: '#40b09f' }} />
          <a href="mailto:terezaborodenchyk@gmail.com" className="aboutUs__invitation-link">
            terezaborodenchyk@gmail.com
          </a>
        </span>
      </p>
    </div>
  </section>
);
export default AboutUs;
