import * as React from 'react';
import * as styles from './styles';

interface StepGroupPropTypes {
  /**
   * Children must be an array of Step components
   */
  children: React.ReactNode;
  /**
   * Override the component that renders the list container
   */
  List: any;
}

/**
 * `Step.Group` automatically assigns numbers to its Step children.
 *
 * @visibleName Step.Group
 */
export default class StepGroup extends React.Component<StepGroupPropTypes> {
  static defaultProps = { List: styles.List };

  static styles = styles;

  renderSteps = () =>
    React.Children.map(this.props.children, (step, index) =>
      React.cloneElement(step as React.ReactElement<any>, {
        number: index + 1,
      }),
    );

  render() {
    const { List, ...rest } = this.props;

    return <List {...rest}>{this.renderSteps()}</List>;
  }
}
