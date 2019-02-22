import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import * as styles from './styles';

interface PopupProps {
  /**
   * The contents of the popup. These contents will be padded.
   */
  children: React.ReactNode;
  /**
   * Use this handler to detect when the popup has been closed by the user using the
   * built-in close button
   */
  onClose: () => void;
  /**
   * Supplies the expanded state to the popup. If false, the popup will not
   * be visible.
   */
  expanded: boolean;
  /**
   * A component to render the container around the popup
   */
  Container: any;
  /**
   * A component to render the close button of the popup
   */
  CloseButton: any;
}

export default class Popup extends React.Component<PopupProps> {
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
