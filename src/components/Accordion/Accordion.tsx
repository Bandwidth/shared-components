import * as React from 'react';

import { ExpandToggle } from 'behaviors';
import * as styles from './styles';
import { Spacing } from '../../extensions/userSpacing';

export interface AccordionProps {
  /**
   * Content to render when the accordion is collapsed, and in the header of the expanded state.
   */
  label?: React.ReactNode;
  /**
   * The spacing prop to give to the label
   */
  labelSpacing?: Spacing;
  /**
   * Content inside the collapsible part of the accordion.
   */
  children?: React.ReactNode;
  /**
   * Pass isExpanded to override the internal collapsing state (makes the expanded state a controlled value, please
   * use onToggle to manage the state yourself or startExpanded if you just want to set the initial state).
   */
  isExpanded?: boolean | null;
  /**
   * Use this to set the default initial state of the internal expanded state without
   * turning it into a controlled value.
   */
  startExpanded?: boolean;
  /**
   * DEPRECATED: the negation of isExpanded, overrides internal collapse state
   */
  isCollapsed?: boolean | null;
  /**
   * Add a handler for when the accordion is collapsed or expanded.
   */
  onToggle?: () => void;
  /**
   * If true, the user cannot change the expanded state of this
   * accordion.
   */
  disabled?: boolean;
  /**
   * If true, contents are unmounted when the accordion is closed. Useful for improving performance when the Accordion
   * contains a large amount of complex contents.
   */
  unmountClosed?: boolean;
  /**
   * Set a classname for the accordion container element.
   */
  className?: string;
  /**
   * Set an id for the accordion container element.
   */
  id?: string;
  /**
   * react-motion config, see https://github.com/chenglou/react-motion#--spring-val-number-config-springhelperconfig--opaqueconfig
   */
  springConfig?: {
    stiffness: number;
    damping: number;
    precision: number;
  };
  /**
   * A component to render the border
   */
  Border?: any;
  /**
   * A component to render the label
   */
  Label?: any;
  /**
   * A component to render the arrow
   */
  Arrow?: any;
  /**
   * A component to render the text inside the label
   */
  LabelText?: any;
  /**
   * A component to render the content area
   */
  Content?: any;
}

/**
 * Accordion expands and collapses when the label is clicked. Alternatively, you can provide the `isExpanded` prop to force open/closed state.
 * You can also provide a hook to `onToggle`. Your `onToggle` function will be called with one parameter, a boolean representing whether
 * the component is currently collapsed at the time it was clicked.
 *
 * Accepts `label` to define what's rendered in the label.
 */
class Accordion extends React.Component<AccordionProps> {
  static defaultProps: AccordionProps = {
    isExpanded: null,
    startExpanded: false,
    isCollapsed: null,
    disabled: false,
    unmountClosed: false,
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
      <this.props.Arrow isExpanded={isExpanded} name="forward" size={21} />
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
          isExpanded={!!this.coalesceIsExpandedProps()}
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

export default Accordion;
