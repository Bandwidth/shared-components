import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from '../Icon/icons';
import generateId from '../../extensions/generateId';
import theme from '../../theme';

const select = theme
  .register('Radio', ({ colors, shadows }) => ({
    bubbleBackground: colors.secondary,
    bubbleActiveBackground: colors.primary,
    checkColor: colors.white,
    bubbleBorderColor: colors.secondary,
    bubbleBorderWidth: '2px',
    focusShadow: shadows.focusOutline,
    disabledTextColor: colors.grayLightText,
    disabledOpacity: '0.5',
    bubbleSize: '1.3em',
    textPadding: '0.2em 0 0.2em 2.1em',
    lineHeight: '1.5em',
  }))
  .createSelector();

const RadioInput = theme.connect(styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1000000;

  &:active:not(:disabled) + label::after {
    border-color: ${select('bubbleBorderColor')};
  }
  &:checked:not(:disabled) + label::after {
    background: ${select('bubbleBackground')};
  }
  &:checked:active:not(:disabled) + label::after {
    background: ${select('bubbleActiveBackground')};
  }
  &:focus:not(:hover) + label::after {
    box-shadow: ${select('focusShadow')};
  }
  &:disabled + label {
    opacity: ${select('disabledOpacity')};
    cursor: default;
  }
  &:disabled + label::before {
    color: ${select('disabledTextColor')};
  }
`);

const RadioLabel = theme.connect(styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  padding: ${select('textPadding')};
  line-height: ${select('lineHeight')};

  /* the check */

  &::before {
    content: ${({ checked }) => checked ? `"${icons('checkmark')}"` : '""'};
    color: ${select('checkColor')};
    font-family: "Bandwidth";
    text-align: center;
    width: ${select('bubbleSize')};
    height: ${select('bubbleSize')};
    display: block;
    position: absolute;
    top: 50%;
    left: calc(${select('bubbleSize')} / 2);
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  /* the bubble */

  &::after {
    content: "";
    border: ${select('bubbleBorderWidth')} solid ${select('bubbleBorderColor')};
    border-radius: 100%;
    width: ${select('bubbleSize')};
    height: ${select('bubbleSize')};
    display: block;
    position: absolute;
    top: 50%;
    left: calc(${select('bubbleSize')} / 2);
    transform: translate(-50%, -50%);
    transition: all 0.2s ease;
  }
`);

const Container = styled.div`
  display: block;
  position: relative;
`;

class Radio extends React.Component {
  static propTypes = {
    /**
     * Adds a class name to the input element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the input element.
     */
    id: PropTypes.string,
    /**
     * The value of the checkbox.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * Whether the checkbox is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Whether the user is prevented from interacting with the checkbox.
     */
    disabled: PropTypes.bool,
    /**
     * A description to display next to the checkbox.
     */
    description: PropTypes.node,
    /**
     * Callback for the onChange event of the input.
     */
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    id: null,
    value: false,
    required: false,
    disabled: false,
    description: null,
    onChange: () => null,
  };

  render() {
    const { className, disabled, value, required, description, onChange } = this.props;
    const id = this.props.id || generateId('toggle');
    return (
      <Container>
        <RadioInput
          id={id}
          className={className}
          type="checkbox"
          disabled={disabled}
          checked={!!value}
          required={required}
          onChange={onChange}
        />
        <RadioLabel htmlFor={id} checked={!!value}>
          {description}
        </RadioLabel>
      </Container>
    );
  }
}

Radio.Input = RadioInput;
Radio.Label = RadioLabel;
Radio.Container = Container;

export default Radio;
