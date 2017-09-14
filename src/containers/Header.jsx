// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import type { RouterHistory, Location } from 'react-router-dom';
import Contacts from '../components/Contacts';
import Navigation from '../components/Navigation';

const Header = (props: { history: RouterHistory, location: Location, urlPrefix: string }) => (
  <div>
    <div className="header-container">
      <header className="header">
        <div className="header__logo">
          <Link to={`/${props.urlPrefix}`}>
            <img src="/dist/images/logo.png" alt="dog logo" />
          </Link>
        </div>
        <div className="header__top">
          <Contacts {...props} />
        </div>
        <div className="container">
          <Navigation urlPrefix={props.urlPrefix} />
        </div>
      </header>
    </div>
    <div className="header-block" />
  </div>
);

export default Header;
