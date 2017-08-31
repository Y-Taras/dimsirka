import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const AnimalCard = () =>
  <div className="animal-card">
    <div className="animal-card__image" />
    <span className="animal-card__icon--dog" />
    <table className="animal-card__table">
      <tbody>
        <tr>
          <td className="animal-card__props">
            <FormattedMessage id="landing.animalCard.breed" />
          </td>
          <td className="animal-card__data">Йоркширський терєр</td>
        </tr>
        <tr>
          <td className="animal-card__props">
            <FormattedMessage id="landing.animalCard.sex" />
          </td>
          <td className="animal-card__data">Самець</td>
        </tr>
        <tr>
          <td className="animal-card__props">
            <FormattedMessage id="landing.animalCard.color" />
          </td>
          <td className="animal-card__data">Чорний з паленим</td>
        </tr>
        <tr>
          <td className="animal-card__props">
            <FormattedMessage id="landing.animalCard.birthday" />
          </td>
          <td className="animal-card__data">27.07.2015</td>
        </tr>
      </tbody>
    </table>
    <Link to="#" className="button-card button--text-uppercase">
      <FormattedMessage id="landing.animalCard.toHelp" />
    </Link>
  </div>;

export default AnimalCard;
