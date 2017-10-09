/* eslint-disable no-console,camelcase,no-unused-vars */
// @flow

import React from 'react';
import Pagination from 'rc-pagination';
import uk_UA from 'rc-pagination/es/locale/uk_UA';
import en_US from 'rc-pagination/es/locale/en_US';
import ru_RU from 'rc-pagination/es/locale/ru_RU';

import PostsCardItem from './PostsCardItem';

const PostsCards = ({
  onChange,
  posts,
  urlPrefix
}: {
  onChange: Function,
  posts: { apiData: Array<Content>, total: string },
  urlPrefix: string
}) => {
  let locale;
  switch (urlPrefix) {
    case 'en/':
      locale = en_US;
      break;
    case '':
      locale = uk_UA;
      break;
    case 'ru/':
      locale = ru_RU;
      break;
    default:
      locale = uk_UA;
  }
  console.log(locale);
  console.log(urlPrefix);
  return (
    <div className="container">
      <div className="news__cards">
        {posts.apiData.map(item => <PostsCardItem key={item.id} urlPrefix={urlPrefix} {...item} />)}
      </div>
      <div className="news__pagination">
        <Pagination defaultCurrent={1} pageSize={4} onChange={onChange} total={posts.total} locale={locale} />
      </div>
    </div>
  );
};

export default PostsCards;
