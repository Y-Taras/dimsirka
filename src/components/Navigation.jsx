// @flow

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Navigation = ({ urlPrefix }: { urlPrefix: string }) => (
  <div className="header__bottom">
    <div className="header__logo">
      <Link to={`/${urlPrefix}`}>
        <img src="/dist/images/logo.png" alt="dog logo" />
      </Link>
    </div>
    <div className="nav-container">
      <nav className="nav nav-left">
        <div className="dropdown">
          <span className="nav__link">
            <FormattedMessage id="header.ourAnimals.title" />
          </span>
          <div className="dropdown__content">
            <NavLink className="dropdown__link" to={`/${urlPrefix}takeDog`}>
              <FormattedMessage id="header.ourAnimals.takeDog" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}takeCat`}>
              <FormattedMessage id="header.ourAnimals.takeCat" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}onlineCare`}>
              <FormattedMessage id="header.ourAnimals.careOnline" />
            </NavLink>
          </div>
        </div>
        <NavLink className="nav__link" to={`/${urlPrefix}projects`}>
          <FormattedMessage id="header.projects" />
        </NavLink>
        <div className="dropdown">
          <NavLink className="nav__link" to={`/${urlPrefix}ourAnimals`}>
            <FormattedMessage id="header.search.title" />
          </NavLink>
          <div className="dropdown__content">
            <NavLink className="dropdown__link" to={`/${urlPrefix}takeDog`}>
              <FormattedMessage id="header.search.lost" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}takeCat`}>
              <FormattedMessage id="header.search.found" />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
    <div className="nav-container">
      <nav className="nav nav-right">
        <div className="dropdown">
          <span className="nav__link">
            <FormattedMessage id="header.news.title" />
          </span>
          <div className="dropdown__content">
            <NavLink className="dropdown__link" to={`/${urlPrefix}ourNews`}>
              <FormattedMessage id="header.news.ourNews" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}actions`}>
              <FormattedMessage id="header.news.actions" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}useful`}>
              <FormattedMessage id="header.news.useful" />
            </NavLink>
          </div>
        </div>
        <NavLink className="nav__link" to={`/${urlPrefix}shop`}>
          <FormattedMessage id="header.shop" />
        </NavLink>
        <div className="dropdown">
          <span className="nav__link">
            <FormattedMessage id="header.aboutUs.title" />
          </span>
          <div className="dropdown__content">
            <NavLink className="dropdown__link" to={`/${urlPrefix}name`}>
              <FormattedMessage id="header.aboutUs.name" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}team`}>
              <FormattedMessage id="header.aboutUs.team" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}partners`}>
              <FormattedMessage id="header.aboutUs.partners" />
            </NavLink>
          </div>
        </div>
      </nav>
      <NavLink className="nav__link nav__button" to={`/${urlPrefix}support`}>
        <FormattedMessage id="header.support" />
      </NavLink>
    </div>
  </div>
)

export default Navigation
