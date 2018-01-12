import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import { Route } from 'react-router-dom';
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
    external: undefined,
    ExternalTextAnchor: DefaultExternalTextAnchor,
    ExternalIconAnchor: DefaultExternalIconAnchor,
    ExternalContentAnchor: DefaultExternalContentAnchor,
    InternalTextAnchor: DefaultInternalTextAnchor,
    InternalIconAnchor: DefaultInternalIconAnchor,
    InternalContentAnchor: DefaultInternalContentAnchor,
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
    const { onClick, to } = this.props;
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
    const { to, newTab } = this.props;
    const newTabProps = newTab ? { rel: 'noopener', target: '_blank' } : {};
    if (this.isExternal()) {
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
    const { to, exact, children, className, id, icon, newTab } = this.props;
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
          >
            {this.childrenWithProps({ active: !!match })}
          </Component>
        )}
      />
    );
  }
}

Anchor.Danger = Anchor.Negative = withProps({
  ExternalTextAnchor: DefaultExternalTextAnchor.Danger,
  ExternalIconAnchor: DefaultExternalIconAnchor.Danger,
  InternalTextAnchor: DefaultInternalTextAnchor.Danger,
  InternalIconAnchor: DefaultInternalIconAnchor.Danger,
})(Anchor);

Anchor.Positive = withProps({
  ExternalTextAnchor: DefaultExternalTextAnchor.Positive,
  ExternalIconAnchor: DefaultExternalIconAnchor.Positive,
  InternalTextAnchor: DefaultInternalTextAnchor.Positive,
  InternalIconAnchor: DefaultInternalIconAnchor.Positive,
})(Anchor);

Anchor.Dark = withProps({
  ExternalTextAnchor: DefaultExternalTextAnchor.Dark,
  ExternalIconAnchor: DefaultExternalIconAnchor.Dark,
  InternalTextAnchor: DefaultInternalTextAnchor.Dark,
  InternalIconAnchor: DefaultInternalIconAnchor.Dark,
})(Anchor);

Anchor.Inverted = withProps({
  ExternalTextAnchor: DefaultExternalTextAnchor.Inverted,
  ExternalIconAnchor: DefaultExternalIconAnchor.Inverted,
  InternalTextAnchor: DefaultInternalTextAnchor.Inverted,
  InternalIconAnchor: DefaultInternalIconAnchor.Inverted,
})(Anchor);

export default Anchor;
