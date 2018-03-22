import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import RadioGroupButtonContainer from './styles/RadioGroupButtonContainer';
import RadioGroupButtonContent from './styles/RadioGroupButtonContent';
import RadioGroupButtonInput from './styles/RadioGroupButtonInput';
import RadioGroupButtonLabel from './styles/RadioGroupButtonLabel';
import RadioGroupButtonLabelText from './styles/RadioGroupButtonLabelText';

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
     * If true, user cannot interact with this button.
     */
    disabled: PropTypes.bool,
    /**
     * Adds a class name to the input element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the input element.
     */
    id: PropTypes.string,
    /**
     * A component to render the container around the button
     */
    Container: PropTypes.func,
    /**
     * A component to render the content inside the button (not the label)
     */
    Content: PropTypes.func,
    /**
     * A component to render the input for the button (usually hidden)
     */
    Input: PropTypes.func,
    /**
     * A component to render the label inside the button
     */
    Label: PropTypes.func,
    /**
     * A component to render the text inside the label
     */
    LabelText: PropTypes.func,
  };

  static defaultProps = {
    content: null,
    className: null,
    id: null,
    disabled: false,
    Container: RadioGroupButtonContainer,
    Content: RadioGroupButtonContent,
    Input: RadioGroupButtonInput,
    Label: RadioGroupButtonLabel,
    LabelText: RadioGroupButtonLabelText,
  };

  render() {
    const {
      checked,
      label,
      name,
      value,
      disabled,
      onChange,
      content,
      className,
      Container,
      Content,
      Input,
      Label,
      LabelText,
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
          disabled={disabled}
        />
        <Label htmlFor={id} active={checked} disabled={disabled}>
          <LabelText>{label}</LabelText>
          {content !== null ? (
            <Content active={checked}>{content}</Content>
          ) : null}
        </Label>
      </Container>
    );
  }
}

RadioButton.Small = withProps({
  Label: RadioGroupButtonLabel.Small,
})(RadioButton);
RadioButton.Large = withProps({
  Label: RadioGroupButtonLabel.Large,
})(RadioButton);

export default RadioButton;
