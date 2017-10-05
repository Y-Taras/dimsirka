/* eslint-disable no-console */
// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const AnimalCard = (props: { randomAnimal: RandomAnimal }) => {

  const { breed, age, gender, name } = props.randomAnimal.attributes;

  return (

    <div className="animal-card">
      <div className="animal-card__image" />
      <span className="animal-card__dog-name">
        {name}
      </span>
      <table className="animal-card__table">
        <tbody>
          <tr>
            <td className="animal-card__props">
              <FormattedMessage id="landing.animalCard.breed" />
            </td>
            <td className="animal-card__data">{breed}</td>
          </tr>
          <tr>
            <td className="animal-card__props">
              <FormattedMessage id="landing.animalCard.age" />
            </td>
            <td className="animal-card__data">{age}</td>
          </tr>
          <tr>
            <td className="animal-card__props">
              <FormattedMessage id="landing.animalCard.gender" />
            </td>
            <td className="animal-card__data">{gender}</td>
          </tr>
        </tbody>
      </table>
      <Link to="#dogsid" className="button-card button--text-uppercase">
        <FormattedMessage id="landing.animalCard.toHelp" />
      </Link>
    </div>
  );
};

export default AnimalCard;
