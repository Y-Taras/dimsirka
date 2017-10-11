// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

const LandingAnimalsSummary = ({
  animalsNumber
}: {
  animalsNumber: {
    cats: string,
    dogs: string
  }
}) => (
  <section className="landing-animals">
    <div className="container">
      <div className="landing-animals__numbers">
        <span className="landing-animals__typed">
          <span className="landing-animals__number">{animalsNumber.cats}</span>
          <span className="sprites units_cat" />
          <FormattedMessage id="landing.animalNumbers.unit_cats" />
        </span>
        <span className="landing-animals__typed">
          <span className="landing-animals__number">{animalsNumber.dogs}</span>
          <span className="sprites units_dog" />
          <FormattedMessage id="landing.animalNumbers.unit_dogs" />
        </span>
      </div>
    </div>
  </section>
);

export default LandingAnimalsSummary;
