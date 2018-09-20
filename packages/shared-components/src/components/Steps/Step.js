import React from 'react';
import PropTypes from 'prop-types';
import StepContainer from './styles/StepContainer';
import StepNumber from './styles/StepNumber';
import StepContent from './styles/StepContent';

export default class Step extends React.Component {
  static propTypes = {
    /**
     * Content of the step
     */
    children: PropTypes.node.isRequired,
    /**
     * Step number
     */
    number: PropTypes.number.isRequired,
    /**
     * Whether the step has been completed
     */
    complete: PropTypes.bool,

    /**
     * Override the component that renders the step outer container
     */
    Container: PropTypes.func,
    /**
     * Override the component that renders the step number. Will receive `complete` and `number` props.
     */
    Number: PropTypes.func,
    /**
     * Override the component that renders the content of the step
     */
    Content: PropTypes.func,
  };

  static defaultProps = {
    complete: false,
    Container: StepContainer,
    Number: StepNumber,
    Content: StepContent,
  };

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
