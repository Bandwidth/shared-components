import React from 'react';
import DefaultLogo from '../Logo';
import * as styles from './styles';

export interface NavigationTitleProps {
  /**
   * The title to render inside the header.
   */
  children: string;
  /**
   * A component to wrap the logo and heading text
   */
  LogoPairWrapper?: any;
  /**
   * A component to render the logo
   */
  Logo?: any;
  /**
   * A component to render the heading text
   */
  Heading?: any;
}

class NavigationTitle extends React.Component<NavigationTitleProps> {
  static defaultProps = {
    children: 'Bandwidth',
    className: null,
    id: null,
    LogoPairWrapper: styles.LogoPairWrapper,
    Logo: DefaultLogo,
    Heading: styles.Heading,
  };

  static styles = styles;

  render() {
    const { children, LogoPairWrapper, Logo, Heading, ...rest } = this.props;

    return (
      <LogoPairWrapper {...rest}>
        <Logo />
        <Heading>{children}</Heading>
      </LogoPairWrapper>
    );
  }
}

export default NavigationTitle;
