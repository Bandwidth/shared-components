import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Item from './FlowItem';
import Label from 'components/Label';
import { HORIZONTAL_SPACING } from './constants';
import FlowRowStyles from './styles/FlowRowStyles';

/**
 * A Flow.Row defines a horizontal row of FlowItems. FlowRows belong within a Flow component.
 * Flow will manage their vertical spacing. A Flow.Row manages the horizontal spacing of its children.
 *
 * Flow.Row has several advanced layout options which make it the most versatile part of the Flow toolkit. Be sure to
 * check out the prop documentation and the Flow component documentation for more information on how to use the Flow
 * system.
 *
 * @class FlowRow
 * @extends {React.Component}
 */
class FlowRow extends React.Component {
  static propTypes = {
    /**
     * FlowRow children should be either FlowItems or other FlowRows. You can use nested FlowRows to achieve more
     * powerful layout options.
     */
    children: PropTypes.node.isRequired,
    /**
     * Sizes is an array of numbers which defines the *proportional* size of each child element. By default, FlowRow
     * makes all children the same size, but this prop will let you customize that sizing.
     */
    sizes: PropTypes.array,
    /**
     * Alignment changes the way the row aligns its children. Alignment forces children into automatic sizing and
     * aligns them in whatever direction you specify. Alignment is incompatible with `sizes`.
     */
    alignment: (props, propName, componentName) => {
      if (props.sizes.length > 0 && props[propName] !== 'stretch') {
        return new Error(`Using ${propName} with sizes is invalid in ${componentName}.
        ${propName} is ${JSON.stringify(
          props[propName],
        )}, sizes is ${JSON.stringify(props.sizes)}`);
      }

      if (!['left', 'right', 'stretch', 'center'].includes(props[propName])) {
        return new Error(
          `Invalid prop ${propName} supplied to ${componentName}: must be one of [left, right, center, stretch].`,
        );
      }
    },

    /**
     * A component to render the row itself
     */
    Styles: PropTypes.func,
  };

  static defaultProps = {
    sizes: [],
    alignment: 'stretch',
    Styles: FlowRowStyles,
  };

  /**
   * Triggers suppressing labels when all child components have no label.
   * When labels are suppressed, the label section at the top of this row is collapsed.
   *
   * @memberof FlowRow
   */
  shouldSuppressLabels = () => {
    const atLeastOneChildHasLabel = React.Children.toArray(
      this.props.children,
    ).reduce((hasLabel, child) => hasLabel || !!child.props.label, false);
    return !atLeastOneChildHasLabel;
  };

  render() {
    const { children, sizes, alignment, Styles } = this.props;
    const suppressLabel = this.shouldSuppressLabels();

    return (
      <Styles
        suppressLabels={suppressLabel}
        sizes={sizes}
        alignment={alignment}
      >
        {children}
      </Styles>
    );
  }
}

FlowRow.Item = Item;

export default FlowRow;
