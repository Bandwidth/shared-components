import React, { HTMLAttributes } from 'react';
import defaultProps from 'extensions/defaultProps';
import * as styles from './styles';
import noop from 'lodash.noop';

interface ToggleButtonProps {
  /**
   * Callback when the toggle is clicked. Called with the signature `(name, selected)`.
   */
  onClick?: (name: string, selected: boolean) => void;
  /**
   * Callback when the toggle is deselected. Called with the signature `(name)`.
   */
  onDeselect?: (name: string) => void;
  /**
   * Callback when the toggle is selected. Called with the signature `(name)`.
   */
  onSelect?: (name: string) => void;
  /**
   * Has no effect on rendering; acts as a key that you can use to identify the
   * **ToggleButton** when it invokes `onClick`, `onSelect`, or `onDeselect`.
   */
  name: string;
  /**
   * Whether the button is selected or not
   */
  selected?: boolean;
  /**
   * Whether the button is hovered or not
   */
  hovered?: boolean;
  /**
   * The type of button to use
   */
  Button?: any;
  forwardRef?: any;
}

/**
 * `ToggleButton` is a simple styled button with some extra functionality built-in for handling selection. Control
 * it by setting `selected`, then use its `onClick` or `onSelect/onDeselect` handlers to implement selection or hook
 * into the [Selectable](#!/Selectable) behavior. Set `name` to keep track of which button was pressed when a
 * click handler fires.
 */
export default class ToggleButton extends React.PureComponent<
  ToggleButtonProps & HTMLAttributes<HTMLButtonElement>
> {
  static defaultProps = {
    onClick: noop,
    onDeselect: noop,
    onSelect: noop,
    selected: false,
    Button: styles.Button,
  };

  static styles = styles;

  static Small = defaultProps({
    Button: (styles.Button as any).Small,
  })(ToggleButton);

  static Colorful = defaultProps({
    Button: (styles.Button as any).Colorful,
  })(ToggleButton);

  state = {
    internalHovered: false,
  };

  handleClick = ev => {
    ev.preventDefault();
    const { onClick, onDeselect, onSelect, selected, name } = this.props;
    onClick && onClick(name, !!selected);
    selected ? onDeselect && onDeselect(name) : onSelect && onSelect(name);
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
