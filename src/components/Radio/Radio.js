import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from '../Icon/icons';
import generateId from '../../extensions/generateId';

const SIZE = '1.3em';

const RadioInput = styled.input`
  display: none;

  &:active:not(:disabled) + label::after {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &:checked:active:not(:disabled) + label::after {
    background: ${({ theme }) => theme.colors.primary};
  }
  &:focus:not(:hover) + label::after {
    box-shadow: ${({ theme }) => theme.shadows.focusOutline};
  }
  &:disabled + label {
    opacity: 0.5;
    cursor: default;
  }
  &:disabled + label::before {
    color: ${({ theme }) => theme.colors.grayLightText};
  }
`;

const RadioLabel = styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  padding: 0.2em 0 0.2em 2.1em;
  line-height: 1.5em;

  /* the check */

  &::before {
    content: ${({ checked }) => checked ? `"${icons('checkmark')}"` : '""'};
    color: ${({ theme }) => theme.colors.white};
    font-family: "Bandwidth";
    text-align: center;
    width: ${SIZE};
    height: ${SIZE};
    display: block;
    position: absolute;
    top: 50%;
    left: calc(${SIZE} / 2);
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  /* the bubble */

  &::after {
    content: "";
    background: ${({ checked, theme }) => checked ? theme.colors.secondary : theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 100%;
    width: ${SIZE};
    height: ${SIZE};
    display: block;
    position: absolute;
    top: 50%;
    left: calc(${SIZE} / 2);
    transform: translate(-50%, -50%);
    transition: all 0.2s ease;
  }
`;

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
