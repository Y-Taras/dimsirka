// @flow

import React, { Component } from 'react';
import type { Children } from 'react';
import { FormattedMessage } from 'react-intl';

type Props = {
  children: Children,
  title: string
};

class AccordionSection extends Component {
  state = {
    open: false,
    class: 'close'
  };
  handleClick = () => {
    if (this.state.open) {
      this.setState({
        open: false,
        class: 'close'
      });
    } else {
      this.setState({
        open: true,
        class: 'open'
      });
    }
  };

  props: Props;

  render() {
    return (
      <div className="dropdown">
        <span className="nav__link" onClick={this.handleClick} role={'button'} tabIndex={0}>
          <FormattedMessage id={`header.${this.props.title}.title`} />
        </span>
        <div className={`dropdown__content ${this.state.class}`}>{this.props.children}</div>
      </div>
    );
  }
}
export default AccordionSection;
