// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedDate, FormattedMessage } from 'react-intl';
import FittedImage from './FittedImage';

const PostsCardItem = (props: any) => {
  const { image, title } = props.attributes;
  return (
    <article className="news__card">
      <picture className="news__card-thumbnail">
        <FittedImage
          className="news__card-thumbnail-image"
          src={image.file.url}
          alt={image.alt}
          fit="cover"
          width="100%"
          height="190px"
          position="50% 50%"
        />
      </picture>
      <div className="news__card-content">
        <h2 className="news__card-header">{title}</h2>
        <span className="news__card-date">
          <FormattedDate value={image.created_at} />
        </span>
        <p className="news__card-short-text">{props.attributes['short-description']}</p>
        <Link className="news__card-link" to={`/${props.urlPrefix}news/${props.id}`}>
          <FormattedMessage id="news.readMore" />
        </Link>
      </div>
    </article>
  );
};

export default PostsCardItem;
