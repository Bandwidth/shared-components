import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import icons from '../Icon/icons';
import generateId from '../../extensions/generateId';
import theme from '../../theme';

const select = theme
  .register('Checkbox', ({ colors, shadows }) => ({
    labelColor: colors.text.default,
    checkColor: colors.text.inverted,
    boxCheckedBackground: colors.primary.alternate,
    boxUncheckedBackground: colors.background.default,
    boxBorderColor: colors.primary.alternate,
    boxBorderWidth: '2px',
    boxBorderStyle: 'solid',
    checkSize: '1em',
    focusShadow: shadows.focusOutline,
    labelPadding: '0.2em 0 0.2em 2.1em',
    boxSize: '22px',
    disabledOpacity: '0.5',
  }))
  .createSelector();
const labelSelect = theme.createSelector('Label');

const SIZE = '22px';

export const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1000000;

  &:focus + label::after {
    box-shadow: ${select('focusShadow')};
  }
  &:checked + label::after {
    background: ${select('boxCheckedBackground')};
  }
  &:disabled + label {
    opacity: ${select('disabledOpacity')};
    &::before { opacity: ${select('disabledOpacity')}; }
  }
  &:checked + label::before {
    content: "${icons('checkmark')}";
  }
`;

const CheckboxLabel = styled.label`
  padding: ${select('labelPadding')};

  cursor: pointer;
  position: relative;
  font-size: ${labelSelect('fontSize')};
  user-select: none;
  font-size: ${labelSelect('fontSize')};
  font-weight: ${labelSelect('fontWeight')};
  letter-spacing: ${labelSelect('letterSpacing')};
  color: ${labelSelect('color')};

  /* the check */
  &::before {
    content: "";
    color: ${select('checkColor')};
    font-family: 'Bandwidth';
    font-size: ${select('checkSize')};
    display: block;
    position: absolute;
    top: 50%;
    left: calc(${select('boxSize')} / 2);
    transform: translate(-50%, -48%);
    z-index: 1;
    box-sizing: border-box;
  }

  /* the box */
  &::after {
    content: "";
    background: ${select('boxUncheckedBackground')};
    border-color: ${select('boxBorderColor')};
    border-width: ${select('boxBorderWidth')};
    border-style: ${select('boxBorderStyle')};
    border-radius: 0.2em;
    width: ${select('boxSize')};
    height: ${select('boxSize')};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: all 0.2s ease;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: block;
  position: relative;
`;

class Checkbox extends React.Component {
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

Checkbox.Input = HiddenInput;
Checkbox.Label = CheckboxLabel;
Checkbox.Container = Container;
export default Checkbox;
