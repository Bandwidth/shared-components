import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import NavigationLogoPairWrapper from './styles/NavigationLogoPairWrapper';
import NavigationHeading from './styles/NavigationHeading';
import DefaultAnchor from 'components/Anchor';

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
     * A location to navigate to when the header is clicked
     */
    linkTo: PropTypes.string,
    /**
     * A component to wrap the logo and heading text
     */
    LogoPairWrapper: PropTypes.func,
    /**
     * A component to render the heading text
     */
    Heading: PropTypes.func,
    /**
     * Allows overriding the default Anchor component
     */
    Anchor: PropTypes.func,
  };

  static defaultProps = {
    children: 'Bandwidth',
    className: null,
    id: null,
    linkTo: '/',
    LogoPairWrapper: NavigationLogoPairWrapper,
    Heading: NavigationHeading,
    Anchor: DefaultAnchor,
  };

  render() {
    const { children, id, className, LogoPairWrapper, Heading, linkTo, Anchor } = this.props;

    return (
      <Anchor linkTo={linkTo} exact type="content">
        <LogoPairWrapper id={id} className={className}>
          <Logo />
          <Heading>{children}</Heading>
        </LogoPairWrapper>
      </Anchor>
    );
  }
}

export default LogoHeader;
