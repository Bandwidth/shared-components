import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import defaultPropsComponent from 'extensions/defaultPropsComponent';
import get from 'extensions/themeGet';
import { noop } from 'lodash';
import StyledButton from './styles/StyledToggleButton';
import ColorfulButton from './styles/ColorfulButton';
import SmallButton from './styles/SmallButton';

class ToggleButton extends React.PureComponent {
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
    name: PropTypes.any.isRequired,
    /**
     * Whether the button is selected or not
     */
    selected: PropTypes.bool,
    /**
     * Whether the button is hovered or not
     */
    hovered: PropTypes.bool,
  };

  static Small = defaultPropsComponent({
    Button: SmallButton,
  })(ToggleButton);

  static Colorful = defaultPropsComponent({
    Button: ColorfulButton,
  })(ToggleButton);

  static defaultProps = {
    onClick: noop,
    onDeselect: noop,
    onSelect: noop,
    selected: false,
    hovered: null,
    Button: StyledButton,
  };

  state = {
    internalHovered: false,
  };

  handleClick = ev => {
    ev.preventDefault();
    const { props: { onClick, onDeselect, onSelect, selected, name } } = this;
    onClick(name, selected);
    selected ? onDeselect(name) : onSelect(name);
    this.handleMouseLeave();
  };

  handleMouseEnter = () => this.setState({ internalHovered: true });

  handleMouseLeave = () => this.setState({ internalHovered: false });

  render() {
    const {
      props: { Button, onClick, hovered, ...rest },
      state: { internalHovered },
      handleClick,
    } = this;
    return (
      <Button
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={handleClick}
        hovered={
          hovered !== null && hovered != undefined ? hovered : internalHovered
        }
        {...rest}
      />
    );
  }
}

export default ToggleButton;
