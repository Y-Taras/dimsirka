// @flow

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import FaBars from 'react-icons/lib/fa/bars';
import AccordionSection from './NavigationAccordion';

type Props = {
  urlPrefix: string
};

class Navigation extends React.Component {
  state = {
    open: false
  };

  handleNavClick = e => {
    e.preventDefault();
    this.setState({
      open: !this.state.open
    });
  };

  props: Props;

  render() {
    const navToggle = this.state.open ? 'nav-open' : 'nav-closed';
    return (
      <div className="header__bottom">
        <div className="header__logo">
          <Link to={`/${this.props.urlPrefix}`}>
            <img className="header__logo-image" src="/dist/images/logo.png" alt="site logo" />
          </Link>
          <button type="button" onClick={this.handleNavClick} className="nav__bar-button">
            <FaBars size="40" />
          </button>
        </div>
        <div className={`nav-container ${navToggle}`}>
          <nav className="nav nav-left">
            <AccordionSection title="ourAnimals">
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}takeDog`}>
                <FormattedMessage id="header.ourAnimals.takeDog" />
              </NavLink>
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}takeCat`}>
                <FormattedMessage id="header.ourAnimals.takeCat" />
              </NavLink>
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}onlineCare`}>
                <FormattedMessage id="header.ourAnimals.careOnline" />
              </NavLink>
            </AccordionSection>
            <NavLink className="nav__link" to={`/${this.props.urlPrefix}projects`}>
              <FormattedMessage id="header.projects" />
            </NavLink>
            <AccordionSection title="search">
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}#`}>
                <FormattedMessage id="header.search.lost" />
              </NavLink>
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}#`}>
                <FormattedMessage id="header.search.found" />
              </NavLink>
            </AccordionSection>
          </nav>
        </div>
        <div className={`nav-container ${navToggle}`}>
          <nav className="nav nav-right">
            <AccordionSection title="news">
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}news/our`}>
                <FormattedMessage id="header.news.ourNews" />
              </NavLink>
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}news/actions`}>
                <FormattedMessage id="header.news.actions" />
              </NavLink>
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}news/info`}>
                <FormattedMessage id="header.news.useful" />
              </NavLink>
            </AccordionSection>
            <NavLink className="nav__link" to={`/${this.props.urlPrefix}shop`}>
              <FormattedMessage id="header.shop" />
            </NavLink>
            <AccordionSection title="aboutUs">
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}about/organization`}>
                <FormattedMessage id="header.aboutUs.org" />
              </NavLink>
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}about/team`}>
                <FormattedMessage id="header.aboutUs.team" />
              </NavLink>
              <NavLink className="dropdown__link" to={`/${this.props.urlPrefix}about/partners`}>
                <FormattedMessage id="header.aboutUs.partners" />
              </NavLink>
            </AccordionSection>
          </nav>
          <NavLink className="nav__link nav__button" to={`/${this.props.urlPrefix}help`}>
            <FormattedMessage id="header.support" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
