import React from 'react';
import PropTypes from 'prop-types';
import sharedComponent from '../../sharedComponent';
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
    /**
     * Miliseconds to wait before showing the callout.
     */
    delay: PropTypes.number,
    /**
     * Elements to render which will activate the callout on hover.
     */
    children: PropTypes.node.isRequired,
    /**
     * Content to render inside the callout itself.
     */
    content: PropTypes.node.isRequired,
    /**
     * A class name to pass to the callout activation area container.
     */
    className: PropTypes.string,
    /**
     * An id to pass to the callout activation area container.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    delay: 200,
    className: null,
    id: null,
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
    const { className, id } = this.props;
    return (
      <Container onMouseEnter={this.trigger} onMouseLeave={this.cancel} className={className} id={id}>
        {this.props.children}
        {this.state.show ? <Flyout>{this.props.content}</Flyout> : null}
      </Container>
    )
  }
}

export default sharedComponent()(Callout);
