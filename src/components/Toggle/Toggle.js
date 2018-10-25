import React from 'react';
import PropTypes from 'prop-types';
import generateId from '../../extensions/generateId';
import ToggleContainer from './styles/ToggleContainer';
import ToggleInput from './styles/ToggleInput';
import ToggleLabel from './styles/ToggleLabel';

/**
 * A simple `Toggle` component thta can be turned on and off. Use `checked` to set
 * whether the `Toggle` is selected.
 */
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
     * The value of the toggle. DEPRECATION WARNING: this prop
     * used to be used for the 'checked' boolean state. You should use
     * `checked` for that instead.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * Whether the toggle is 'on' or 'off'.
     */
    checked: PropTypes.bool,
    /**
     * Whether the toggle is required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Whether the user is prevented from interacting with the toggle.
     */
    disabled: PropTypes.bool,
    /**
     * Adds a name to the underlying input.
     */
    name: PropTypes.string,
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
    Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the input element, usually hidden
     */
    Input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the label, which usually also renders the toggle itself
     */
    Label: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    className: null,
    id: null,
    value: false,
    name: null,
    required: false,
    disabled: false,
    description: null,
    onChange: () => null,
    Container: ToggleContainer,
    Input: ToggleInput,
    Label: ToggleLabel,
  };

  defaultId = generateId('toggle');

  computeChecked = () => {
    const { value, checked } = this.props;

    if (typeof checked === 'boolean') {
      return checked;
    }

    if (typeof value === 'boolean') {
      return value;
    }

    return undefined;
  };

  computeValue = () => {
    const { value, checked } = this.props;
    // assume user is using value correctly if checked is defined
    // or if value isn't boolean
    if (checked !== undefined || typeof value !== 'boolean') {
      return value;
    }

    return undefined;
  };

  render() {
    const {
      className,
      disabled,
      required,
      name,
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
          name={name}
          type="checkbox"
          disabled={disabled}
          checked={this.computeChecked()}
          value={this.computeValue()}
          required={required}
          onChange={onChange}
        />
        <Label htmlFor={id}>{description}</Label>
      </Container>
    );
  }
}

export default Toggle;
