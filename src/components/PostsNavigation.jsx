// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

type Props = {
  urlPrefix: string,
};

const PostsNavigation = (props: Props) => (
  <div>
    <NavLink activeClassName={'news__nav-link--selected'} className={'news__nav-link'} to={`/${props.urlPrefix}news/our`}>
      <FormattedMessage id={`news.navigation.interesting`} />
    </NavLink>
    <NavLink activeClassName={'news__nav-link--selected'} className={'news__nav-link'} to={`/${props.urlPrefix}news/info`}>
      <FormattedMessage id={`news.navigation.info`} />
    </NavLink>
    <NavLink activeClassName={'news__nav-link--selected'} className={'news__nav-link'} to={`/${props.urlPrefix}news/actions`}>
      <FormattedMessage id={`news.navigation.action`} />
    </NavLink>
    <NavLink activeClassName={'news__nav-link--selected'} className={'news__nav-link'} to={`/${props.urlPrefix}news`}>
      <FormattedMessage id={`news.navigation.all`} />
    </NavLink>
   </div>
);

export default PostsNavigation;
