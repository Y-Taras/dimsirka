// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

const achievs = {
  placed: 750,
  sterilized: 159,
  cured: 159
};

const LandingAchievements = () => (
  <section className="achievements">
    <div className="container container--flex">
      <div className="achievements__success">
        <div className="achievements__icon" />
        <h3 className="achievements__success-title">
          <FormattedMessage id="landing.achievements.title.header" />
        </h3>
        <div className="achievements__success-text">
          <FormattedMessage id="landing.achievements.title.text" />
        </div>
        <div className="achievements__success-million">
          <FormattedMessage id="landing.achievements.title.money" />
        </div>
      </div>
      <div className="achievements__stats">
        <ul className="achievments__list">
          <li className="achievements__item">
            <span className="achievements__category-data">{achievs.placed}</span>
            <span className="achievements__category">
              <FormattedMessage id="landing.achievements.placed" />
            </span>
          </li>
          <li className="achievements__item">
            <span className="achievements__category-data">{achievs.sterilized}</span>
            <span className="achievements__category">
              <FormattedMessage id="landing.achievements.sterilized" />
            </span>
          </li>
          <li className="achievements__item">
            <span className="achievements__category-data">{achievs.cured}</span>
            <span className="achievements__category">
              <FormattedMessage id="landing.achievements.cured" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default LandingAchievements;
