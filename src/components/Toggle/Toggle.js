import React from 'react';
import PropTypes from 'prop-types';
import generateId from 'extensions/generateId';
import Blob from 'skeletons/Blob';
import * as styles from './styles';

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
     * The literal value this toggle represents. For example, if this toggle
     * represents whether the app is in "Dark Mode", you might provide "darkMode"
     * to this prop to represent that value key.
     */
    value: PropTypes.string,
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
    value: undefined,
    checked: undefined,
    name: null,
    required: false,
    disabled: false,
    description: null,
    onChange: () => null,
    Container: styles.Container,
    Input: styles.Input,
    Label: styles.Label,
  };

  static styles = styles;

  defaultId = generateId('toggle');

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
      id,
      value,
      checked,
      ...rest
    } = this.props;
    const finalId = id || this.defaultId;
    return (
      <Container>
        <Input
          id={finalId}
          className={className}
          name={name}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          value={value}
          required={required}
          onChange={onChange}
          {...rest}
        />
        <Label htmlFor={finalId}>{description}</Label>
      </Container>
    );
  }
}

Toggle.Skeleton = props => (
  <Toggle
    Input={() => <Blob width="58px" height="30px" />}
    Label={() => (
      <Blob style={{ marginLeft: '15px' }} width="150px" height="30px" />
    )}
    {...props}
  />
);

export default Toggle;
