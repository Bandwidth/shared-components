import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Code from './Code';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Center = styled.div`
  margin: auto;
  color: ${({ theme }) => theme.colors.grayLightText};
  text-align: center;
`;

const Message = styled.div`
  margin: auto;
  margin-bottom: 1em;
  text-align: center;
  color: inherit;
  font-size: 1.2em;
`;

export default class ErrorScreen extends React.Component {
  static propTypes = {
    reason: React.PropTypes.string,
  };

  static defaultProps = {
    reason: 'Unknown error',
  };

  render() {
    return (
      <Container>
        <Center>
          <Icon size={80} name="attention" />
          <Message>We couldn&apos;t load that data</Message>
          <Code>{this.props.reason}</Code>
        </Center>
      </Container>
    );
  }
}
