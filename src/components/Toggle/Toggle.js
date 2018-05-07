import React from 'react';
import PropTypes from 'prop-types';
import generateId from '../../extensions/generateId';
import ToggleContainer from './styles/ToggleContainer';
import ToggleInput from './styles/ToggleInput';
import ToggleLabel from './styles/ToggleLabel';

class Toggle extends React.PureComponent {
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
     * The value of the toggle.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * Whether the toggle is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Whether the user is prevented from interacting with the toggle.
     */
    disabled: PropTypes.bool,
    /**
     * A description to display next to the toggle.
     */
    description: PropTypes.node,
    /**
     * Callback for the onChange event of the input.
     */
    onChange: PropTypes.func,
    /**
     * A component to render the container around the toggle and label
     */
    Container: PropTypes.func,
    /**
     * A component to render the input element, usually hidden
     */
    Input: PropTypes.func,
    /**
     * A component to render the label, which usually also renders the toggle itself
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
    Container: ToggleContainer,
    Input: ToggleInput,
    Label: ToggleLabel,
  };

  defaultId = generateId('toggle');

  render() {
    const {
      className,
      name,
      disabled,
      value,
      required,
      description,
      onChange,
      Container,
      Input,
      Label,
    } = this.props;
    const id = this.props.id || this.defaultId;
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
        <Label htmlFor={id}>{description}</Label>
      </Container>
    );
  }
}

export default Toggle;
