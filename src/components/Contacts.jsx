// @flow

import React from 'react';
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Contacts = () => (
  <div className="container contacts-flex">
      <div className="contacts contacts-left">
      <span className="contact contact-lang">укр</span>
      <span className="contact contact-lang">eng</span>
      <Link className="contact" to="tel:+380997124680">
        <span className ="contact__text">(099)71 24 680</span>
      </Link>
      <Link className="contact" to="mailto:dimsirka@gmail.com">
        <span className ="contact__text">dimsirka@gmail.com</span>
      </Link>
    </div>
    <div className="contacts contacts-right">
      <Link className="contact" to="/webcams">
        <span className ="contact__text"><FormattedMessage id="header.navigation.webcams" /></span>
      </Link>
      <Link className="contact" to="#">
        <span className ="contact__text"><FormattedMessage id="header.navigation.register" /></span>
      </Link>
    </div>
  </div>
)

export default Contacts;
