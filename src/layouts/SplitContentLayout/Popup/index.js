import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import { Container, CloseButton } from './components';

export default class Popup extends React.Component {
  static propTypes = {
    /**
     * The contents of the popup. These contents will be padded.
     */
    children: PropTypes.node.isRequired,
    /**
     * Use this handler to detect when the popup has been closed by the user using the
     * built-in close button
     */
    onClose: PropTypes.func.isRequired,
    /**
     * Supplies the expanded state to the popup. If false, the popup will not
     * be visible.
     */
    expanded: PropTypes.bool.isRequired,
  };

  render() {
    const { expanded, onClose, children } = this.props;

    return (
      <Consumer>
        {layoutState =>
          layoutState.renderElement(
            'popup',
            <Container expanded={expanded}>
              <CloseButton onClick={onClose} />
              {children}
            </Container>,
          )
        }
      </Consumer>
    );
  }
}
