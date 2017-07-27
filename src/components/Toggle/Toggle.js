import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import sharedComponent from '../../sharedComponent';
import generateId from '../../extensions/generateId';

const HEIGHT = '24px';
const WIDTH = '48px';

export const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -100000;

  &:focus + label::before {
    box-shadow: ${({ theme }) => theme.shadows.focusOutline};
  }
`;

const ToggleLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding: ${({ theme }) =>
    `${theme.padding.extraSmall} 0 ${theme.padding.extraSmall} ${theme.padding
      .extraLarge}`};
  user-select: none;
  transition: all 0.2s ease;
  line-height: ${HEIGHT};
  font-family: ${({ theme }) => theme.fonts.brand};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grayMed};
  display: inline;

  &::before {
    content: '';
    background: ${({ theme, active }) =>
      active ? theme.colors.secondary : theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${HEIGHT};
    width: ${WIDTH};
    height: ${HEIGHT};
    cursor: pointer;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }

  &::after {
    content: '';
    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${HEIGHT};
    width: ${HEIGHT};
    height: ${HEIGHT};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ active }) => (active ? HEIGHT : 0)};
    display: block;
    transition: all 0.2s ease;
  }

  &:hover::before,
  &:hover::after {
    border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  }
  &:hover::before {
    background: ${({ theme, active }) =>
      active ? theme.colors.primaryDark : theme.colors.white};
  }

  ${({ disabled }) =>
    disabled
      ? css`
      &::before, &::after {
        border: 2px solid ${({ theme }) => theme.colors.grayDark};
        background: ${({ theme }) => theme.colors.disabled};
      }
    `
      : ''};
`;

const Container = styled.div`
  position: relative;
  display: block;
`;

export class Toggle extends React.Component {
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
     * The value of the toggle.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * Whether the toggle is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Whether the user is prevented from interacting with the toggle.
     */
    disabled: PropTypes.bool,
    /**
     * A description to display next to the toggle.
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
    const {
      className,
      disabled,
      value,
      required,
      description,
      onChange,
    } = this.props;
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
        <ToggleLabel htmlFor={id} active={value} disabled={disabled}>
          {description}
        </ToggleLabel>
      </Container>
    );
  }
}

export default sharedComponent({ Input: HiddenInput, Label: ToggleLabel, Container, Styled: Container })(Toggle);
