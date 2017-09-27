// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import AnimalCard from '../components/AnimalCard';

const LandingHero = ({ animalsNumber }: { animalsNumber: { cats: number, dogs: number } }) => (
  <section className="hero">
    <div className="container hero__container">
      <div className="hero--left">
        <h1 className="hero__title">
          <FormattedMessage id="landing.hero.title" />
        </h1>
        <div className="hero__animals-number">
          <span className="hero__animals-number--text">
            {animalsNumber.cats}
            <span className="sprites units_cat" />
            <FormattedMessage id="landing.hero.unit_cats" />
          </span>
          <span className="hero__animals-number--text">
            {animalsNumber.dogs}
            <span className="sprites units_dog" />
            <FormattedMessage id="landing.hero.unit_dogs" />
          </span>
        </div>
      </div>
      <div className="hero--right">
        <AnimalCard />
      </div>
    </div>
  </section>
);

export default LandingHero;
