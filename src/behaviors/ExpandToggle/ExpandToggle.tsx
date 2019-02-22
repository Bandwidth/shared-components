import * as React from 'react';
import isFunction from 'lodash.isfunction';
import { Collapse, UnmountClosed } from 'react-collapse';

type ToggleContentRenderProp = (
  toggled: boolean,
  disabled: boolean,
) => React.ReactNode;

interface ExpandToggleProps {
  /**
   * Sets the id of the containing collapsible element
   */
  id: string;
  /**
   * Sets the className of the containing collapsible element
   */
  className: string;
  /**
   * Callback for toggle events
   */
  onToggle: (toggled: boolean) => void;
  /**
   * Content to render within the toggle area. You may optionally pass a function,
   * which will be called with the current toggle on/off state.
   */
  toggleContent: React.ReactNode | ToggleContentRenderProp;
  /**
   * Override ('control') toggling behavior, disabling default internal toggle state
   */
  isExpanded: boolean;
  /**
   * Content to render inside the collapsible area
   */
  children: React.ReactNode;
  /**
   * Whether to start expanded
   */
  startExpanded: boolean;
  /**
   * If true, the user cannot change the state
   */
  disabled: boolean;
  /**
   * If true, contents are unmounted when the accordion is closed.
   */
  unmountClosed: boolean;
  /**
   * react-motion config, see https://github.com/chenglou/react-motion#--spring-val-number-config-springhelperconfig--opaqueconfig
   */
  springConfig?: {
    [key: string]: number;
  };
}

interface ExpandToggleState {
  internalIsExpanded: boolean;
}

/**
 * A prototypical accordion element with no styling. Renders one element which can be
 * clicked to toggle expanded state, and an expandable content area.
 */
class ExpandToggle extends React.Component<
  ExpandToggleProps,
  ExpandToggleState
> {
  static defaultProps = {
    id: null,
    className: null,
    onToggle: () => null,
    isExpanded: false,
    startExpanded: false,
    disabled: false,
    toggleContent: null,
    unmountClosed: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      internalIsExpanded: props.startExpanded,
    };
  }

  handleToggle = () => {
    if (this.props.disabled) {
      return;
    }

    if (this.props.onToggle) {
      this.props.onToggle(this.calcIsExpanded());
    }
    this.setState(state => ({ internalIsExpanded: !state.internalIsExpanded }));
  };

  calcIsExpanded = (): boolean => {
    const { isExpanded } = this.props;
    const { internalIsExpanded } = this.state;
    if (isExpanded === null) {
      return internalIsExpanded;
    }

    return isExpanded;
  };

  renderToggle = () => {
    const { toggleContent, disabled } = this.props;
    if (isFunction(toggleContent)) {
      return (toggleContent as ToggleContentRenderProp)(
        this.calcIsExpanded(),
        disabled,
      );
    }
    return toggleContent;
  };

  render() {
    const isExpanded = this.calcIsExpanded();
    const {
      children,
      id,
      className,
      springConfig,
      disabled,
      unmountClosed,
    } = this.props;
    const CollapseType = unmountClosed ? UnmountClosed : Collapse;

    return (
      <div id={id} className={className}>
        <div
          style={{ cursor: disabled ? 'auto' : 'pointer' }}
          onClick={this.handleToggle}
        >
          {this.renderToggle()}
        </div>
        <CollapseType
          hasNestedCollapse
          isOpened={isExpanded}
          springConfig={springConfig}
        >
          {children}
        </CollapseType>
      </div>
    );
  }
}

export default ExpandToggle;
