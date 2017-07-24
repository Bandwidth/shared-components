import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Item from './FlowItem';
import Label from '../../components/Label';
import { HORIZONTAL_SPACING } from './constants';

const grow = (alignment) => ['left', 'right', 'center'].includes(alignment) ? 0 : 1;
const basis = (alignment) => ['left', 'right', 'center'].includes(alignment) ? 'auto' : 0;

const justification = (alignment) => {
  switch (alignment) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    case 'center':
      return 'center';
    default:
      return 'space-between';
  }
};

const generateSizes = (sizes) =>
  sizes.map((size, idx) =>
    size !== undefined && size !== null ?
      css`
        & > ${Item.Container}, & > ${BaseStyles} {
          &:nth-child(${idx + 1}) {
            flex-grow: ${size};
          }
        }
      `
      : ''
  );

const BaseStyles = styled.div`
  /* Flow is a row */
  display: flex;
  flex-direction: row;
`;

// immediately extend via wrap so that we can do nested Flows
const Styles = styled(BaseStyles)`
  justify-content: ${({ alignment }) => justification(alignment)};

  /* Flow is designed to be nestable */
  & > ${Item.Container}, & > ${BaseStyles} {
    flex-grow: ${({ alignment }) => grow(alignment)};
    flex-shrink: 0;
    margin-left: ${HORIZONTAL_SPACING / 2}px;
    margin-right: ${HORIZONTAL_SPACING / 2}px;
    flex-basis: ${({ alignment }) => basis(alignment)};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  ${({ sizes }) => generateSizes(sizes)}

  & ${Label} {
    ${({ suppressLabels }) => suppressLabels && 'display: none;'}
  }
`;

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
        ${propName} is ${JSON.stringify(props[propName])}, sizes is ${JSON.stringify(props.sizes)}`);
      }

      if (!['left', 'right', 'stretch', 'center'].includes(props[propName])) {
        return new Error(
          `Invalid prop ${propName} supplied to ${componentName}: must be one of [left, right, center, stretch].`
        );
      }
    }
  };

  static defaultProps = {
    sizes: [],
    alignment: 'stretch',
  };

  /**
   * Triggers suppressing labels when all child components have no label.
   * When labels are suppressed, the label section at the top of this row is collapsed.
   *
   * @memberof FlowRow
   */
  shouldSuppressLabels = () => {
    const atLeastOneChildHasLabel =
      React.Children.toArray(this.props.children)
      .reduce((hasLabel, child) =>
        hasLabel || !!child.props.label,
        false
      );
    return !atLeastOneChildHasLabel;
  };

  render() {
    const { children, sizes, alignment } = this.props;
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

FlowRow.Container = Styles;
FlowRow.Item = Item;

FlowRow.usage = `
Flow.Row is designed to be used with 2 children:

\`\`\`\
<Flow.Row>
  <Flow.Item>foo</Flow.Item>
  <Flow.Item>bar</Flow.Item>
</Flow.Row>
\`\`\`

You can still add more than 2 children to Flow.Row and it will try to lay them out gracefully.

\`\`\`
<Flow.Row>
  <Flow.Item>all</Flow.Item>
  <Flow.Item>the same</Flow.Item>
  <Flow.Item>size</Flow.Item>
</Flow.Row>
\`\`\`

You can use the \`sizes\` prop to have more control over item sizes:

\`\`\`
<Flow.Row sizes={[1, 8]}>
  <Flow.Item>small</Flow.Item>
  <Flow.Item>BIG!</Flow.Item>
</Flow.Row>
\`\`\`

You can also change the way items are aligned:

\`\`\`
<Flow.Row alignment="left">
  <Flow.Item>These are on the</Flow.Item>
  <Flow.Item>Left!</Flow.Item>
</Flow.Row>
\`\`\`

Flow.Row can achieve some pretty complex layouts with nesting and its props:

\`\`\`
<Flow.Row>
  <Flow.Item>foo</Flow.Item>
  <Flow.Row alignment="left">
    <Flow.Item>these will be</Flow.Item>
    <Flow.Item>pushed up against the center</Flow.Item>
  </Flow.Row>
</Flow.Row>
\`\`\`
`;

export default FlowRow;
