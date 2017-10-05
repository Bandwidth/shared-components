import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Anchor from '../Anchor';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Input', ({ colors, fonts, spacing, shadows }) => ({
    colors: {
      default: colors.black,
      disabled: colors.black,
    },
    backgrounds: {
      default: colors.white,
      disabled: colors.disabled,
    },
    borderColors: {
      default: colors.borderLight,
      invalid: colors.errorBorder,
      focus: colors.border,
      disabled: colors.border,
    },
    effectColors: {
      valid: colors.primaryLight,
      invalid: colors.errorBackgroundLight,
    },
    opacities: {
      default: 1,
      disabled: 0.5,
    },
    letterSpacing: '0.02em',
    lineHeight: '1.5',
    fontSize: '14px',
    fontFamily: fonts.brand,
    transition: 'all 0.2s ease',
    padding: spacing.medium,
    display: 'block',
    borderWidth: '1px',
    borderStyle: 'solid',
    placeholderOpacity: '0.5',
    showPasswordPadding: `${spacing.medium} ${spacing.extraLarge} ${spacing.medium} ${spacing.medium}`,
  }))
  .addVariant('small', ({ spacing }) => ({ fontSize: '12px', padding: spacing.small }))
  .createSelector();

const StyledInput = theme.connect(styled.input`
  ${spreadStyles(select)}
  color: ${select('colors.default')};
  background: ${select('backgrounds.default')};
  opacity: ${select('opacities.default')};
  border-color: ${select('borderColors.default')};

  outline: none;
  width: 100%;

  &:focus {
    box-shadow: inset 0 -5px 0 ${select('effectColors.valid')};
    border-color: ${select('borderColors.focus')};
  }

  &:disabled {
    background: ${select('backgrounds.disabled')};
    border-color: ${select('borderColors.disabled')};
    opacity: ${select('opacities.disabled')};
    color: ${select('colors.disabled')};
  }

  &::placeholder {
    opacity: ${select('placeholderOpacity')};
  }

  ${({ visited, theme }) => visited ?
    css`
      &:invalid {
        box-shadow: inset 0 -5px 0 ${select('effectColors.invalid')};
        border-color: ${select('borderColors.invalid')};
      }
    ` : ''
  }

  ${({ invalid, error, theme }) => invalid || error ?
    `
    box-shadow: inset 0 -5px ${select('effectColors.invalid')};
    border-color: ${select('borderColors.invalid')};
    ` :
    ''
  }
`);

const RevealPasswordContainer = styled.div`
  position: relative;
  width: 100%;

  div {
    position: absolute;
    right: 10px;
    top: 25%;
    z-index: 10;
  }

  input[type="password"],
  input[type="text"] {
    padding: ${select('showPasswordPadding')} !important;
  }

`

class Input extends React.Component {
  static propTypes = {
    /**
     * The value of the input.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Handler for the onchange event.
     */
    onChange: PropTypes.func,
    /**
     * Handler for the onblur event.
     */
    onBlur: PropTypes.func,
    /**
     * Handler for the onfocus event.
     */
    onFocus: PropTypes.func,
    /**
       * Handler for the onkeydown event.
       */
    onKeyDown: PropTypes.func,
    /**
     * Controls whether the user can change this element.
     */
    disabled: PropTypes.bool,
    /**
     * Controls whether the element is marked as required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Sets the type of data expected for this input.
     */
    type: PropTypes.oneOf([
      'search', 'email', 'url', 'tel', 'number', 'range', 'date',
      'month', 'week', 'time', 'datetime', 'datetime-local', 'color',
      'password'
    ]),
    /**
     * Styles this input as being invalid
     */
    invalid: PropTypes.bool,
    /**
     * Styles this input as having an error related to it
     */
    error: PropTypes.bool,
    /**
     * Placeholder text to display when the input is blank
     */
    placeholder: PropTypes.string,
    /**
     * Disables the ability to show a password
     */
    disableShowPassword: PropTypes.bool,

  };

  componentDidMount () {
    this.setState({
      _type: this.props.type
    })
  }

  static defaultProps = {
    disabled: false,
    required: false,
    id: null,
    type: 'text',
    onChange: () => null,
    onBlur: () => null,
    onFocus: () => null,
    onKeyDown: () => null,
    className: null,
    invalid: false,
    error: false,
    placeholder: '',
    disableShowPassword: false
  };

  constructor(props) {
    super(props);
    this.state = { visited: false };
  }

  onBlur = (event) => {
    this.setState({ visited: true });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  renderPasswordField = () => {
    const toggleState = () => this.state._type === 'password' ? 'text' : 'password';
    const handleClick = (evt) => {
      evt.preventDefault();
      this.setState({
        _type: toggleState(this.state._type)
      });
    }

    return (
      <RevealPasswordContainer>
          <div>
            <Anchor href="" onClick={handleClick}>
              {this.state._type === 'password' ? 'Show' : 'Hide'}
            </Anchor>
          </div>
          {this.renderInputField()}
      </RevealPasswordContainer>
    )
  }

  renderInputField = () => {

    const {
      disabled,
      id,
      className,
      invalid,
      onFocus,
      onChange,
      onKeyDown,
      value,
      required,
      error,
      placeholder,
    } = this.props;

    const { visited, _type:type } = this.state;

    return (
      <StyledInput
          onBlur={this.onBlur}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          visited={visited}
          id={id}
          className={className}
          invalid={invalid}
          onChange={onChange}
          value={value}
          required={required}
          type={type}
          error={error}
          disabled={disabled}
          placeholder={placeholder}
        />
        )
  }


  render() {

    const { type, disableShowPassword } = this.props;

    if ( type === 'password' && !disableShowPassword) {
      return this.renderPasswordField();
    }

    return this.renderInputField();
  }
}

Input.Small = theme.variant('small')(Input);

export default Input;
