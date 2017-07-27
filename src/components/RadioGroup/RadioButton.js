import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const Container = styled.div`
  flex: 1 1 auto;
  position: relative;

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
  display: block;
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;
  border: none;
  position: absolute;
  opacity: 0;

  &:focus + label {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Label = styled.label`
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  border: ${({ theme }) => theme.radioButton.border};
  margin-right: -1px;
  padding: ${({ theme }) => theme.radioButton.padding};
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  background: ${({ theme }) => theme.radioButton.bg};
  color: ${({ theme }) => theme.radioButton.fg};
  transition: opacity 0.2s ease;
  text-transform: uppercase;
  font-weight: bold;
  height: 100%;

  &::after {
    content: "";
    background: ${({ theme }) => theme.radioButton.accent};
    width: calc(100% + 2px);
    height: ${({ active }) => (active ? '5px' : 0)};
    position: absolute;
    bottom: -1px;
    left: -1px;
    display: block;
    transition: height 0.2s ease, opacity 0.2s ease;
  }

  &:hover::after {
    height: 5px;
    opacity: ${({ active }) => (active ? 1 : 0.5)};
  }

  &:hover {
    border-color: ${({ active, theme }) =>
      active ? theme.colors.borderLight : theme.colors.primary};
  }
`;

const Content = styled.figure`
  font-size: 2em;
  font-weight: 100;
  margin: auto auto auto 0;
`;

const LabelText = styled.span`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  margin: auto auto auto 0;
`;

export class RadioButton extends React.Component {
  static propTypes = {
    /**
     * Whether or not the button is currently selected.
     */
    checked: PropTypes.bool.isRequired,
    /**
     * Called when the checked state of the button changes.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Text to render inside the button's label.
     */
    label: PropTypes.string.isRequired,
    /**
     * Content to render inside the main part of the button.
     */
    content: PropTypes.node,
    /**
     * A field name for the input.
     */
    name: PropTypes.string.isRequired,
    /**
     * The input value.
     */
    value: PropTypes.string.isRequired,
    /**
     * Adds a class name to the input element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the input element.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    content: null,
    className: null,
    id: null,
  };

  render() {
    const {
      checked,
      label,
      name,
      value,
      onChange,
      content,
      className,
    } = this.props;
    const id = this.props.id || `radio-${name}>${value}`;

    return (
      <Container>
        <Input
          type="radio"
          id={id}
          value={value}
          name={name}
          checked={checked}
          onChange={onChange}
          className={className}
        />
        <Label htmlFor={id} active={checked}>
          {content !== null
            ? <Content active={checked}>
                {content}
              </Content>
            : null}
          <LabelText>
            {label}
          </LabelText>
        </Label>
      </Container>
    );
  }
}

export default sharedComponent({ Container, Input, Label, Content, LabelText })(RadioButton);
