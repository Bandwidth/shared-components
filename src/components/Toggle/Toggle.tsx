import * as React from 'react';
import generateId from 'extensions/generateId';
import * as styles from './styles';
import Skeleton from 'skeletons/Skeleton';

interface ToggleProps {
  /**
   * A description to display next to the toggle.
   */
  description: React.ReactNode;
  /**
   * A component to render the container around the toggle and label
   */
  Container: any;
  /**
   * A component to render the input element, usually hidden
   */
  Input: any;
  /**
   * A component to render the label, which usually also renders the toggle itself
   */
  Label: any;
}

/**
 * A simple `Toggle` component thta can be turned on and off. Use `checked` to set
 * whether the `Toggle` is selected.
 */
class Toggle extends React.PureComponent<
  React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> &
    ToggleProps
> {
  static defaultProps = {
    description: null,
    onChange: () => null,
    Container: styles.Container,
    Input: styles.Input,
    Label: styles.Label,
  };

  static styles = styles;

  static Skeleton = props => (
    <Toggle
      Input={() => <Skeleton width="58px" height="30px" />}
      Label={() => (
        <Skeleton style={{ marginLeft: '15px' }} width="150px" height="30px" />
      )}
      {...props}
    />
  );

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

export default Toggle;
