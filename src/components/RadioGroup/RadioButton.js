import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('RadioGroupButton', ({ colors }) => ({
    cornerRadius: '3px',
    colors: {
      default: colors.text.default,
      selected: colors.primary.default,
      hover: colors.text.default,
    },
    borderColors: {
      default: colors.gray.border,
      hover: colors.primary.default,
      selected: colors.primary.default,
      hover: colors.primary.default,
      selectedHover: colors.gray.borderLight,
    },
    opacities: {
      default: 0.5,
      selected: 1,
    },
    padding: '1em 1.4em',
    background: colors.background.default,
    effectColor: colors.primary.default,
    effectHeight: '5px',
    borderWidth: '1px',
    fontSize: '1em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }))
  .addVariant('small', {
    fontSize: '0.8em',
    padding: '0.8em 1em',
    effectHeight: '2px',
  })
  .createSelector();

const Container = theme.connect(styled.div`
  flex: 1 1 auto;
  position: relative;

  &:first-of-type > label {
    border-radius: ${select('cornerRadius')} 0 0 ${select('cornerRadius')};
  }

  &:first-of-type > label::after {
    border-radius: 0 0 0 ${select('cornerRadius')};
  }

  &:last-of-type > label {
    border-radius: 0 ${select('cornerRadius')} ${select('cornerRadius')} 0;
  }

  &:last-of-type > label::after {
    border-radius: 0 0 ${select('cornerRadius')} 0;
  }
`);

const Input = theme.connect(styled.input`
  display: block;
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;
  border: none;
  position: absolute;
  opacity: 0;

  &:hover + label {
    border-color: ${select('borderColors.hover')};
    &::after {
      height: ${select('effectHeight')};
      opacity: ${select('opacities.default')};
    }
  }

  &:focus + label {
    border-color: ${select('borderColors.focus')};
  }

  &:checked:hover + label {
    border-color: ${select('borderColors.selected')};
  }

  &:checked + label {
    opacity: ${select('opacities.selected')};
    &::after {
      height: ${select('effectHeight')};
    }
  }
`);

const Label = theme.connect(styled.label`
  opacity: ${select('opacities.default')};
  border-width: ${select('borderWidth')};
  border-style: solid;
  border-color: ${select('borderColors.default')};
  margin-right: -1px;
  padding: ${select('padding')};
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  background: ${select('background')};
  color: ${select('colors.default')};
  transition: opacity 0.2s ease;
  text-transform: ${select('textTransform')};
  font-weight: ${select('fontWeight')};
  font-size: ${select('fontSize')};
  height: 100%;

  &::after {
    content: "";
    background: ${select('effectColor')};
    width: calc(100% + 2px);
    height: 0;
    position: absolute;
    bottom: -1px;
    left: -1px;
    display: block;
    transition: height 0.2s ease, opacity 0.2s ease;
  }
`);

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

class RadioButton extends React.Component {
  static propTypes = {
    /**
     * Whether or not the button is currently selected.
     * Use undefined to make this an 'uncontrolled' component
     */
    checked: PropTypes.bool,
    /**
     * Called when the checked state of the button changes.
     */
    onChange: PropTypes.func,
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
    const { checked, label, name, value, onChange, content, className } = this.props;
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
          {content !== null ? <Content active={checked}>{content}</Content> : null}
          <LabelText>{label}</LabelText>
        </Label>
      </Container>
    );
  }
}

RadioButton.Small = theme.variant('small')(RadioButton);

export default RadioButton;
