// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Navigation = () =>  (
    <div className="header__bottom">
      <nav className="nav nav-left">
        <NavLink className="nav__link" to="/adoption">
          <FormattedMessage id="header.navigation.adoption" />
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
      <div className="logo"><img src="#" alt=""/></div>
      <nav className="nav nav-right">
        <NavLink className="nav__link" to="/reg_animals">
          <FormattedMessage id="header.navigation.reg_animals" />
        </NavLink>
        <NavLink className="nav__link" to="/aboutUs">
          <FormattedMessage id="header.navigation.aboutUs" />
        </NavLink>
        <NavLink className="nav__link" to="/volunteer">
          <FormattedMessage id="header.navigation.volunteer" />
        </NavLink>
      </nav>
    </div>
  )

export default Navigation
