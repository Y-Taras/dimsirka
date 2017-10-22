// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import HelpFormFinance from '../components/HelpFormFinance';
import HelpFormVolunteer from '../components/HelpFormVolunteer';

const HelpForm = () => (
  <section className="help-form">
    <h3 className="help-form__title help-form__title--green">
      <FormattedMessage id="helpForm.finance.title" />
    </h3>
    <div className="help-form__container">
      <p className="help-form__caption">
        <FormattedMessage id="helpForm.finance.description" />
      </p>
      <HelpFormFinance />
      <h3 className="help-form__title help-form__title--zero-bottom">
        <FormattedMessage id="helpForm.volunteer.title" />
      </h3>
      <p className="help-form__caption">
        <FormattedMessage id="helpForm.volunteer.description" />
      </p>
      <HelpFormVolunteer />
    </div>
  </section>
);

export default HelpForm;
