import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1 1 auto;

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

const Content = styled.figure`
  font-size: 2em;
  font-weight: 100;
  margin: 0;
`;

class RadioButton extends React.Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    content: PropTypes.node,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    content: null,
  };

  render() {
    const { checked, label, name, value, onChange, content } = this.props;
    const id = `radio-${name}>${value}`;

    return (
      <Container>
        <Input type="radio" id={id} value={value} name={name} checked={checked} onChange={onChange} />
        <Label htmlFor={id} active={checked}>
          {content !== null ? <Content active={checked}>{content}</Content> : null}
          {label}
        </Label>
      </Container>
    );
  }
}

RadioButton.usage = `
# RadioButton

Not really meant to be used alone, unless you just want the styling of it. Use RadioGroup to create a group of RadioButtons.
`;

export default RadioButton;