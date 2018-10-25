import React from 'react';
import PropTypes from 'prop-types';
import generateId from 'extensions/generateId';
import { RadioContainer, RadioInput, RadioLabel } from './styles';

/**
 * A basic `<input type="radio">` component. Group buttons together by setting the `name` prop for them to the same value.
 */
class Radio extends React.PureComponent {
  static propTypes = {
    /**
     * Adds a class name to the input element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the input element.
     */
    id: PropTypes.string,
    /**
     * The value of the radio; a string that describes what the value should be if checked=true
     */
    value: PropTypes.string.isRequired,
    /**
     * Whether the radio is checked
     */
    checked: PropTypes.bool,
    /**
     * Name ties groups of radio buttons together
     */
    name: PropTypes.string.isRequired,
    /**
     * Whether the radio is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Whether the user is prevented from interacting with the radio.
     */
    disabled: PropTypes.bool,
    /**
     * A description to display next to the radio.
     */
    description: PropTypes.node,
    /**
     * Callback for the onChange event of the input.
     */
    onChange: PropTypes.func,
    /**
     * A component for rendering a container around the input and label
     */
    Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component for rendering the input (usually hidden)
     */
    Input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component for rendering the label. By default this also renders the radio button itself.
     */
    Label: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    className: null,
    id: null,
    checked: false,
    required: false,
    disabled: false,
    description: null,
    onChange: () => null,
    Container: RadioContainer,
    Input: RadioInput,
    Label: RadioLabel,
  };

  defaultId = generateId('radio');

  render() {
    const {
      id,
      disabled,
      checked,
      required,
      description,
      Container,
      Input,
      Label,
      ...rest
    } = this.props;

    const finalId = id || this.defaultId;

    return (
      <Container>
        <Input
          id={finalId}
          type="radio"
          disabled={!!disabled}
          checked={!!checked}
          required={!!required}
          {...rest}
        />
        <Label
          htmlFor={finalId}
          checked={!!checked}
          disabled={!!disabled}
          required={!!required}
        >
          {description}
        </Label>
      </Container>
    );
  }
}

Radio.Input = RadioInput;
Radio.Label = RadioLabel;
Radio.Container = RadioContainer;

export default Radio;
