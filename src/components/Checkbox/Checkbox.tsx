import * as React from 'react';
import generateId from 'extensions/generateId';
import * as styles from './styles';

export interface CheckboxProps {
  /**
   * Whether the checkbox is checked or not.
   */
  checked?: boolean;
  /**
   * A description to display next to the checkbox.
   */
  description?: React.ReactNode;
  /**
   * A component to render an input, by default hidden.
   */
  Input?: any;
  /**
   * A component to render a label. By default this component renders the checkbox itself as a pseudoelement pair.
   */
  Label?: any;
  /**
   * A component to render the wrapping element of the assembled checkbox/label
   */
  Container?: any;
}

/**
 * A simple checkbox input.
 */
export default class Checkbox extends React.PureComponent<
  React.ClassAttributes<HTMLInputElement> &
    React.ButtonHTMLAttributes<HTMLInputElement> &
    CheckboxProps
> {
  static defaultProps = {
    checked: undefined,
    description: null,
    onChange: () => null,
    Input: styles.Input,
    Label: styles.Label,
    Container: styles.Container,
  };

  static styles = styles;

  defaultId = generateId('checkbox');

  render() {
    const {
      id,
      description,
      Container,
      Input,
      Label,
      checked,
      ...rest
    } = this.props;

    const finalId = id || this.defaultId;

    return (
      <Container>
        <Input id={finalId} type="checkbox" checked={checked} {...rest} />
        <Label htmlFor={finalId} active={!!checked}>
          {description}
        </Label>
      </Container>
    );
  }
}
