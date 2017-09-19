// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const styleBoldUppercase = {
  textTransform: 'uppercase',
  fontWeight: 500
};

const FooterSitemap = () => (
  <div className="footer__table">
    <table className="footer__sitemap">
      <thead className={'footer__sitemap-head'}>
        <tr>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.care.title'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.search.title'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.shop.title'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.aboutUs.title'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.help.title'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.reg_animals'} />
            </Link>
          </td>
        </tr>
      </thead>
      <tbody className={'footer__sitemap-body'}>
        <tr>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.care.careOnline'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.search.lostAnimals'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.shop.cups'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.aboutUs.report'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.help.oneTime'} />
            </Link>
          </td>
          <td style={styleBoldUppercase}>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.webcams'} />
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.care.adoption'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.search.foundedAnimals'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.shop.tShirts'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.aboutUs.history'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.help.stuff'} />
            </Link>
          </td>
          <td style={styleBoldUppercase}>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.news'} />
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.care.homeBoarding'} />
            </Link>
          </td>
          <td rowSpan={5} />
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.shop.stickers'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.aboutUs.team'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.help.volunteers'} />
            </Link>
          </td>
          <td rowSpan={4} />
        </tr>
        <tr>
          <td rowSpan={4} />
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.shop.notepads'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.aboutUs.partners'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.help.seriouslyIll'} />
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.shop.bags'} />
            </Link>
          </td>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.aboutUs.projects'} />
            </Link>
          </td>
          <td colSpan={2}>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.help.contractSocial'} />
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.shop.magnetStickers'} />
            </Link>
          </td>
          <td rowSpan={2} />
          <td rowSpan={2} />
        </tr>
        <tr>
          <td>
            <Link to={'/'}>
              <FormattedMessage id={'footer.sitemap.shop.badges'} />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default FooterSitemap;
