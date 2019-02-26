import * as React from 'react';
import { UnmountClosed } from 'react-collapse';

import * as styles from './styles';
import { SpacingProps } from '../../extensions/userSpacing';

export interface AlertProps extends SpacingProps {
  /**
   * An alert type
   */
  type?: 'error' | 'success' | 'info';
  /**
   * Whether to render only text (true) or an icon alongside text (false).
   */
  textOnly?: boolean;
  /**
   * A callback for when this alert is closed (dismissed). Providing this prop will
   * automatically create a close button for the user.
   */
  onClose?: () => void;
  /**
   * A timeout for closing the alert (ms). Only works if `onClose` is also provided. Will
   * call `onClose` after time specified.
   */
  closeTimeout?: number;
  /**
   * A component to render the border container
   */
  Border?: any;
  /**
   * A component to render the text inside
   */
  Text?: any;
  /**
   * A component to render the icon
   */
  Icon?: any;
  /**
   * A containing element around the alert, used for expanding style calc.
   */
  Content?: any;
  /**
   * The link component to use when rendering a close button
   */
  CloseButton?: any;
}

interface AlertState {
  closing: boolean;
}

/**
 * Alerts are used to present messages to the user. Every alert is an interruption, so
 * you should use alerts only when they provide real value!
 */
export default class Alert extends React.PureComponent<
  AlertProps &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>,
  AlertState
> {
  static defaultProps: AlertProps = {
    type: 'info',
    textOnly: false,
    spacing: '0',
    Border: styles.Border,
    Content: styles.Content,
    Text: styles.Text,
    Icon: styles.Icon,
    CloseButton: styles.CloseButton,
  };

  static styles = styles;

  static Group = styles.Group;

  closeTimeoutRef: any;
  closingTimeoutRef: any;

  state = { closing: false };

  componentDidMount() {
    const { closeTimeout, onClose } = this.props;
    if (closeTimeout && onClose) {
      this.closeTimeoutRef = setTimeout(this.startClose, closeTimeout);
    }
  }

  componentWillUnmount() {
    if (this.closeTimeoutRef) {
      clearTimeout(this.closeTimeoutRef);
    }
  }

  getCloseButtonType = () => {
    const { CloseButton, type } = this.props;
    switch (type) {
      case 'error':
        return CloseButton.Negative || CloseButton;
      case 'success':
        return CloseButton.Positive || CloseButton;
      default:
        return CloseButton;
    }
  };

  startClose = () => {
    this.setState({ closing: true });
    this.closingTimeoutRef = setTimeout(this.completeClose, 200);
  };

  completeClose = () => {
    this.props.onClose && this.props.onClose();
  };

  render() {
    const {
      Border,
      Text,
      Icon,
      Content,
      type,
      textOnly,
      children,
      onClose,
      ...rest
    } = this.props;
    const { closing } = this.state;

    const CloseButton = this.getCloseButtonType();

    return (
      <Border type={type} closing={closing} {...rest}>
        <UnmountClosed
          isOpened={!closing}
          forceInitialAnimation
          springConfig={{ stiffness: 300, damping: 20 }}
        >
          <Content>
            {!textOnly && <Icon type={type} />}
            <Text>{children}</Text>
            {onClose && <CloseButton icon="delete" onClick={this.startClose} />}
          </Content>
        </UnmountClosed>
      </Border>
    );
  }
}
