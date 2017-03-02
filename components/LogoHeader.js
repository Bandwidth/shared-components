// TODO: finish and move to style guide
import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: row;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.header.fontSize};
  font-weight: ${({ theme }) => theme.header.fontWeight};
  line-height: 30px;
  border-left: 1px solid;
  margin-left: 0.5em;
  padding-left: 0.5em;
  height: 30px;
  display: inline-block;
  font-family: ${({ theme }) => theme.header.fontFamily};
`;

export default class LogoHeader extends React.Component {
  static propTypes = {
    children: React.PropTypes.string,
  };

  static defaultProps = {
    children: 'Bandwidth',
  };

  render() {
    return (
      <Container>
        <Logo />
        <Text>{this.props.children}</Text>
      </Container>
    );
  }
}
