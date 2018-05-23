import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';

import AlertIcon from './styles/AlertIcon';
import AlertBorder from './styles/AlertBorder';
import AlertText from './styles/AlertText';
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

const Alert = ({ Border, Text, Icon, type, textOnly, spacing, children }) => (
  <Border type={type} spacing={spacing}>
    {!textOnly && <Icon type={type} />}
    <Text>{children}</Text>
  </Border>
);

Alert.propTypes = {
  /**
   * An alert type; one of [info, success, error].
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
};

Alert.defaultProps = {
  type: 'info',
  textOnly: false,
  className: null,
  id: null,
  spacing: { bottom: 'lg' },
  Border: AlertBorder,
  Text: AlertText,
  Icon: AlertIcon,
};

Alert.Small = withProps({
  Border: AlertBorder.Small,
  Icon: AlertIcon.Small,
})(Alert);

export default Alert;
