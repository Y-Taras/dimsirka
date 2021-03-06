// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const FooterSitemap = ({ urlPrefix }: { urlPrefix: string }) => (
  <div className="footer__sitemap">
    <div className="footer__sitemap-container">
      <div className="footer__sitemap-col">
        <span className="footer__category-title">
          <FormattedMessage id="footer.ourAnimals.title" />
        </span>
        <Link to={`/${urlPrefix}#`} className="footer__sitemap-link">
          <FormattedMessage id="footer.ourAnimals.takeDog" />
        </Link>
        <Link to={`/${urlPrefix}#`} className="footer__sitemap-link">
          <FormattedMessage id="footer.ourAnimals.takeCat" />
        </Link>
        <Link to={`/${urlPrefix}#`} className="footer__sitemap-link">
          <FormattedMessage id="footer.ourAnimals.careOnline" />
        </Link>
      </div>
    </div>
    <div className="footer__sitemap-container">
      <div className="footer__sitemap-col">
        <span className="footer__category-title">
          <FormattedMessage id="footer.search.title" />
        </span>
        <Link to={`/${urlPrefix}#`} className="footer__sitemap-link">
          <FormattedMessage id="footer.search.lost" />
        </Link>
        <Link to={`/${urlPrefix}#`} className="footer__sitemap-link">
          <FormattedMessage id="footer.search.found" />
        </Link>
      </div>
    </div>
    <div className="footer__sitemap-container">
      <div className="footer__sitemap-col">
        <span className="footer__category-title">
          <FormattedMessage id="footer.aboutUs.title" />
        </span>
        <Link to={`/${urlPrefix}about/organization`} className="footer__sitemap-link">
          <FormattedMessage id="footer.aboutUs.org" />
        </Link>
        <Link to={`/${urlPrefix}about/team`} className="footer__sitemap-link">
          <FormattedMessage id="footer.aboutUs.team" />
        </Link>
        <Link to={`/${urlPrefix}about/partners`} className="footer__sitemap-link">
          <FormattedMessage id="footer.aboutUs.partners" />
        </Link>
      </div>
    </div>
    <div className="footer__sitemap-container">
      <div className="footer__sitemap-col">
        <span className="footer__category-title">
          <FormattedMessage id="footer.news.title" />
        </span>
        <Link to={`/${urlPrefix}news/our`} className="footer__sitemap-link">
          <FormattedMessage id="footer.news.ourNews" />
        </Link>
        <Link to={`/${urlPrefix}news/actions`} className="footer__sitemap-link">
          <FormattedMessage id="footer.news.actions" />
        </Link>
        <Link to={`/${urlPrefix}news/info`} className="footer__sitemap-link">
          <FormattedMessage id="footer.news.useful" />
        </Link>
      </div>
    </div>
    <div className="footer__sitemap-container">
      <div className="footer__sitemap-col">
        <Link to={`/${urlPrefix}projects`} className="footer__sitemap-bold-link">
          <FormattedMessage id="footer.projects" />
        </Link>
        <Link to={`/${urlPrefix}shop`} className="footer__sitemap-bold-link">
          <FormattedMessage id="footer.shop" />
        </Link>
        <Link to={`/${urlPrefix}webcams`} className="footer__sitemap-bold-link">
          <FormattedMessage id="footer.webcams" />
        </Link>
      </div>
    </div>
  </div>
);

export default FooterSitemap;
