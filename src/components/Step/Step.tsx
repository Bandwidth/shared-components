import * as React from 'react';
import * as styles from './styles';
import StepGroup from './StepGroup';

interface StepPropTypes {
  /**
   * Content of the step
   */
  children: React.ReactNode;
  /**
   * Step number
   */
  number: number;
  /**
   * Whether the step has been completed
   */
  complete: boolean;
  /**
   * Override the component that renders the step outer container
   */
  Container: any;
  /**
   * Override the component that renders the step number. Will receive `complete` and `number` props.
   */
  Number: any;
  /**
   * Override the component that renders the content of the step
   */
  Content: any;
}

/**
 * Step represents a step of a process. Simply create `<Step>` components inside a container `<Step.Group>` and numbers will
 * automatically be assigned. Assign `complete` state yourself as items are done.
 */
export default class Step extends React.Component<StepPropTypes> {
  static Group = StepGroup;

  static defaultProps = {
    complete: false,
    Container: styles.Container,
    Number: styles.Number,
    Content: styles.Content,
  };

  static styles = styles;

  render() {
    const {
      children,
      number,
      complete,
      Content,
      Container,
      Number,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <Number complete={complete} number={number} />
        <Content>{children}</Content>
      </Container>
    );
  }
}
