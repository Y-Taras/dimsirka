// @flow

import React from 'react';
import FooterContacts from './FooterContacts';
import FooterSitemap from './FooterSitemap';

const Footer = ({ urlPrefix }: { urlPrefix: string }) => (
  <footer className="footer">
    <div className="container footer--flex">
      <FooterContacts />
      <FooterSitemap urlPrefix={urlPrefix} />
    </div>
  </footer>
);

export default Footer;
