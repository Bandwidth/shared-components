import React from 'react';
import PropTypes from 'prop-types';
import generateId from '../../extensions/generateId';
import CheckboxInput from './styles/CheckboxInput';
import CheckboxLabel from './styles/CheckboxLabel';
import CheckboxContainer from './styles/CheckboxContainer';

export default class Checkbox extends React.Component {
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
     * A component to render an input, by default hidden.
     */
    Input: PropTypes.func,
    /**
     * A component to render a label. By default this component renders the checkbox itself as a pseudoelement pair.
     */
    Label: PropTypes.func,
    /**
     * A component to render the wrapping element of the assembled checkbox/label
     */
    Container: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    id: null,
    value: false,
    required: false,
    disabled: false,
    description: null,
    onChange: () => null,
    Input: CheckboxInput,
    Label: CheckboxLabel,
    Container: CheckboxContainer,
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
        <Label htmlFor={id} active={!!value}>
          {description}
        </Label>
      </Container>
    );
  }
}
