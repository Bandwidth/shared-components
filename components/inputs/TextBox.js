import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';

const Input = styled.input`
  color: inherit;
  letter-spacing: 0.02em;
  line-height: ${({ theme }) => theme.input.lineHeight};
  font-size: ${({ theme }) => theme.input.fontSize};
  transition: all 0.2s ease;
  outline: none;
  width: 100%;
  padding: ${({ theme }) => theme.input.padding};
  display: block;
  border: ${({ theme }) => theme.input.border};

  &:focus {
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.input.accentValid};
    border: ${({ theme }) => theme.input.focusedBorder};
  }
  &:focus + div {
    opacity: 1;
  }
`;

export default class TextBox extends React.Component {
  static propTypes = {
    input: React.PropTypes.shape({
      value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
      onChange: React.PropTypes.func,
    }).isRequired,
    disabled: React.PropTypes.bool,
    required: React.PropTypes.bool,
    id: React.PropTypes.string,
    type: React.PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    id: null,
    type: 'text',
  };

  render() {
    const { input, disabled, required, id, type } = this.props;
    return (
      <InputBox disabled={disabled}>
        <Input {...input} id={id} disabled={disabled} required={required} type={type} />
      </InputBox>
    );
  }
}