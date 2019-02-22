import * as React from 'react';
import generateId from 'extensions/generateId';
import * as styles from './styles';

interface RadioProps {
  /**
   * A description to display next to the radio.
   */
  description: React.ReactNode;
  /**
   * A component for rendering a container around the input and label
   */
  Container: any;
  /**
   * A component for rendering the input (usually hidden)
   */
  Input: any;
  /**
   * A component for rendering the label. By default this also renders the radio button itself.
   */
  Label: any;
}

/**
 * A basic `<input type="radio">` component. Group buttons together by setting the `name` prop for them to the same value.
 */
class Radio extends React.PureComponent<
  React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> &
    RadioProps
> {
  static defaultProps = {
    className: null,
    id: null,
    checked: false,
    required: false,
    disabled: false,
    description: null,
    onChange: () => null,
    Container: styles.Container,
    Input: styles.Input,
    Label: styles.Label,
  };

  static styles = styles;
  static Input = styles.Input;
  static Label = styles.Label;
  static Container = styles.Container;

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

export default Radio;
