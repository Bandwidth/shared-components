import React from 'react';
import {
  CardWrapper as DefaultCardWrapper,
  CardHeader,
  CardSection,
} from './styles';
import PropTypes from 'prop-types';

/**
 * Card components may be used anywhere on the page as a stand-alone component.
 */
class Card extends React.Component {
  static propTypes = {
    /**
     * A component which controls the styles for the outline of the Card.
     */
    CardWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    CardWrapper: DefaultCardWrapper,
  };

  render() {
    const { children, CardWrapper, ...rest } = this.props;
    return <CardWrapper {...rest}>{children}</CardWrapper>;
  }
}

Card.Section = CardSection;
Card.Header = CardHeader;

export default Card;
