import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const openAnimation = keyframes`
  from {
    clip-path: circle(0% at 0% 0%);
  }

  to {
    clip-path: circle(200% at 0% 50%);
  }
`;

const Flyout = styled.div`
  position: absolute;
  z-index: 1;
  max-width: ${({ theme }) => theme.callout.maxWidth};
  background: ${({ theme }) => theme.callout.bg};
  color: ${({ theme }) => theme.callout.fg};
  padding: ${({ theme }) => theme.callout.padding};
  border-radius: ${({ theme }) => theme.callout.borderRadius};
  border: ${({ theme }) => theme.callout.border};
  box-shadow: ${({ theme }) => theme.callout.shadow};
  left: 100%;
  top: 50%;
  transform: translateX(10px) translateY(-50%);
  white-space: nowrap;

  animation: ${openAnimation} 0.2s ease-in-out;
  animation-fill-mode: forwards;
`;

class Callout extends React.Component {
  static propTypes = {
    delay: PropTypes.number,
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
  };

  static defaultProps = {
    delay: 200,
  };

  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  trigger = () => {
    this._timer = setTimeout(
      this.show,
      this.props.delay,
    );
  };

  show = () => {
    this.setState({ show: true });
  };

  cancel = () => {
    this.setState({ show: false });
    clearTimeout(this._timer);
  };

  render() {
    return (
      <Container onMouseEnter={this.trigger} onMouseLeave={this.cancel}>
        {this.props.children}
        {this.state.show ? <Flyout>{this.props.content}</Flyout> : null}
      </Container>
    )
  }
}

Callout.usage = `
# Callout

Renders a flyout on hover which can display helpful contextual information to the user.

\`\`\`
<Callout content="hi there">
  <Button>Hover me</Button>
</Callout>
\`\`\`
`;

export default Callout;
