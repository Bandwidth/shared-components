import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputBox from './InputBox';

const Input = styled.input`
  color: inherit;
  letter-spacing: 0.02em;
  line-height: ${({ theme }) => theme.input.lineHeight};
  font-size: ${({ theme }) => theme.input.fontSize};
  font-family: ${({ theme }) => theme.input.fontFamily};
  transition: all 0.2s ease;
  outline: none;
  width: 100%;
  padding: ${({ theme }) => theme.input.padding};
  display: block;
  border: ${({ theme }) => theme.input.border};

  &:focus {
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.colors.primaryLight};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
  &:focus + div {
    opacity: 1;
  }

  &:invalid {
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.colors.errorBackgroundLight};
  }
`;

class TextInput extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
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
  };

  render() {
    const { disabled } = this.props;
    return (
      <InputBox disabled={disabled}>
        <Input {...this.props} />
      </InputBox>
    );
  }
}

TextInput.usage = `
# TextInput

A TextInput without the label or help text.
`;

export default TextInput;
