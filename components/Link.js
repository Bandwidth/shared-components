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
