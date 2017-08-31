// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Navigation = () =>  (
    <div className="header__bottom">
      <nav className="nav nav-left">
        <NavLink className="nav__link" to="/care">
          <FormattedMessage id="header.navigation.care" />
        </NavLink>
        <NavLink className="nav__link" to="/search">
          <FormattedMessage id="header.navigation.search" />
        </NavLink>
        <NavLink className="nav__link" to="/news">
          <FormattedMessage id="header.navigation.news" />
        </NavLink>
        <NavLink className="nav__link" to="/shop">
          <FormattedMessage id="header.navigation.shop" />
        </NavLink>
      </nav>
      <nav className="nav nav-right">
        <NavLink className="nav__link" to="/reg_animals">
          <FormattedMessage id="header.navigation.reg_animals" />
        </NavLink>
        <NavLink className="nav__link" to="/aboutUs">
          <FormattedMessage id="header.navigation.aboutUs" />
        </NavLink>
        <NavLink className="nav__link nav__button" to="/volunteer">
          <FormattedMessage id="header.navigation.toHelp" />
        </NavLink>
      </nav>
    </div>
  )

export default Navigation
