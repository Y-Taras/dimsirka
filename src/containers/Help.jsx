// @flow

import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

class Help extends Component {

  render () {
    return (
      <section className="help">
        <div className="help__title">
          <FormattedMessage id="help.title"/>
        </div>
      </section>)
  }
}

export default Help
