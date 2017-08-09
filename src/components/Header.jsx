// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Header = () =>  (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Logo
      </NavLink>
      <NavLink activeClassName="active" to="/adoption">
        <FormattedMessage id="header.navigation.adoption" />
      </NavLink>
      <NavLink activeClassName="active" to="/lost">
        <FormattedMessage id="header.navigation.lost" />
      </NavLink>
      <NavLink activeClassName="active" to="/volunteer">
        <FormattedMessage id="header.navigation.volunteer" />
      </NavLink>
      <NavLink activeClassName="active" to="/aboutUs">
        <FormattedMessage id="header.navigation.aboutUs" />
      </NavLink>
      <NavLink activeClassName="active" to="/webcams">
        <FormattedMessage id="header.navigation.webcams" />
      </NavLink>
      <NavLink activeClassName="active" to="/register">
        <FormattedMessage id="header.navigation.register" />
      </NavLink>
      <NavLink activeClassName="active" to="/donate">
        <FormattedMessage id="header.navigation.donate" />
      </NavLink>
      <NavLink activeClassName="active" to="/news">
        <FormattedMessage id="header.navigation.news" />
      </NavLink>
      <NavLink activeClassName="active" to="/shop">
        <FormattedMessage id="header.navigation.shop" />
      </NavLink>
    </nav>
  )

export default Header
