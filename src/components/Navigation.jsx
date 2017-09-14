// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Navigation = ({ urlPrefix }: { urlPrefix: string }) => (
  <div className="header__bottom">
    <nav className="nav nav-left">
      <NavLink className="nav__link" to={`/${urlPrefix}care`}>
        <FormattedMessage id="header.navigation.care" />
      </NavLink>
      <NavLink className="nav__link" to={`/${urlPrefix}search`}>
        <FormattedMessage id="header.navigation.search" />
      </NavLink>
      <NavLink className="nav__link" to={`/${urlPrefix}news`}>
        <FormattedMessage id="header.navigation.news" />
      </NavLink>
      <NavLink className="nav__link" to={`/${urlPrefix}shop`}>
        <FormattedMessage id="header.navigation.shop" />
      </NavLink>
    </nav>
    <nav className="nav nav-right">
      <NavLink className="nav__link" to={`/${urlPrefix}reg_animals`}>
        <FormattedMessage id="header.navigation.reg_animals" />
      </NavLink>
      <NavLink className="nav__link" to={`/${urlPrefix}aboutUs`}>
        <FormattedMessage id="header.navigation.aboutUs" />
      </NavLink>
      <NavLink className="nav__link nav__button" to={`/${urlPrefix}volunteer`}>
        <FormattedMessage id="header.navigation.toHelp" />
      </NavLink>
    </nav>
  </div>
);

export default Navigation;
