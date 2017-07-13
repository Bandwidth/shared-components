import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Item from './FlowItem';
import Label from '../../components/Label';
import { HORIZONTAL_SPACING } from './constants';

const grow = (alignment) => ['left', 'right'].includes(alignment) ? 0 : 1;
const basis = (alignment) => ['left', 'right'].includes(alignment) ? 'auto' : 0;

const justification = (alignment) => {
  switch (alignment) {
    case 'left':
      return 'space-after';
    case 'right':
      return 'space-before';
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

class FlowRow extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sizes: PropTypes.array,
    alignment: (props, propName, componentName) => {
      if (props.sizes.length > 0 && props[propName] !== 'stretch') {
        return new Error(`Using ${propName} with sizes is invalid in ${componentName}.
        ${propName} is ${JSON.stringify(props[propName])}, sizes is ${JSON.stringify(props.sizes)}`);
      }

      if (!['left', 'right', 'stretch'].includes(props[propName])) {
        return new Error(
          `Invalid prop ${propName} supplied to ${componentName}: must be one of [left, right, stretch].`
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

`;

export default FlowRow;
