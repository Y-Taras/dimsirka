// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

const AboutUsHistory = () => (
  <article className="aboutUs__history">
    <div className="aboutUs__history-section">
      <span className="aboutUs__history-year">2012</span>
      <span className="aboutUs__history-content">
        <FormattedMessage id={'aboutUs.history_2012_1'} />
        <br />
        <FormattedMessage id={'aboutUs.history_2012_2'} />
      </span>
    </div>
    <div className="aboutUs__history-section">
      <span className="aboutUs__history-year">2012</span>
      <span className="aboutUs__history-content">
        <FormattedMessage id={'aboutUs.history_2012_3'} />
      </span>
    </div>
    <span className="aboutUs__history-section">
      <span className="aboutUs__history-year">2015</span>
      <span className="aboutUs__history-content">
        <FormattedMessage id={'aboutUs.history_2015_1'} />
      </span>
    </span>
    <span className="aboutUs__history-section">
      <span className="aboutUs__history-year">2016</span>
      <span className="aboutUs__history-content">
        <FormattedMessage id={'aboutUs.history_2016_1'} />
        <br />
        <FormattedMessage id={'aboutUs.history_2016_2'} />
      </span>
    </span>
  </article>
);
export default AboutUsHistory;
