import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import generateId from '../../extensions/generateId';
import theme from '../../theme';

const select = theme
  .register('Toggle', ({ colors, shadows, spacing, fonts }) => ({
    focusShadow: shadows.focusOutline,
    borderWidth: '2px',
    borderStyle: 'solid',
    size: '24px',
    description: {
      padding: `${spacing.extraSmall} 0 ${spacing.extraSmall} ${spacing.extraLarge}`,
      fontFamily: fonts.brand,
      color: colors.text.default,
      fontWeight: 300,
    },
    backgrounds: {
      on: colors.primary.alternate,
      off: colors.background.default,
      hover: colors.primary.dark,
      disabled: colors.background.disabled,
    },
    colors: {
      on: colors.text.inverted,
      off: colors.text.inverted,
      disabled: colors.background.disabled,
    },
    borderColors: {
      disabled: colors.gray.default,
      on: colors.primary.alternate,
      off: colors.primary.alternate,
      hover: colors.primary.dark,
    },
  }))
  .createSelector();
const descriptionSelect = (val) => select('description.' + val);

export const HiddenInput = theme.connect(styled.input`
  opacity: 0;
  position: absolute;
  z-index: -100000;

  &:focus + label::before {
    box-shadow: ${select('focusShadow')};
  }

  & + label::before {
    background: ${select('backgrounds.off')};
    border-color: ${select('borderColors.off')};
  }

  & + label::after {
    background: ${select('colors.off')};
    border-color: ${select('borderColors.off')};
  }

  & + label:hover::before, & + label:hover::after {
    border-color: ${select('borderColors.hover')};
  }

  &:checked + label {
    &::before {
      background: ${select('backgrounds.on')};
      border-color: ${select('borderColors.on')};
    }

    &::after {
      left: ${select('size')};
      background: ${select('colors.on')};
      border-color: ${select('borderColors.on')};
    }

    &:hover {
      &::before {
        background: ${select('backgrounds.hover')};
      }
      &::before, &::after {
        border-color: ${select('borderColors.hover')};
      }
    }
  }

  &:disabled + label {
    &::before, &::after {
      border-color: ${select('borderColors.disabled')};
    }

    &::before {
      background: ${select('backgrounds.disabled')};
    }

    &::after {
      background: ${select('colors.disabled')};
    }
  }
`);

const ToggleLabel = theme.connect(styled.label`
  cursor: pointer;
  position: relative;
  padding: ${descriptionSelect('padding')};
  user-select: none;
  transition: all 0.2s ease;
  line-height: calc(${select('size')} * 1.5);
  font-family: ${descriptionSelect('fontFamily')};
  font-weight: ${descriptionSelect('fontWeight')};
  color: ${descriptionSelect('color')};
  display: inline;

  &::before {
    content: '';
    border-width: ${select('borderWidth')};
    border-style: ${select('borderStyle')};
    border-radius: ${select('size')};
    width: calc(${select('size')} * 2);
    height: ${select('size')};
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
    border-width: ${select('borderWidth')};
    border-style: ${select('borderStyle')};
    border-radius: ${select('size')};
    width: ${select('size')};
    height: ${select('size')};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    display: block;
    transition: all 0.2s ease;
  }
`);

const Container = styled.div`
  position: relative;
  display: block;
`;

class Toggle extends React.Component {
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
        <ToggleLabel htmlFor={id}>
          {description}
        </ToggleLabel>
      </Container>
    );
  }
}

export default Toggle;
