// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedDate } from 'react-intl';

const NewsCardItem = (props: any) => {
  const { image, title } = props.attributes;
  return (
    <article className={'news__card'}>
      <picture className="news__card-thumbnail">
        <img className={'news__card-thumbnail-image'} src={image.file.url} alt={image.alt} />
      </picture>
      <div className="news__card-content">
        <h2 className={'news__card-header'}>{title}</h2>
        <p className={'news__card-shot-text'}>
          <Link to={'#'}>{props.attributes['short-description']}</Link>
        </p>
        <span className={'news__card-date'}>
          <FormattedDate value={image.created_at} />
        </span>
      </div>
    </article>
  );
};

export default NewsCardItem;
