import React, { ChangeEvent } from 'react';
import defaultProps from 'extensions/defaultProps';
import dotNotation from 'extensions/dotNotation';
import * as styles from './styles';

interface RadioButtonProps {
  /**
   * Whether or not the button is currently selected.
   * Use undefined to make this an 'uncontrolled' component
   */
  checked?: boolean;
  /**
   * Called when the checked state of the button changes.
   */
  onChange?: (e: ChangeEvent) => void;
  /**
   * Text to render inside the button's label.
   */
  label: string;
  /**
   * Content to render inside the main part of the button. You can pass
   * a node, string, or a function. If a function is passed, it receives
   * a parameter `{ checked: boolean }` and should return a node.
   */
  children?: React.ReactNode;
  /**
   * A field name for the input.
   */
  name?: string;
  /**
   * The input value.
   */
  value: string;
  /**
   * If true, user cannot interact with this button.
   */
  disabled?: boolean;
  /**
   * Adds a class name to the input element.
   */
  className?: string;
  /**
   * Adds an id to the input element.
   */
  id?: string;
  /**
   * A component to render the container around the button
   */
  Container?: any;
  /**
   * A component to render the content inside the button (not the label)
   */
  Content?: any;
  /**
   * A component to render the input for the button (usually hidden)
   */
  Input?: any;
  /**
   * A component to render the label inside the button
   */
  Label?: any;
  /**
   * A component to render the text inside the label
   */
  LabelText?: any;
}

/**
 * A stylized `<input type="radio">` meant to be used in a group with others. You can either include individual `RadioButton`
 * elements inside a `RadioButton.Group`, or you can use `RadioButton.Options` if you just need to render a simple
 * list of options from an array.
 */
class RadioButton extends React.Component<RadioButtonProps> {
  static defaultProps = {
    content: null,
    disabled: false,
    Container: styles.Container,
    Content: styles.Content,
    Input: styles.Input,
    Label: styles.Label,
    LabelText: styles.LabelText,
  };

  static styles = styles;
  static Small = dotNotation(
    defaultProps({
      Label: (styles.Label as any).Small,
    })(RadioButton),
    { Group: styles.GroupContainer },
  );
  static Large = dotNotation(
    defaultProps({
      Label: (styles.Label as any).Large,
    })(RadioButton),
    { Group: styles.GroupContainer },
  );
  static Group = styles.GroupContainer;

  renderChildren = () => {
    const { children, checked } = this.props;

    if (typeof children === 'function') {
      return children({ checked });
    }

    return children;
  };

  render() {
    const {
      id,
      checked,
      label,
      name,
      value,
      disabled,
      onChange,
      children,
      className,
      Container,
      Content,
      Input,
      Label,
      LabelText,
      ...rest
    } = this.props;

    const finalId = id || `radio-${name}>${value}`;

    return (
      <Container className={disabled && 'disabled'}>
        <Input
          type="radio"
          id={finalId}
          value={value}
          name={name}
          checked={checked}
          onChange={onChange}
          className={className}
          disabled={disabled}
          {...rest}
        />
        <Label htmlFor={finalId} active={checked} disabled={disabled}>
          <LabelText>{label}</LabelText>
          {children && <Content>{this.renderChildren()}</Content>}
        </Label>
      </Container>
    );
  }
}

export default RadioButton;
