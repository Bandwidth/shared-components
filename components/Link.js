import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

export const TextLink = styled(Link)`
  color: ${({ theme }) => theme.link.fg};
  font-family: ${({ theme }) => theme.link.fontFamily};
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

class SmartLink extends React.Component {
  static propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
    exact: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    to: '#',
    children: 'Link',
    exact: false,
    onClick: () => null,
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
    const { to, exact, children, onClick } = this.props;
    const Component = (typeof children === 'string') ? TextLink : WrapLink;

    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <Component to={to} onClick={onClick}>
            {this.childrenWithProps({ active: match })}
          </Component>
        )}
      />
    );
  }
}

SmartLink.usage = `
# Link

Links are meant to be used with React Router v4+. They provide a few features besides styling:

* use the \`to\` prop instead of \`href\`; better syntax.
* pass the \`exact\` prop to indicate that this link should only be active when the URL matches exactly.
* any children are passed an \`active\` prop, which indicates whether the link is currently being visited.

\`\`\`
<Link to="/about" exact>Go to About Page</Link>
\`\`\`
`;

export default SmartLink;