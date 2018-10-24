import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import AlertGroup from './styles/AlertGroup';
import { UnmountClosed } from 'react-collapse';

import DefaultCloseButton from './styles/AlertCloseButton';
import AlertIcon from './styles/AlertIcon';
import AlertBorder from './styles/AlertBorder';
import AlertText from './styles/AlertText';
import AlertContent from './styles/AlertContent';
import icons from 'components/Icon/icons';

const getIcon = type => {
  switch (type) {
    case 'error':
      return '!';
    case 'success':
      return icons('checkmark');
    default:
      return 'i';
  }
};

/**
 * Alerts are used to present messages to the user. Every alert is an interruption, so
 * you should use alerts only when they provide real value!
 */
export default class Alert extends React.PureComponent {
  static propTypes = {
    /**
     * An alert type
     */
    type: PropTypes.oneOf(['info', 'success', 'error']),
    /**
     * Specify a CSS value or an object { top, right, bottom, left } or { vertical, horizontal } to
     * control the spacing around the heading. Defaults to a large space below the element.
     */
    spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
     * Whether to render only text (true) or an icon alongside text (false).
     */
    textOnly: PropTypes.bool,
    /**
     * A callback for when this alert is closed (dismissed). Providing this prop will
     * automatically create a close button for the user.
     */
    onClose: PropTypes.func,
    /**
     * A timeout for closing the alert (ms). Only works if `onClose` is also provided. Will
     * call `onClose` after time specified.
     */
    closeTimeout: PropTypes.number,
    /**
     * Additional class name to pass to the alert.
     */
    className: PropTypes.string,
    /**
     * Additional id to pass to the alert.
     */
    id: PropTypes.string,
    /**
     * A component to render the border container
     */
    Border: PropTypes.func,
    /**
     * A component to render the text inside
     */
    Text: PropTypes.func,
    /**
     * A component to render the icon
     */
    Icon: PropTypes.func,
    /**
     * A containing element around the alert, used for expanding style calc.
     */
    Content: PropTypes.func,
    /**
     * The link component to use when rendering a close button
     */
    CloseButton: PropTypes.func,
  };

  static defaultProps = {
    type: 'info',
    textOnly: false,
    className: null,
    id: null,
    spacing: 0,
    Border: AlertBorder,
    Content: AlertContent,
    Text: AlertText,
    Icon: AlertIcon,
    CloseButton: DefaultCloseButton,
  };

  static Small = withProps({
    Border: AlertBorder.Small,
    Icon: AlertIcon.Small,
    Content: AlertContent.Small,
  })(Alert);

  static Group = AlertGroup;

  closeTimeoutRef = null;
  closingTimeoutRef = null;

  state = {
    closing: false,
  };

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
    this.props.onClose();
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
