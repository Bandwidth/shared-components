import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const Container = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: row;
`;

const Text = styled.span`
  font-size: 22px;
  font-weight: 100;
  line-height: 30px;
  border-left: 1px solid;
  margin-left: 0.5em;
  padding-left: 0.5em;
  height: 30px;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.brand};
`;

export class LogoHeader extends React.Component {
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
  };

  static defaultProps = {
    children: 'Bandwidth',
    className: null,
    id: null,
  };

  render() {
    const { children, id, className } = this.props;

    return (
      <Container id={id} className={className}>
        <Logo />
        <Text>{children}</Text>
      </Container>
    );
  }
}

export default sharedComponent({ Container, Styled: Container, Text })(LogoHeader);
