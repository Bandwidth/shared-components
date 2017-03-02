import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  &:first-of-type > label {
    border-radius: 3px 0 0 3px;
  }

  &:first-of-type > label::after {
    border-radius: 0 0 0 3px;
  }

  &:last-of-type > label {
    border-radius: 0 3px 3px 0;
  }

  &:last-of-type > label::after {
    border-radius: 0 0 3px 0;
  }
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  opacity: ${({ active }) => active ? 1 : 0.5};
  border: ${({ theme }) => theme.radioButton.border};
  margin-right: -1px;
  padding: ${({ theme }) => theme.radioButton.padding};
  cursor: pointer;
  position: relative;
  display: block;
  background: ${({ theme }) => theme.radioButton.bg};
  color: ${({ theme }) => theme.radioButton.fg};
  transition: opacity 0.2s ease;
  text-transform: uppercase;
  font-weight: bold;

  &::after {
    content: "";
    background: ${({ theme }) => theme.radioButton.accent};
    width: calc(100% + 2px);
    height: ${({ active }) => active ? '5px' : 0};
    position: absolute;
    bottom: -1px;
    left: -1px;
    display: block;
    transition: height 0.2s ease, opacity 0.2s ease;
  }

  &:hover::after {
    height: 5px;
    opacity: 0.5;
  }
`;

export default class RadioButton extends React.Component {
  static propTypes = {
    checked: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
  }

  render() {
    const { checked, label, name, value, onChange } = this.props;
    const id = `radio-${name}>${value}`;

    return (
      <Container>
        <Input type="radio" id={id} value={value} name={name} checked={checked} onChange={onChange} />
        <Label htmlFor={id} active={checked}>{label}</Label>
      </Container>
    );
  }
}
