// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const FooterSitemap = () => (
  <div className="footer__sitemap">
    <div className="footer__sitemap-col">
      <span className="footer__category-title">
        <FormattedMessage id={'footer.ourAnimals.title'} />
      </span>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.ourAnimals.takeDog'} />
      </Link>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.ourAnimals.takeCat'} />
      </Link>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.ourAnimals.careOnline'} />
      </Link>
    </div>
    <div className="footer__sitemap-col">
      <span className="footer__category-title">
        <FormattedMessage id={'footer.search.title'} />
      </span>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.search.lost'} />
      </Link>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.search.found'} />
      </Link>
    </div>
    <div className="footer__sitemap-col">
      <span className="footer__category-title">
        <FormattedMessage id={'footer.aboutUs.title'} />
      </span>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.aboutUs.name'} />
      </Link>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.aboutUs.team'} />
      </Link>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.aboutUs.partners'} />
      </Link>
    </div>
    <div className="footer__sitemap-col">
      <span className="footer__category-title">
        <FormattedMessage id={'footer.news.title'} />
      </span>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.news.ourNews'} />
      </Link>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.news.actions'} />
      </Link>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.news.useful'} />
      </Link>
    </div>
    <div className="footer__sitemap-col footer__sitemap-col--bold">
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.projects'} />
      </Link>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.shop'} />
      </Link>
      <Link to={'#'} className="footer__sitemap-link">
        <FormattedMessage id={'footer.webcams'} />
      </Link>
    </div>
  </div>
);

export default FooterSitemap;
