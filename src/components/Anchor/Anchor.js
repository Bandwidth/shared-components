import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import { Route } from 'react-router-dom';
import userSpacing from 'extensions/userSpacing';
import { withTheme } from 'styled-components';

import DefaultExternalContentAnchor from './styles/ExternalContentAnchor';
import DefaultExternalIconAnchor from './styles/ExternalIconAnchor';
import DefaultExternalTextAnchor from './styles/ExternalTextAnchor';
// 'internal' anchors link to in-app pages, not external URLs
import DefaultInternalContentAnchor from './styles/InternalContentAnchor';
import DefaultInternalTextAnchor from './styles/InternalTextAnchor';
import DefaultInternalIconAnchor from './styles/InternalIconAnchor';

const inferType = children => {
  if (children === null) {
    return 'wrap';
  }

  if (children.type && children.type.displayName === 'Icon') {
    return 'icon';
  }

  if (typeof children === 'string') {
    return 'text';
  }

  return 'wrap';
};

const matchReactRouter = (to, match, exact) => {
  let active;
  if (!exact) {
    // use the default behavior for non-exact matches
    active = !!match;
  } else {
    // when we expect an exact match, dont allow react-router null
    // value, additionally verify special chars are used
    active = match == null ? false : match.url === to;
  }
  return active;
};

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
     * Bind a handler for the mouseEnter event
     */
    onMouseEnter: PropTypes.func,
    /**
     * Bind a handler for the mouseLeave event
     */
    onMouseLeave: PropTypes.func,
    /**
     * whether the contents should be treated as text (underlined),
     * icon (has specific styling), or 'content' (no styling).
     */
    type: PropTypes.oneOf(['text', 'icon', 'wrap', 'content']),
    /**
     * Use to override the automatic inference of whether the URL is external or internal
     */
    external: PropTypes.bool,
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
    /**
     * Adds an icon to the beginning of the link and changes the styling to "icon" mode
     */
    icon: PropTypes.string,
    /**
     * This prop can be used to 'pseudo-focus' an anchor visually. Useful when
     * supporting some advanced keyboard navigation scenarios.
     */
    appearFocused: PropTypes.bool,
    /**
     * If set to true, disables the Anchor.  While disabled, the Anchor will neither react to mouseover events
     * nor will it react to onclick events.
     */
    disabled: PropTypes.bool,
    /**
     * Specify a CSS value or an object { top, right, bottom, left } or { vertical, horizontal } to
     * control the spacing around the heading. Defaults to a large space below the element.
     */
    spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
     * Renders a text anchor linking to an external site
     */
    ExternalTextAnchor: PropTypes.func,
    /**
     * Renders an icon anchor linking to an external site
     */
    ExternalIconAnchor: PropTypes.func,
    /**
     * Renders a content (image, element) anchor linking to an external site
     */
    ExternalContentAnchor: PropTypes.func,
    /**
     * Renders a text anchor linking to a page in-app
     */
    InternalTextAnchor: PropTypes.func,
    /**
     * Renders an icon anchor linking to a page in-app
     */
    InternalIconAnchor: PropTypes.func,
    /**
     * Renders a content (image, element) anchor linking to a page in-app
     */
    InternalContentAnchor: PropTypes.func,
    /**
     * Resolves whether a link is active. Specifying custom rules for whether
     * a link is active may be necessary when using custom onClick logic
     */
    isActive: PropTypes.func,
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
    appearFocused: false,
    external: undefined,
    disabled: false,
    spacing: { horizontal: 'auto' },
    ExternalTextAnchor: DefaultExternalTextAnchor,
    ExternalIconAnchor: DefaultExternalIconAnchor,
    ExternalContentAnchor: DefaultExternalContentAnchor,
    InternalTextAnchor: DefaultInternalTextAnchor,
    InternalIconAnchor: DefaultInternalIconAnchor,
    InternalContentAnchor: DefaultInternalContentAnchor,
    isActive: matchReactRouter,
  };

  isExternal = () => {
    const { external, to } = this.props;
    if (external !== undefined) {
      return external;
    }
    return /^(https?:)*\/\//.test(to);
  };

  getComponentType = () => {
    const {
      type,
      external,
      children,
      to,
      icon,
      ExternalTextAnchor,
      ExternalIconAnchor,
      ExternalContentAnchor,
      InternalTextAnchor,
      InternalIconAnchor,
      InternalContentAnchor,
    } = this.props;
    const finalType = type || (!!icon ? 'icon' : inferType(children));
    const finalExternal = this.isExternal();
    switch (finalType) {
      case 'wrap':
      case 'content':
        return finalExternal ? ExternalContentAnchor : InternalContentAnchor;
      case 'icon':
        return finalExternal ? ExternalIconAnchor : InternalIconAnchor;
      default:
        return finalExternal ? ExternalTextAnchor : InternalTextAnchor;
    }
  };

  handleClick = event => {
    const { onClick, to, disabled } = this.props;

    // Don't handle navigation if disabled
    if (disabled) return event.preventDefault();

    // if the user isn't using this link to navigate,
    // prevent default navigation
    if (onClick && to === '#') {
      event.preventDefault();
      onClick(event);
    } else if (onClick) {
      // still do onClick event if navigation occurs
      onClick(event);
    }
  };

  childrenWithProps = extraProps => {
    const { children } = this.props;
    if (!children) {
      return null;
    }
    if (typeof children === 'string') {
      return children;
    }
    return React.Children.map(children, child => {
      if (typeof child === 'string') {
        return child;
      }
      return React.cloneElement(child, extraProps);
    });
  };

  // provides extra properties based on certain factors to the underlying element
  extraProps = () => {
    const { to, newTab, disabled } = this.props;
    const newTabProps =
      newTab && !disabled ? { rel: 'noopener', target: '_blank' } : {};
    if (this.isExternal() && !disabled) {
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
    const {
      to,
      exact,
      children,
      className,
      id,
      icon,
      newTab,
      appearFocused,
      onMouseEnter,
      onMouseLeave,
      disabled,
      isActive,
    } = this.props;
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
            icon={icon}
            newTab={newTab}
            appearFocused={appearFocused}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
            spacing={userSpacing.text(this.props)}
          >
            {this.childrenWithProps({
              active: isActive(to, match, exact),
            })}
          </Component>
        )}
      />
    );
  }
}

const ThemedAnchor = withTheme(Anchor);

ThemedAnchor.Danger = ThemedAnchor.Negative = withProps({
  ExternalTextAnchor: DefaultExternalTextAnchor.Danger,
  ExternalIconAnchor: DefaultExternalIconAnchor.Danger,
  InternalTextAnchor: DefaultInternalTextAnchor.Danger,
  InternalIconAnchor: DefaultInternalIconAnchor.Danger,
})(ThemedAnchor);

ThemedAnchor.Positive = withProps({
  ExternalTextAnchor: DefaultExternalTextAnchor.Positive,
  ExternalIconAnchor: DefaultExternalIconAnchor.Positive,
  InternalTextAnchor: DefaultInternalTextAnchor.Positive,
  InternalIconAnchor: DefaultInternalIconAnchor.Positive,
})(ThemedAnchor);

ThemedAnchor.Dark = withProps({
  ExternalTextAnchor: DefaultExternalTextAnchor.Dark,
  ExternalIconAnchor: DefaultExternalIconAnchor.Dark,
  InternalTextAnchor: DefaultInternalTextAnchor.Dark,
  InternalIconAnchor: DefaultInternalIconAnchor.Dark,
})(ThemedAnchor);

ThemedAnchor.Inverted = withProps({
  ExternalTextAnchor: DefaultExternalTextAnchor.Inverted,
  ExternalIconAnchor: DefaultExternalIconAnchor.Inverted,
  InternalTextAnchor: DefaultInternalTextAnchor.Inverted,
  InternalIconAnchor: DefaultInternalIconAnchor.Inverted,
})(ThemedAnchor);

export default ThemedAnchor;
