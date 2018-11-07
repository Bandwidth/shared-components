import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import * as styles from './styles';

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
    /**
     * A component to render the container around the popup
     */
    Container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /**
     * A component to render the close button of the popup
     */
    CloseButton: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  };

  static defaultProps = {
    Container: styles.Container,
    CloseButton: styles.CloseButton,
  };

  static styles = styles;

  render() {
    const { expanded, onClose, children, Container, CloseButton } = this.props;

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
