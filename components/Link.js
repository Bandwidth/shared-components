import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as ReactLink, Route } from 'react-router-dom';

export const TextLink = styled(ReactLink)`
  color: ${({ theme }) => theme.colors.primaryText};
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

const IconLink = styled(TextLink)`
  text-decoration: none;
  &::after {
    opacity: 0;
  }
`;

// notice: this goes back to ReactLink, not TextLink as above
const WrapLink = styled(ReactLink)`
  text-decoration: none;
`;

const inferType = (children) => {
  if (children === null) {
    return 'wrap';
  }

  if (typeof children === 'string') {
    return 'text';
  }

  if (children.type && children.type.displayName === 'Icon') {
    return 'icon';
  }

  return 'wrap';
}

class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
    exact: PropTypes.bool,
    onClick: PropTypes.func,
    // whether the contents should be treated as text (styled) or not (untouched)
    type: PropTypes.oneOf(['text', 'icon', 'wrap']),
  };

  static defaultProps = {
    to: '#',
    children: null,
    exact: false,
    onClick: () => null,
    type: null,
  };

  getComponentType = () => {
    const type = this.props.type || inferType(this.props.children);
    switch (type) {
      case 'wrap':
        return WrapLink;
      case 'icon':
        return IconLink;
      default:
        return TextLink;
    }
  }

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
    const Component = this.getComponentType();

    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <Component to={to} onClick={onClick}>
            {this.childrenWithProps({ active: !!match })}
          </Component>
        )}
      />
    );
  }
}

Link.usage = `
# Link

Links are meant to be used with React Router v4+. They provide a few features besides styling:

* use the \`to\` prop instead of \`href\`; better syntax.
* pass the \`exact\` prop to indicate that this link should only be active when the URL matches exactly.
* any children are passed an \`active\` prop, which indicates whether the link is currently being visited.
* pass \`type="icon"\` or \`type="wrap"\` to turn customize text styling within the link

\`\`\`
<Link to="/about" exact>Go to About Page</Link>
\`\`\`
`;

export default Link;
