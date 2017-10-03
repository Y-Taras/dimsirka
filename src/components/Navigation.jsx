// @flow

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import AccordionSection from './NavigationAccordion';

const Navigation = ({ urlPrefix }: { urlPrefix: string }) => (
  <div className="header__bottom">
    <div className="header__logo">
      <Link to={`/${urlPrefix}`}>
        <img src="/dist/images/logo.png" alt="dog logo" />
      </Link>
    </div>
    <div className="nav-container">
      <nav className="nav nav-left">
        <AccordionSection title={'ourAnimals'}>
          <NavLink className="dropdown__link" to={`/${urlPrefix}takeDog`}>
            <FormattedMessage id="header.ourAnimals.takeDog" />
          </NavLink>
          <NavLink className="dropdown__link" to={`/${urlPrefix}takeCat`}>
            <FormattedMessage id="header.ourAnimals.takeCat" />
          </NavLink>
          <NavLink className="dropdown__link" to={`/${urlPrefix}onlineCare`}>
            <FormattedMessage id="header.ourAnimals.careOnline" />
          </NavLink>
        </AccordionSection>
        <NavLink className="nav__link" to={`/${urlPrefix}projects`}>
          <FormattedMessage id="header.projects" />
        </NavLink>
        <AccordionSection title={'search'}>
          <NavLink className="dropdown__link" to={`/${urlPrefix}#`}>
            <FormattedMessage id="header.search.lost" />
          </NavLink>
          <NavLink className="dropdown__link" to={`/${urlPrefix}#`}>
            <FormattedMessage id="header.search.found" />
          </NavLink>
        </AccordionSection>
      </nav>
    </div>
    <div className="nav-container">
      <nav className="nav nav-right">
        <AccordionSection title={'news'}>
            <NavLink className="dropdown__link" to={`/${urlPrefix}news/our`}>
              <FormattedMessage id="header.news.ourNews" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}news/actions`}>
              <FormattedMessage id="header.news.actions" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}news/info`}>
              <FormattedMessage id="header.news.useful" />
            </NavLink>
        </AccordionSection>
        <NavLink className="nav__link" to={`/${urlPrefix}shop`}>
          <FormattedMessage id="header.shop" />
        </NavLink>
        <AccordionSection title={'aboutUs'}>
            <NavLink className="dropdown__link" to={`/${urlPrefix}name`}>
              <FormattedMessage id="header.aboutUs.name" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}team`}>
              <FormattedMessage id="header.aboutUs.team" />
            </NavLink>
            <NavLink className="dropdown__link" to={`/${urlPrefix}partners`}>
              <FormattedMessage id="header.aboutUs.partners" />
            </NavLink>
        </AccordionSection>
      </nav>
      <NavLink className="nav__link nav__button" to={`/${urlPrefix}support`}>
        <FormattedMessage id="header.support" />
      </NavLink>
    </div>
  </div>
);

export default Navigation;
