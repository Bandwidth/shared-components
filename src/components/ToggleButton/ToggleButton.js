import React from 'react';
import PropTypes from 'prop-types';
import { defaultProps } from 'recompose';
import * as styles from './styles';
import noop from 'lodash.noop';

/**
 * `ToggleButton` is a simple styled button with some extra functionality built-in for handling selection. Control
 * it by setting `selected`, then use its `onClick` or `onSelect/onDeselect` handlers to implement selection or hook
 * into the [Selectable](#!/Selectable) behavior. Set `name` to keep track of which button was pressed when a
 * click handler fires.
 */
export default class ToggleButton extends React.PureComponent {
  static propTypes = {
    /**
     * Callback when the toggle is clicked. Called with the signature `(name, selected)`.
     */
    onClick: PropTypes.func,
    /**
     * Callback when the toggle is deselected. Called with the signature `(name)`.
     */
    onDeselect: PropTypes.func,
    /**
     * Callback when the toggle is selected. Called with the signature `(name)`.
     */
    onSelect: PropTypes.func,
    /**
     * Has no effect on rendering; acts as a key that you can use to identify the
     * **ToggleButton** when it invokes `onClick`, `onSelect`, or `onDeselect`.
     */
    name: PropTypes.any,
    /**
     * Whether the button is selected or not
     */
    selected: PropTypes.bool,
    /**
     * Whether the button is hovered or not
     */
    hovered: PropTypes.bool,
  };

  static Small = defaultProps({
    Button: styles.Button.Small,
  })(ToggleButton);

  static Colorful = defaultProps({
    Button: styles.Button.Colorful,
  })(ToggleButton);

  static defaultProps = {
    className: "scl-toggle-button",
    onClick: noop,
    onDeselect: noop,
    onSelect: noop,
    selected: false,
    hovered: null,
    Button: styles.Button,
  };

  static styles = styles;

  state = {
    internalHovered: false,
  };

  handleClick = ev => {
    ev.preventDefault();
    const {
      props: { onClick, onDeselect, onSelect, selected, name },
    } = this;
    onClick(name, selected);
    selected ? onDeselect(name) : onSelect(name);
  };

  handleMouseEnter = () => this.setState({ internalHovered: true });

  handleMouseLeave = () => this.setState({ internalHovered: false });

  render() {
    const {
      props: {
        Button,
        onClick,
        onDeselect,
        onSelect,
        hovered,
        forwardRef,
        ...rest
      },
      state: { internalHovered },
      handleClick,
    } = this;
    return (
      <Button
        ref={forwardRef}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.handleMouseLeave}
        onClick={handleClick}
        hovered={
          hovered !== null && hovered != undefined ? hovered : internalHovered
        }
        {...rest}
      />
    );
  }
}
