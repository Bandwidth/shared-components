import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import warning from 'warning';
import Item from './FlowItem';
import Label from '../../components/Label';

const HORIZONTAL_SPACING = 30;

const BaseStyles = styled.div`
  /* Flow is a row */
  display: flex;
  flex-direction: row;
`;

// immediately extend via wrap so that we can do nested Flows
const Styles = styled(BaseStyles)`
  /* Flow is designed to be nestable */
  & > ${Item.Container}, & > ${BaseStyles} {
    flex-grow: 0;
    flex-shrink: 0;

    &:first-child {
      flex-basis: calc(50% - ${HORIZONTAL_SPACING / 2}px);
      margin-right: ${HORIZONTAL_SPACING / 2}px;
    }
    &:last-child {
      flex-basis: calc(50% - ${HORIZONTAL_SPACING / 2}px);
      margin-left: ${HORIZONTAL_SPACING / 2}px;
    }
    &:only-child {
      flex-basis: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }

  & ${Label} {
    ${({ suppressLabels }) => suppressLabels && 'display: none;'}
  }
`;

class FlowRow extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
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
    const { children } = this.props;
    const suppressLabel = this.shouldSuppressLabels();

    return (
      <Styles suppressLabels={suppressLabel}>
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
