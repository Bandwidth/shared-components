import React from 'react';
import styled from 'styled-components';
import Label from './Label';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${({ theme }) => theme.textInput.margin};

  &:last-child {
    margin-right: 0;
  }
`;

const Input = styled.input`
  color: inherit;
  letter-spacing: 0.02em;
  line-height: ${({ theme }) => theme.textInput.lineHeight};
  font-size: ${({ theme }) => theme.textInput.fontSize};
  transition: all 0.2s ease;
  outline: none;
  width: 100%;
  padding: ${({ theme }) => theme.textInput.padding};
  display: block;
  border: ${({ theme }) => theme.textInput.border};

  &:focus {
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.textInput.accentValid};
    border: ${({ theme }) => theme.textInput.focusedBorder};
  }
  &:focus + div {
    opacity: 1;
  }
`;

const InputWrapper = styled.div`
  color: ${({ theme }) => theme.textInput.fg};
  background: ${({ theme }) => theme.textInput.bg};
  display: flex;
  flex-direction: row;
  margin: ${({ theme }) => theme.textInput.margin};
  width: 100%;

  ${({ disabled, theme }) =>
    disabled ? `
        color: ${theme.textInput.disabledFG};
        background: ${theme.textInput.disabledBG};
        border: ${theme.textInput.disabledBorder};
      ` : ''
  }
`;

export default class TextInput extends React.Component {
  static propTypes = {
    input: React.PropTypes.shape({
      value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
      onChange: React.PropTypes.func,
    }).isRequired,
    disabled: React.PropTypes.bool,
    label: React.PropTypes.string,
    id: React.PropTypes.string,
    type: React.PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    label: null,
    id: null,
    type: 'text',
  };

  render() {
    const { label, id, disabled, units, type } = this.props;
    return (
      <Container>
        {label ? <Label>{label}</Label> : null}
        <InputWrapper
          disabled={disabled}
        >
          <Input
            {...this.props.input}
            type={type}
            disabled={disabled}
            id={id}
          />
        </InputWrapper>
      </Container>
    );
  }
}
