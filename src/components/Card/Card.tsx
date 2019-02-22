import * as React from 'react';
import * as styles from './styles';

interface CardProps {
  /**
   * A component which controls the styles for the outline of the Card.
   */
  CardWrapper: any;
}

/**
 * Card components may be used anywhere on the page as a stand-alone component.
 */
class Card extends React.Component<CardProps> {
  static styles = styles;
  static Section = styles.Section;
  static Header = styles.Header;
  static Group = styles.Group;

  static defaultProps = {
    CardWrapper: styles.Wrapper,
  };

  render() {
    const { children, CardWrapper, ...rest } = this.props;
    return <CardWrapper {...rest}>{children}</CardWrapper>;
  }
}

(Card.Group as any).Connected = styles.GroupConnected;

export default Card;
