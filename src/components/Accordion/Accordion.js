import React from 'react';
import PropTypes from 'prop-types';
import { defaultProps } from 'recompose';

import { ExpandToggle } from 'behaviors';
import * as styles from './styles';

/**
 * Accordion expands and collapses when the label is clicked. Alternatively, you can provide the `isExpanded` prop to force open/closed state.
 * You can also provide a hook to `onToggle`. Your `onToggle` function will be called with one parameter, a boolean representing whether
 * the component is currently collapsed at the time it was clicked.
 *
 * Accepts `label` to define what's rendered in the label.
 */
class Accordion extends React.Component {
  static propTypes = {
    /**
     * Content to render when the accordion is collapsed, and in the header of the expanded state.
     */
    label: PropTypes.node.isRequired,
    /**
     * Content inside the collapsible part of the accordion.
     */
    children: PropTypes.node,
    /**
     * Pass isExpanded to override the internal collapsing state (makes the expanded state a controlled value, please
     * use onToggle to manage the state yourself or startExpanded if you just want to set the initial state).
     */
    isExpanded: PropTypes.bool,
    /**
     * Use this to set the default initial state of the internal expanded state without
     * turning it into a controlled value.
     */
    startExpanded: PropTypes.bool,
    /**
     * DEPRECATED: the negation of isExpanded, overrides internal collapse state
     */
    isCollapsed: PropTypes.bool,
    /**
     * Add a handler for when the accordion is collapsed or expanded.
     */
    onToggle: PropTypes.func,
    /**
     * If true, the user cannot change the expanded state of this
     * accordion.
     */
    disabled: PropTypes.bool,
    /**
     * If true, contents are unmounted when the accordion is closed. Useful for improving performance when the Accordion
     * contains a large amount of complex contents.
     */
    unmountClosed: PropTypes.bool,
    /**
     * Set a classname for the accordion container element.
     */
    className: PropTypes.string,
    /**
     * Set an id for the accordion container element.
     */
    id: PropTypes.string,
    /**
     * react-motion config, see https://github.com/chenglou/react-motion#--spring-val-number-config-springhelperconfig--opaqueconfig
     */
    springConfig: PropTypes.shape({
      stiffness: PropTypes.number,
      damping: PropTypes.number,
      precision: PropTypes.number,
    }),
    /**
     * A component to render the border
     */
    Border: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the label
     */
    Label: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the arrow
     */
    Arrow: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the text inside the label
     */
    LabelText: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the content area
     */
    Content: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    isExpanded: null,
    startExpanded: false,
    isCollapsed: null,
    onToggle: null,
    className: null,
    id: null,
    disabled: false,
    unmountClosed: false,
    springConfig: null,
    Border: styles.Border,
    Label: styles.Label,
    Arrow: styles.Arrow,
    LabelText: styles.LabelText,
    Content: styles.Content,
    labelSpacing: 'lg',
  };

  static styles = styles;

  coalesceIsExpandedProps = () => {
    const { isExpanded, isCollapsed } = this.props;
    if (isExpanded === null && isCollapsed === null) {
      return null;
    }
    if (isExpanded === null) {
      return !isCollapsed;
    }
    return isExpanded;
  };

  renderLabel = (isExpanded, disabled) => (
    <this.props.Label spacing={this.props.labelSpacing} disabled={disabled}>
      <this.props.Arrow isExpanded={isExpanded} name="expandArrow" size={21} />
      <this.props.LabelText>{this.props.label}</this.props.LabelText>
    </this.props.Label>
  );

  render() {
    const {
      id,
      className,
      onToggle,
      children,
      Border,
      Content,
      Label,
      Arrow,
      LabelText,
      startExpanded,
      disabled,
      unmountClosed,
      springConfig,
      ...rest
    } = this.props;

    return (
      <Border disabled={disabled} {...rest}>
        <ExpandToggle
          id={id}
          className={className}
          onToggle={onToggle}
          toggleContent={this.renderLabel}
          isExpanded={this.coalesceIsExpandedProps()}
          startExpanded={startExpanded}
          disabled={disabled}
          unmountClosed={unmountClosed}
          springConfig={springConfig}
        >
          <Content>{children}</Content>
        </ExpandToggle>
      </Border>
    );
  }
}

Accordion.Small = defaultProps({
  Border: styles.Border.Small,
  Arrow: styles.Arrow.Small,
  Label: styles.Label.Small,
  labelSpacing: '20px',
})(Accordion);

export default Accordion;
