import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import arrowImage from './arrow.png';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const NONE_KEY = 'BW_SHARED_SELECT_NONE';

const select = theme.register('Select', ({ spacing, colors, fonts }) => ({
  padding: spacing.medium,
  borderColors: {
    default: colors.gray.borderLight,
    focus: colors.gray.border,
    hover: colors.gray.border,
    disabled: colors.gray.default,
  },
  colors: {
    default: colors.text.default,
    disabled: colors.text.default,
  },
  opacities: {
    default: 1,
    disabled: 0.5,
  },
  backgrounds: {
    default: colors.background.default,
    disabled: colors.background.disabled,
  },
  borderWidth: '1px',
  borderStyle: 'solid',
  fontFamily: fonts.brand,
  fontSize: '14px',
  letterSpacing: '0.02em',
  lineHeight: '1.5',
  arrowSize: '35px',
  validEffectColor: colors.primary.light,
})).createSelector();

const Styles = theme.connect(styled.select`
  ${spreadStyles(select)}
  color: ${select('colors.default')};
  background: ${select('backgrounds.default')};
  border-color: ${select('borderColors.default')};
  opacity: ${select('opacities.default')};
  border-radius: 0;
  width: 100%;
  cursor: pointer;
  box-shadow: none;
  appearance: none;
  position: relative;

  background-image: url(${arrowImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: ${select('arrowSize')};

  transition: 0.2s ease all;

  &:hover {
    border-color: ${select('borderColors.hover')};
  }

  &:focus {
    box-shadow: inset 0 -5px 0 ${select('validEffectColor')};
    border-color: ${select('borderColors.focus')};
    outline: none;
  }

  &:disabled {
    background: ${select('backgrounds.disabled')};
    border-color: ${select('borderColors.disabled')};
    color: ${select('colors.disabled')};
    opacity: ${select('opacities.disabled')};
  }
`);

const selectOptionPrimaryValue = (option) => {
  if (_.isString(option)) {
    return option;
  }
  if (_.isFunction(option.get)) {
    return option.get('id');
  }
  return option.id || JSON.stringify(option);
};

class Select extends React.Component {
  static propTypes = {
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * Indicates whether the user can interact with this field.
     */
    disabled: PropTypes.bool,
    /**
     * Indicates whether this field is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Text to show if none is selected
     */
    noneText: PropTypes.string,
    /**
     * Can the user select 'none'? (Defaults true)
     */
    allowNone: PropTypes.bool,
    /**
     * A list of selection options. Can be complex objects.
     */
    options: PropTypes.array.isRequired,
    /**
     * A function which takes an option and renders text for the select. Has
     * a sane default.
     */
    renderOption: PropTypes.func,
    /**
     * A function which takes an option and computes a single string value to
     * represent it. Has a sane default.
     */
    selectOptionValue: PropTypes.func,
    /**
     * The currently selected value.
     */
    value: PropTypes.string,
    /**
     * Handler for change events on the select. It will be called with the new value
     * computed from selectOptionValue.
     */
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    id: null,
    disabled: false,
    required: false,
    noneText: 'None',
    allowNone: true,
    renderOption: selectOptionPrimaryValue,
    selectOptionValue: selectOptionPrimaryValue,
  };

  handleChange = (ev) => {
    const val = ev.target.value;
    if (val === NONE_KEY) {
      return this.props.onChange(null);
    }

    return this.props.onChange(val);
  };

  renderOptions = () => {
    const {
      options,
      renderOption,
      allowNone,
      noneText,
      selectOptionValue,
    } = this.props;

    const opts = options.map((option) => (
      <option
        key={selectOptionValue(option)}
        value={selectOptionValue(option)}
      >
        {renderOption(option)}
      </option>
    ));

    if (allowNone) {
      opts.unshift(
        <option
          key={NONE_KEY}
          value={NONE_KEY}
        >
          {noneText}
        </option>
      );
    }

    return opts;
  };

  render() {
    const { value, disabled, required, id, className } = this.props;
    return (
      <Styles
        onChange={this.handleChange}
        value={value}
        disabled={disabled}
        required={required}
        id={id}
        className={className}
      >
        {this.renderOptions()}
      </Styles>
    );
  }
}

export default Select;
