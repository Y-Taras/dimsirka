// @flow

import React from 'react'
import { FormattedMessage } from 'react-intl'
import HelpForm from '../components/HelpForm'

const Help = () => (
  <section className="help">
    <h3 className="help__title">
      <FormattedMessage id="helpForm.finance.title"/>
    </h3>
    <div className="help__container">
      <p className="help__form-caption"><FormattedMessage id="helpForm.finance.description"/></p>
      <HelpForm />
    </div>
  </section>
)


export default Help
