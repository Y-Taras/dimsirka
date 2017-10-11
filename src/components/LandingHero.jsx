/* eslint-disable no-lone-blocks */
// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import AnimalCard from '../components/AnimalCard';

const LandingHero = ({ randomAnimal }: { randomAnimal: RandomAnimal }) => (
  <section className="hero">
    <div className="container hero__container">
      <div className="hero--left">
        <h1 className="hero__title">
          <FormattedMessage id="landing.hero.title" />
        </h1>
        <div className="hero__links">
          <Link className="hero__link" to="#">
            <FormattedMessage id="landing.hero.care" />
          </Link>
          <Link className="hero__link" to="#">
            <FormattedMessage id="landing.hero.adoption" />
          </Link>
        </div>
      </div>
      <div className="hero--right">
        <AnimalCard randomAnimal={randomAnimal} />
      </div>
    </div>
  </section>
);

export default LandingHero;
