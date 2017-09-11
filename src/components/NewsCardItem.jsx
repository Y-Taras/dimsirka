import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedDate, FormattedMessage } from 'react-intl'

const NewsCardItem = () =>
  <article className={'news__card'}>
    <picture className="news__card-thumbnail">
      <img className={'news__card-thumbnail-image'} src="#" alt="news1"/>
    </picture>
    <div className="news__card-content">
      <h2 className={'news__card-header'}><FormattedMessage/></h2>
      <p className={'news__card-shot-text'}>
        <Link to={'#'}>
          <FormattedMessage/>
        </Link>
      </p>
      <span className={'news__card-date'}>
          <FormattedDate value={'01.01.2000'}/>
        </span>
    </div>
  </article>

export default NewsCardItem
