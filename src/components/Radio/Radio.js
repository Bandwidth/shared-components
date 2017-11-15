import React from 'react';
import PropTypes from 'prop-types';
import generateId from '../../extensions/generateId';
import RadioContainer from './styles/RadioContainer';
import RadioInput from './styles/RadioInput';
import RadioLabel from './styles/RadioLabel';

class Radio extends React.Component {
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
     * The value of the checkbox.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * Whether the checkbox is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Whether the user is prevented from interacting with the checkbox.
     */
    disabled: PropTypes.bool,
    /**
     * A description to display next to the checkbox.
     */
    description: PropTypes.node,
    /**
     * Callback for the onChange event of the input.
     */
    onChange: PropTypes.func,
    /**
     * A component for rendering a container around the input and label
     */
    Container: PropTypes.func,
    /**
     * A component for rendering the input (usually hidden)
     */
    Input: PropTypes.func,
    /**
     * A component for rendering the label. By default this also renders the radio button itself.
     */
    Label: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    id: null,
    value: false,
    required: false,
    disabled: false,
    description: null,
    onChange: () => null,
    Container: RadioContainer,
    Input: RadioInput,
    Label: RadioLabel,
  };

  render() {
    const {
      className,
      disabled,
      value,
      required,
      description,
      onChange,
      Container,
      Input,
      Label,
    } = this.props;
    const id = this.props.id || generateId('toggle');
    return (
      <Container>
        <Input
          id={id}
          className={className}
          type="checkbox"
          disabled={disabled}
          checked={!!value}
          required={required}
          onChange={onChange}
        />
        <Label htmlFor={id} checked={!!value}>
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
