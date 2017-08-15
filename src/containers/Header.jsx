// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
/*
import PublicNavigation from './PublicNavigation.js'
import AuthenticatedNavigation from './AuthenticatedNavigation.js'

const renderNavigation = authenticated => (authenticated ? <AuthenticatedNavigation /> : <PublicNavigation />)
*/

const AppNavigation = (/* { authenticated }: { authenticated: Boolean } */) =>
  <ul>
    <li>
      <NavLink exact activeClassName="active" to="/">
        Logo
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/adoption">
        <FormattedMessage id="header.navigation.adoption" />
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/lost">
        <FormattedMessage id="header.navigation.lost" />
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/volunteer">
        <FormattedMessage id="header.navigation.volunteer" />
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/aboutUs">
        <FormattedMessage id="header.navigation.aboutUs" />
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/webcams">
        <FormattedMessage id="header.navigation.webcams" />
      </NavLink>
    </li>
    {/*  <li>
     {renderNavigation(authenticated)}
    </li> */}
    <li>
      <NavLink activeClassName="active" to="/donate">
        <FormattedMessage id="header.navigation.donate" />
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/news">
        <FormattedMessage id="header.navigation.news" />
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/shop">
        <FormattedMessage id="header.navigation.shop" />
      </NavLink>
    </li>
  </ul>

export default AppNavigation
