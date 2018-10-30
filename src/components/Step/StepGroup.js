import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

/**
 * `Step.Group` automatically assigns numbers to its Step children.
 *
 * @visibleName Step.Group
 */
export default class StepGroup extends React.Component {
  static propTypes = {
    /**
     * Children must be an array of Step components
     */
    children: PropTypes.node.isRequired,
    /**
     * Override the component that renders the list container
     */
    List: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = { List: styles.List };

  static styles = styles;

  renderSteps = () =>
    React.Children.map(this.props.children, (step, index) =>
      React.cloneElement(step, {
        number: index + 1,
      }),
    );

  render() {
    const { List, ...rest } = this.props;

    return <List {...rest}>{this.renderSteps()}</List>;
  }
}
