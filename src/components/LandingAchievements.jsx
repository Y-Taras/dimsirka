// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

const achievs = {
  money: '2 567 324',
  placed: 750,
  sterilized: 159,
  cured: 159
};

const LandingAchievements = () => (
  <section className="achievements">
    <div className="container">
      <div className="achievements__success">
        <h3 className="achievements__title">
          <span className="achievements__icon landing__icon landing__icon--medal" />
          <span className="achievements__success-title">
            <FormattedMessage id="landing.achievements.title.header" />
          </span>
        </h3>
        <div className="achievements__success-million">{achievs.money}</div>
        <div className="achievements__success-text">
          <FormattedMessage id="landing.achievements.title.text" />
        </div>
      </div>
      <ul className="achievements__list">
        <li className="achievements__list-item">
          <span className="achievements__list-icon landing__icon landing__icon--placed" />
          <span className="achievements__category-data">{achievs.placed}</span>
          <span className="achievements__category-text">
            <FormattedMessage id="landing.achievements.placed" />
          </span>
        </li>
        <li className="achievements__list-item">
          <span className="achievements__list-icon landing__icon landing__icon--sterilized" />
          <span className="achievements__category-data">{achievs.sterilized}</span>
          <span className="achievements__category-text">
            <FormattedMessage id="landing.achievements.sterilized" />
          </span>
        </li>
        <li className="achievements__list-item">
          <span className="achievements__list-icon landing__icon landing__icon--cured" />
          <span className="achievements__category-data">{achievs.cured}</span>
          <span className="achievements__category-text">
            <FormattedMessage id="landing.achievements.cured" />
          </span>
        </li>
      </ul>
      <a className="achievements__button-report button-work-flow button--blue" href="https://drive.google.com/#">
        <FormattedMessage id="landing.achievements.viewReport" />
      </a>
    </div>
  </section>
);

export default LandingAchievements;
