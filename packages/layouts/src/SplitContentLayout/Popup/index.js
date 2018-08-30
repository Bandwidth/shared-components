import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import { CSSTransition } from 'react-transition-group';
import { Container, CloseButton } from './components';
import { TRANSITION_MS } from './constants';

export default class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  state = {
    expanded: true,
  };

  handleClose = () => {
    this.setState({
      expanded: false,
    });

    setTimeout(this.props.onClose, TRANSITION_MS);
  };

  renderChildren = () => {
    const { children } = this.props;

    if (typeof children === 'function') {
      return children({
        expanded: this.state.expanded,
        close: this.handleClose,
      });
    }

    return children;
  };

  render() {
    const {
      state: { expanded },
      handleClose,
    } = this;

    return (
      <Consumer>
        {layoutState =>
          layoutState.renderElement(
            'modal',
            <Container expanded={expanded}>
              <CloseButton onClick={handleClose} />
              {this.renderChildren()}
            </Container>,
          )
        }
      </Consumer>
    );
  }
}
