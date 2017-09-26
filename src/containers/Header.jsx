// @flow

import React from 'react';
import type { RouterHistory, Location } from 'react-router-dom';
import Contacts from '../components/Contacts';
import Navigation from '../components/Navigation';

const Header = (props: { history: RouterHistory, location: Location, urlPrefix: string }) => (
  <div>
    <div className="header-fixed">
      <header className="header">
        <Contacts {...props} />
        <Navigation urlPrefix={props.urlPrefix} />
      </header>
    </div>
    <div className="header-block" />
  </div>
);

export default Header;
