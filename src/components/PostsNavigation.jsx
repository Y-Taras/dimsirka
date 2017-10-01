// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

const PostsNavigation = (props: { id: number, text: string, onCategoryChange: Function }) => (
  <span className={'news__nav-link'} id={props.id} onClick={props.onCategoryChange} role={'button'} tabIndex={0}>
    <FormattedMessage id={`news.navigation.${props.text}`} />
  </span>
);

export default PostsNavigation;
