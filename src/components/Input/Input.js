import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Anchor from '../Anchor';

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.02em;
  line-height: ${({ theme }) => theme.input.lineHeight};
  font-size: ${({ theme }) => theme.input.fontSize};
  font-family: ${({ theme }) => theme.input.fontFamily};
  transition: all 0.2s ease;
  outline: none;
  width: 100%;
  padding: ${({ theme }) => theme.padding.medium};
  display: block;
  border: ${({ theme }) => theme.input.border};


  &:focus {
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.colors.primaryLight};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
  &:focus + div {
    opacity: 1;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.disabled};
    border: 1px solid ${({ theme }) => theme.colors.border};
    opacity: 0.5;
  }

  &::placeholder {
    opacity: 0.5;
  }

  ${({ visited, theme }) => visited ?
    css`
      &:invalid {
        box-shadow: inset 0 -5px 0 ${theme.colors.errorBackgroundLight};
        border: 1px solid ${theme.colors.errorBorder};
      }
    ` : ''
  }

  ${({ invalid, error, theme }) => invalid || error ?
    `
    box-shadow: inset 0 -5px ${theme.colors.errorBackgroundLight};
    border: 1px solid ${theme.colors.errorBorder};
    ` :
    ''
  }
`;

const RevealPasswordContainer = styled.div`
  position: relative;

  div {
    position: absolute;
    right: 10px; 
    top: 25%;
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

export default Input;
