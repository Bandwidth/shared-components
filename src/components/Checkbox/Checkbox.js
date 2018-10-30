import React from 'react';
import PropTypes from 'prop-types';
import generateId from 'extensions/generateId';
import * as styles from './styles';
import { defaultProps } from 'recompose';

/**
 * A simple checkbox input.
 */
export default class Checkbox extends React.PureComponent {
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
     * The literal value this checkbox represents. For example, if this checkbox
     * represents whether the app is in "Dark Mode", you might provide "darkMode"
     * to this prop to represent that value key.
     */
    value: PropTypes.string,
    /**
     * Whether the checkbox is checked or not.
     */
    checked: PropTypes.bool,
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
    Input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render a label. By default this component renders the checkbox itself as a pseudoelement pair.
     */
    Label: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the wrapping element of the assembled checkbox/label
     */
    Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    className: null,
    id: null,
    value: undefined,
    checked: undefined,
    required: false,
    disabled: false,
    description: null,
    onChange: () => null,
    Input: styles.Input,
    Label: styles.Label,
    Container: styles.Container,
  };

  static styles = styles;

  static Small = defaultProps({
    Label: styles.Label.Small,
  })(Checkbox);

  defaultId = generateId('checkbox');

  render() {
    const {
      id,
      className,
      disabled,
      name,
      required,
      description,
      onChange,
      Container,
      Input,
      Label,
      value,
      checked,
      ...rest
    } = this.props;

    const finalId = id || this.defaultId;

    return (
      <Container>
        <Input
          name={name}
          id={finalId}
          className={className}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          value={value}
          required={required}
          onChange={onChange}
          {...rest}
        />
        <Label htmlFor={finalId} active={!!checked}>
          {description}
        </Label>
      </Container>
    );
  }
}
