import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Anchor from '../Anchor';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Input', ({ colors, fonts, spacing, shadows }) => ({
    color: colors.black,
    background: colors.white,
    letterSpacing: '0.02em',
    lineHeight: '1.5',
    fontSize: '14px',
    fontFamily: fonts.brand,
    transition: 'all 0.2s ease',
    padding: spacing.medium,
    display: 'block',
    borderColor: colors.borderLight,
    borderWidth: '1px',
    borderStyle: 'solid',
    focusBorderColor: colors.border,
    validEffectColor: colors.primaryLight,
    invalidEffectColor: colors.errorBackgroundLight,
    invalidBorderColor: colors.errorBorder,
    disabledBackground: colors.disabled,
    disabledBorderColor: colors.border,
    disabledColor: colors.black,
    disabledOpacity: '0.5',
    placeholderOpacity: '0.5',
  }))
  .addVariant('small', ({ spacing }) => ({ fontSize: '12px', padding: spacing.small }))
  .createSelector();

const StyledInput = theme.connect(styled.input`
  ${spreadStyles(select)}

  outline: none;
  width: 100%;


  &:focus {
    box-shadow: inset 0 -5px 0 ${select('validEffectColor')};
    border: 1px solid ${select('focusBorderColor')};
  }

  &:disabled {
    background: ${select('disabledBackground')};
    border-color: ${select('disabledBorderColor')};
    opacity: ${select('disabledOpacity')};
    color: ${select('disabledColor')};
  }

  &::placeholder {
    opacity: ${select('placeholderOpacity')};
  }

  ${({ visited, theme }) => visited ?
    css`
      &:invalid {
        box-shadow: inset 0 -5px 0 ${select('invalidEffectColor')};
        border-color: ${select('invalidBorderColor')};
      }
    ` : ''
  }

  ${({ invalid, error, theme }) => invalid || error ?
    `
    box-shadow: inset 0 -5px ${select('invalidEffectColor')};
    border-color: ${select('invalidBorderColor')};
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
    padding-right: ${({theme}) => theme.padding.extraLarge} !important;
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
