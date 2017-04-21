import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

const TextLink = styled(Link)`
  color: ${({ theme }) => theme.link.fg};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2 ease;
  white-space: nowrap;
  position: relative;
  height: auto;
  margin: auto;

  &:focus {
    outline: none;
  }

  &:active {
    color: ${({ theme }) => theme.link.activeFG};
  }

  &::after {
    content: "";
    background: ${({ theme }) => theme.link.fg};
    border-radius: ${({ theme }) => theme.link.bubbleBorderRadius};
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: -0.1em;
    left: 0;
    transition: height 0.15s ease, width 0.15s ease, left 0.15s ease, opacity 0.15s ease 0.15s;
  }

  &:hover::after,
  &:focus::after {
    height: calc(100% + 0.2em);
    width: calc(100% + 0.6em);
    left: -0.3em;
    opacity: 0.125;
    transition: height 0.15s ease, width 0.15s ease, left 0.15s ease, opacity 0s ease;
  }
`;

const WrapLink = styled(Link)`
  text-decoration: none;
`;

export default class SmartLink extends React.Component {
  static propTypes = {
    to: React.PropTypes.string,
    children: React.PropTypes.node,
    exact: React.PropTypes.bool,
  };

  static defaultProps = {
    to: '#',
    children: 'Link',
    exact: false,
  };

  // adds all non-children props to children
  childrenWithProps = (extraProps) => {
    const { children } = this.props;
    if (!children) {
      return null;
    }
    if (typeof children === 'string') {
      return children;
    }
    return React.Children.map(children, (child) => (
      React.cloneElement(child, extraProps)
    ));
  };

  render() {
    const { to, exact, children } = this.props;
    const Component = (typeof children === 'string') ? TextLink : WrapLink;

    return (
      <Route
        path={to} exact={exact} children={({ match }) => (
          <Component to={to}>
            {this.childrenWithProps({ active: match })}
          </Component>
        )}
      />
    );
  }
}
