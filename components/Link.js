import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

const TextLink = styled(Link)`
  color: #008db1;
  text-decoration: underline;
`;

const WrapLink = styled(Link)`
  text-decoration: none;
`;

export default class SmartLink extends React.Component {
  static propTypes = {
    to: React.PropTypes.string,
    index: React.PropTypes.bool,
    children: React.PropTypes.node,
  };

  static defaultProps = {
    to: '#',
    index: false,
    children: 'Link',
  };

  // adds all non-children props to children
  childrenWithProps = (extraProps) => {
    const { children } = this.props;
    if (!children) {
      return null;
    }
    return React.Children.map(children, (child) => (
      React.cloneElement(child, extraProps)
    ));
  };

  render() {
    const { to, index, children } = this.props;
    const Component = (typeof children === 'string') ? TextLink : WrapLink;

    return (
      <Route
        path={to} exact={index} children={({ match }) => (
          <Component to={to}>
            {this.childrenWithProps({ active: match })}
          </Component>
        )}
      />
    );
  }
}
