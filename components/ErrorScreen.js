import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';
import InlineCode from './code/InlineCode';

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

class ErrorScreen extends React.Component {
  static propTypes = {
    reason: PropTypes.string,
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
          <InlineCode>{this.props.reason}</InlineCode>
        </Center>
      </Container>
    );
  }
}

ErrorScreen.usage = `
# ErrorScreen

This is something I (Grant) wrote while testing out some proof of concept UI. It's not approved by UX. Check with UX to see if they want a different error experience.

\`\`\`
<ErrorScreen reason="404 not found" />
\`\`\`
`;

export default ErrorScreen;
