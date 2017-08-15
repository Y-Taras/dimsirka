import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Header = () =>  (
  <div>
      <NavLink activeClassName="active" to="/register">
        <FormattedMessage id="header.navigation.register" />
      </NavLink>
      <NavLink activeClassName="active" to="/login">
        <FormattedMessage id="header.navigation.login" />
      </NavLink>
  </div>
  )

export default Header
