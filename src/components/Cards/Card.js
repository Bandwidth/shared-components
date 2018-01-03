import React from 'react';
import DefaultCardWrapper from './styles/CardWrapper';
import CardHeader from './CardHeader';
import CardSection from './CardSection';
import CardGroup from './CardGroup';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    /**
     * A component which controls the styles for the outline of the Card.
     */
    CardWrapper: PropTypes.func,
  };

  static defaultProps = {
    CardWrapper: DefaultCardWrapper,
  };

  render() {
    const { children, CardWrapper } = this.props;
    return <CardWrapper>{children}</CardWrapper>;
  }
}

Card.Section = CardSection;
Card.Header = CardHeader;
Card.Group = CardGroup;

export default Card;
