import React from 'react';
import PropTypes from 'prop-types';
import DefaultLogo from 'components/Logo';
import * as styles from './styles';

class LogoHeader extends React.Component {
  static propTypes = {
    /**
     * The title to render inside the header.
     */
    children: PropTypes.string,
    /**
     * Adds a class name to the whole containing header element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the whole containing header element.
     */
    id: PropTypes.string,
    /**
     * A component to wrap the logo and heading text
     */
    LogoPairWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the logo
     */
    Logo: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the heading text
     */
    Heading: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    children: 'Bandwidth',
    className: "scl-navigation-title",
    id: null,
    LogoPairWrapper: styles.LogoPairWrapper,
    Logo: DefaultLogo,
    Heading: styles.Heading,
  };

  static styles = styles;

  render() {
    const {
      children,
      id,
      className,
      LogoPairWrapper,
      Logo,
      Heading,
      ...rest
    } = this.props;

    return (
      <LogoPairWrapper id={id} className={className} {...rest}>
        <Logo />
        <Heading>{children}</Heading>
      </LogoPairWrapper>
    );
  }
}

export default LogoHeader;
