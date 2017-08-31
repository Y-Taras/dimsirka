// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const icons = ['house', 'syringe', 'cross'];

const LandingWorkFlow = () =>
  <section className="work-flow">
    <div className="container">
      <div className="work-flow__header">
        <Link to="/care" className="work-flow__header-link">
          <FormattedMessage id="landing.workFlow.header.link1" />
        </Link>
        <Link to="/adoption" className="work-flow__header-link">
          <FormattedMessage id="landing.workFlow.header.link2" />
        </Link>
      </div>
      <div className="work-flow__main">
        <h2 className="work-flow__title">
          <FormattedMessage id="landing.workFlow.title" />
        </h2>
        <ul className="work-flow__list">
          {icons.map((iconName, index) =>
            <li className="work-flow__item" key={iconName}>
              <div className={`icon sprites icon_${iconName}`} />
              <h3 className="work-flow__item-header">
                <FormattedMessage id={`landing.workFlow.card.title${index + 1}`} />
              </h3>
              <p className="work-flow__description">
                <FormattedMessage id={`landing.workFlow.card.text${index + 1}`} />
              </p>
              <Link to={`/${iconName}details`} className="button button--orange">
                <FormattedMessage id="landing.workFlow.card.buttonText" />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  </section>;

export default LandingWorkFlow;
