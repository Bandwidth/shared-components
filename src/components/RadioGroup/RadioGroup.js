import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import RadioGroupButton from './RadioButton';
import RadioGroupContainer from './styles/RadioGroupContainer';
import generateId from 'extensions/generateId';

/**
 * @deprecated RadioGroup has been deprecated in favor of using RadioButton directly
 */
class RadioGroup extends React.Component {
  static propTypes = {
    /**
     * An array of choice objects or strings to create buttons from.
     */
    options: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.objectOf(PropTypes.node),
    ]).isRequired,
    /**
     * A field name for this input.
     */
    name: PropTypes.string,
    /**
     * The currently selected value.
     */
    value: PropTypes.string.isRequired,
    /**
     * Called when the input value changes.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Indicates whether the user can change the input.
     */
    disabled: PropTypes.bool,
    /**
     * Indicates whether the value is required for form input.
     */
    required: PropTypes.bool,
    /**
     * Adds a class name to the group container element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the group container element.
     */
    id: PropTypes.string,
    /**
     * A component for rendering a container around the buttons
     */
    Container: PropTypes.func,
    /**
     * A component for rendering a button, defaults RadioGroup.Button
     */
    Button: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    className: null,
    id: null,
    choices: null,
    Container: RadioGroupContainer,
    Button: RadioGroupButton,
    name: undefined,
  };

  getOptions = () => this.props.options || this.props.choices;
  getName = () => this.props.name || generateId('radioGroup');

  optionsToButtons = () => {
    const { value, onChange, disabled, required, Button } = this.props;
    const options = this.getOptions();
    const name = this.getName();
    if (options instanceof Array) {
      return options.map(choice => (
        <Button
          checked={choice === value}
          name={name}
          label={choice}
          value={choice}
          key={choice}
          disabled={disabled}
          required={required}
          onChange={() => onChange(choice)}
        />
      ));
    } else if (typeof options === 'object') {
      return Object.keys(options).map(key => {
        const choice = options[key];

        return (
          <Button
            checked={key === value}
            name={name}
            value={key}
            label={key}
            children={choice}
            key={key}
            disabled={disabled}
            required={required}
            onChange={() => onChange(key)}
          />
        );
      });
    } else {
      return 'invalid options';
    }
  };

  render() {
    const { className, id, Container } = this.props;
    return (
      <Container className={className} id={id}>
        {this.optionsToButtons()}
      </Container>
    );
  }
}

RadioGroup.Vertical = withProps({
  Container: RadioGroupContainer.Vertical,
})(RadioGroup);
RadioGroup.Small = withProps({
  Button: RadioGroupButton.Small,
})(RadioGroup);
RadioGroup.Large = withProps({
  Button: RadioGroupButton.Large,
})(RadioGroup);

RadioGroup.Vertical.Small = RadioGroup.Small.Vertical = withProps({
  Container: RadioGroupContainer.Vertical,
  Button: RadioGroupButton.Small,
})(RadioGroup);
RadioGroup.Vertical.Large = RadioGroup.Large.Vertical = withProps({
  Container: RadioGroupContainer.Vertical,
  Button: RadioGroupButton.Large,
})(RadioGroup);

RadioGroup.Button = RadioGroupButton;

export default RadioGroup;
