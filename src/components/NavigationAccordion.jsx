// @flow

import React, { Component } from 'react';
import type { Node } from 'react';
import { FormattedMessage } from 'react-intl';

type Props = {
  children: Node,
  title: string,
  handleNavClick: Function,
  navBarOpened: boolean
};
type State = {
  open: boolean
}

class AccordionSection extends Component <Props, State> {
  state = {
    open: false
  };

  componentWillReceiveProps(nextProps: Props) {
    if (!nextProps.navBarOpened) {
      this.setState({ open: false });
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  handleKeyToggle = (evt: SyntheticKeyboardEvent<>) => {
    if (evt.key === 'ArrowDown') {
      this.setState({ open: true });
    }
    if (evt.key === 'ArrowUp') {
      this.setState({ open: false });
    }
    if (evt.key === 'Enter') {
      this.props.handleNavClick();
    }
  };

  props: Props;

  render() {
    return (
      <div className="dropdown">
        <span
          className="nav__link"
          onClick={this.handleClick}
          onKeyDown={this.handleKeyToggle}
          role="button"
          tabIndex={0}
        >
          <FormattedMessage id={`header.${this.props.title}.title`} />
        </span>
        <div
          className={`dropdown__content ${this.state.open ? 'dropdown__open' : 'dropdown__close'}`}
          onClick={this.props.handleNavClick}
          onKeyUp={this.handleKeyToggle}
          role="button"
          tabIndex={0}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AccordionSection;
