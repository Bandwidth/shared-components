import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import sharedComponent from '../../sharedComponent';
import icons from '../Icon/icons';
import generateId from '../../extensions/generateId';

const SIZE = '22px';

export const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1000000;

  &:focus + label::after {
    box-shadow: ${({ theme }) => theme.shadows.focusOutline};
  }
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  position: relative;
  font-size: 14px;
  padding: ${({ theme }) => theme.checkbox.labelPadding};
  user-select: none;
  font-size: ${({ theme }) => theme.label.fontSize};
  font-weight: ${({ theme }) => theme.label.fontWeight};
  letter-spacing: ${({ theme }) => theme.label.letterSpacing};
  color: ${({ theme }) => theme.label.fg};

  /* the check */
  &::before {
    content: ${({ active }) => active ? `"${icons('checkmark')}"` : '""'};
    color: ${({ theme }) => theme.checkbox.checkFG};
    font-family: 'Bandwidth';
    font-size: 1em;
    display: block;
    position: absolute;
    top: 50%;
    left: calc(${SIZE} / 2);
    transform: translate(-50%, -48%);
    z-index: 1;
    box-sizing: border-box;
  }

  /* the box */
  &::after {
    content: "";
    background: ${({ theme, active }) => active ? theme.checkbox.fullBG : theme.checkbox.emptyBG};
    border: ${({ theme }) => theme.checkbox.border};
    border-radius: 0.2em;
    width: ${SIZE};
    height: ${SIZE};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: all 0.2s ease;
    box-sizing: border-box;
  }

  ${({ disabled, theme }) =>
    disabled ?
      css`
        opacity: ${theme.checkbox.disabledOpacity};
        &::before { opacity: ${theme.checkbox.disabledOpacity}; }
      ` :
      ''
  }
`;

const Container = styled.div`
  display: block;
  position: relative;
`;

export class Checkbox extends React.Component {
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
        <HiddenInput
          id={id}
          className={className}
          type="checkbox"
          disabled={disabled}
          checked={!!value}
          required={required}
          onChange={onChange}
        />
        <CheckboxLabel htmlFor={id} active={!!value}>
          {description}
        </CheckboxLabel>
      </Container>
    );
  }
}


export default sharedComponent({ Input: HiddenInput, Label: CheckboxLabel, Styled: Container })(Checkbox);
