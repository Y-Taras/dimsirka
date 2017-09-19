/* eslint-disable no-console */
// @flow

import React from 'react';
import NewsCardItem from './NewsCardItem';

const NewsCards = ({ posts, urlPrefix }: { posts: Array<Content>, urlPrefix: string }) => (
  <section className={'news__cards'}>
    <div className="container">{posts.map(item => <NewsCardItem key={item.id} urlPrefix={urlPrefix} {...item} />)}</div>
  </section>
);

export default NewsCards;
