// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import Contacts from '../components/Contacts';
import Navigation from '../components/Navigation';
/*
import PublicNavigation from './PublicNavigation.js'
import AuthenticatedNavigation from './AuthenticatedNavigation.js'

const renderNavigation = authenticated => (authenticated ? <AuthenticatedNavigation /> : <PublicNavigation />)
*/

const Header = (/* { authenticated }: { authenticated: Boolean } */) =>
  <div>
    <div className="header-cont">
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src="/dist/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="header__top">
          <Contacts />
        </div>
        <div className="container">
          <Navigation />
        </div>
      </header>
    </div>
    <div className="header-block" />
  </div>;

export default Header;
