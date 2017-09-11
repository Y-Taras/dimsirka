// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import Contacts from '../components/Contacts';
import Navigation from '../components/Navigation';

const Header = (props: { location: {} }) =>
  <div>
    <div className="header-container">
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src="/dist/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="header__top">
          <Contacts {...props} />
        </div>
        <div className="container">
          <Navigation />
        </div>
      </header>
    </div>
    <div className="header-block" />
  </div>;

export default Header;
