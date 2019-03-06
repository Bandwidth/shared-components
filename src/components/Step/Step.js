import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import StepGroup from './StepGroup';

/**
 * Step represents a step of a process. Simply create `<Step>` components inside a container `<Step.Group>` and numbers will
 * automatically be assigned. Assign `complete` state yourself as items are done.
 */
export default class Step extends React.Component {
  static Group = StepGroup;

  static propTypes = {
    /**
     * Content of the step
     */
    children: PropTypes.node,
    /**
     * Step number
     */
    number: PropTypes.number,
    /**
     * Whether the step has been completed
     */
    complete: PropTypes.bool,

    /**
     * Override the component that renders the step outer container
     */
    Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * Override the component that renders the step number. Will receive `complete` and `number` props.
     */
    Number: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * Override the component that renders the content of the step
     */
    Content: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

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
