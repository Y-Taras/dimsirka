// @flow

import React from 'react';

import FooterContacts from './FooterContacts';
import FooterSitemap from './FooterSitemap';

const Footer = () =>
  <footer className="footer">
    <div className="container">
      <FooterContacts/>
      <FooterSitemap />
    </div>
  </footer>;

export default Footer;
