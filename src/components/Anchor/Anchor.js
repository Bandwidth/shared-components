import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as ReactLink, Route } from 'react-router-dom';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Anchor', ({ colors, fonts }) => ({
    color: colors.primaryDark,
    fontFamily: fonts.brand,
    activeColor: colors.primary,
    bubbleBorderRadius: '2em',
    display: 'inline',
  }))
  .addVariant('danger', ({ colors }) => ({
    color: colors.errorText,
  }))
  .createSelector();

export const TextAnchorImpl = theme.connect(styled.a`
  ${spreadStyles(select)}

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
    color: ${select('activeColor')};
  }

  &::after {
    content: "";
    background: ${select('color')};
    border-radius: ${select('bubbleBorderRadius')};
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
`);
const TextAnchor = theme.connect(TextAnchorImpl);

export const IconAnchor = theme.connect(styled(TextAnchorImpl)`
  text-decoration: none;
  display: inline-block;
  &::after {
    opacity: 0;
  }
`);

// notice: this goes back to regular link, not TextAnchor as above
export const WrapAnchor = theme.connect(styled.a`
  text-decoration: none;
`);

export const ReactTextAnchorImpl = theme.connect(styled(ReactLink)`
  ${spreadStyles(select)}

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
    color: ${select('activeColor')};
  }

  &::after {
    content: "";
    background: ${select('color')};
    border-radius: ${select('bubbleBorderRadius')};
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
`);

const ReactTextAnchor = theme.connect(ReactTextAnchorImpl);

export const ReactIconAnchor = theme.connect(styled(ReactTextAnchorImpl)`
  text-decoration: none;
  display: inline-block;
  &::after {
    opacity: 0;
  }
`);

export const ReactWrapAnchor = theme.connect(styled(ReactLink)`
  text-decoration: none;
`);

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
};

const isExternal = (to) => /^(https?:)*\/\//.test(to);

class Anchor extends React.Component {
  static propTypes = {
    /**
     * A location to link to with this anchor.
     */
    to: PropTypes.string,
    /**
     * Rendered contents inside the anchor.
     */
    children: PropTypes.node,
    /**
     * Anchors pass an 'active' prop to their children when the route matches. This controls whether that is exact matching.
     */
    exact: PropTypes.bool,
    /**
     * A handler for the anchor's onclick event.
     */
    onClick: PropTypes.func,
    /**
     * whether the contents should be treated as text (underlined), icon (has specific styling), or 'wrap' (no styling).
     */
    type: PropTypes.oneOf(['text', 'icon', 'wrap']),
    /**
     * A class name to pass to the <a> element.
     */
    className: PropTypes.string,
    /**
     * An id to pass to the <a> element.
     */
    id: PropTypes.string,
    /**
     * Opens the link in a new tab.
     */
    newTab: PropTypes.bool,
  };

  static defaultProps = {
    to: '#',
    children: null,
    exact: false,
    onClick: () => null,
    type: null,
    className: null,
    id: null,
    newTab: false,
  };

  getComponentType = () => {
    const type = this.props.type || inferType(this.props.children);
    const external = isExternal(this.props.to);
    switch (type) {
      case 'wrap':
        return external ? WrapAnchor : ReactWrapAnchor;
      case 'icon':
        return external ? IconAnchor : ReactIconAnchor;
      default:
        return external ? TextAnchor : ReactTextAnchor;
    }
  }

  handleClick = (event) => {
    const { onClick, to } = this.props;
    // if the user isn't using this link to navigate,
    // prevent default navigation
    if (onClick && to === '#') {
      event.preventDefault();
      onClick(event);
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

  // provides extra properties based on certain factors to the underlying element
  extraProps = () => {
    const { to, newTab } = this.props;
    const newTabProps = newTab ? { rel: 'noopener', target: '_blank' } : {};
    if (isExternal(to)) {
      return {
        href: to,
        ...newTabProps,
      };
    } else {
      return {
        to,
        ...newTabProps,
      };
    }
  };

  render() {
    const { to, exact, children, className, id } = this.props;
    const Component = this.getComponentType();

    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <Component
            {...this.extraProps()}
            onClick={this.handleClick}
            className={className}
            id={id}
          >
            {this.childrenWithProps({ active: !!match })}
          </Component>
        )}
      />
    );
  }
}

Anchor.Danger = theme.variant('danger')(Anchor);

export default Anchor;
