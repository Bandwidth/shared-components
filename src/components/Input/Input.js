import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

  ${({ visited, theme }) => visited ?
    css`
      &:invalid {
        box-shadow: inset 0 -5px 0 ${theme.colors.errorBackgroundLight};
      }
    ` : ''
  }
`;

class Input extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    id: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    id: null,
    type: 'text',
    onChange: () => null,
    onBlur: () => null,
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

  render() {
    const { disabled } = this.props;
    const { visited } = this.state;
    return (
      <StyledInput {...this.props} onBlur={this.onBlur} visited={visited} />
    );
  }
}

Input.usage = `
# Input

A basic styled text input.
`;

export default Input;
