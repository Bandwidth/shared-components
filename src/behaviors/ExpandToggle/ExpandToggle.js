import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Collapse, UnmountClosed } from 'react-collapse';

/**
 * A prototypical accordion element with no styling. Renders one element which can be
 * clicked to toggle expanded state, and an expandable content area.
 */
class ExpandToggle extends React.Component {
  static propTypes = {
    /**
     * Sets the id of the containing collapsible element
     */
    id: PropTypes.string,
    /**
     * Sets the className of the containing collapsible element
     */
    className: PropTypes.string,
    /**
     * Callback for toggle events
     */
    onToggle: PropTypes.func,
    /**
     * Content to render within the toggle area. You may optionally pass a function,
     * which will be called with the current toggle on/off state.
     */
    toggleContent: PropTypes.node.isRequired,
    /**
     * Override ('control') toggling behavior, disabling default internal toggle state
     */
    isExpanded: PropTypes.bool,
    /**
     * Content to render inside the collapsible area
     */
    children: PropTypes.node.isRequired,
    /**
     * Whether to start expanded
     */
    startExpanded: PropTypes.bool,
    /**
     * If true, the user cannot change the state
     */
    disabled: PropTypes.bool,
    /**
     * If true, contents are unmounted when the accordion is closed.
     */
    unmountClosed: PropTypes.bool,
    /**
     * react-motion config, see https://github.com/chenglou/react-motion#--spring-val-number-config-springhelperconfig--opaqueconfig
     */
    springConfig: PropTypes.shape({
      stiffness: PropTypes.number,
      damping: PropTypes.number,
      precision: PropTypes.number,
    }),
  };

  static defaultProps = {
    id: null,
    className: null,
    onToggle: () => null,
    isExpanded: null,
    startExpanded: false,
    springConfig: null,
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

  calcIsExpanded = () => {
    const { isExpanded } = this.props;
    const { internalIsExpanded } = this.state;
    if (isExpanded === null) {
      return internalIsExpanded;
    }

    return isExpanded;
  };

  renderToggle = () => {
    const { toggleContent, disabled } = this.props;
    if (_.isFunction(toggleContent)) {
      return toggleContent(this.calcIsExpanded(), disabled);
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
