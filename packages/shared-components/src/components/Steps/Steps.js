import React from 'react';
import PropTypes from 'prop-types';
import Step from './Step';
import StepList from './styles/StepList';

export default class Steps extends React.Component {
  static propTypes = {
    /**
     * Children must be an array of Step components
     */
    children: PropTypes.node.isRequired,
    /**
     * Override the component that renders the list container
     */
    List: PropTypes.func,
  };

  static defaultProps = {
    List: StepList,
  };

  renderSteps = () =>
    React.Children.map(this.props.children, (step, index) =>
      React.cloneElement(step, { number: index + 1 }),
    );

  render() {
    const { List } = this.props;

    return <List>{this.renderSteps()}</List>;
  }
}

Steps.Step = Step;
