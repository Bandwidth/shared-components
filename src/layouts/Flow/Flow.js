import styled from 'styled-components';
import FlowRowStyles from './styles/FlowRowStyles';
import field from './fields/flowField';
import * as fields from './fields';
import FlowItemContainer from './styles/FlowItemContainer';
import FlowItem from './FlowItem';
import FlowRow from './FlowRow';
import { HORIZONTAL_SPACING, VERTICAL_SPACING } from './constants';

/**
 * @deprecated
 *
 * See /layouts/Fields for new layout mechanisms for form fields
 */
const Flow = styled.div.withConfig({ displayName: 'Flow' })`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  & > ${FlowRowStyles} {
    flex-basis: 100%;
    flex-shrink: 0;
  }

  & > ${FlowItemContainer} {
    flex-basis: calc(50% - ${HORIZONTAL_SPACING}px / 2);
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > ${FlowRowStyles}, & > ${FlowItemContainer} {
    margin-top: calc(${VERTICAL_SPACING}px / 2);
    margin-bottom: calc(${VERTICAL_SPACING}px / 2);

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

Flow.Row = FlowRow;
Flow.fields = fields;
Flow.createField = field;
Flow.Item = FlowItem;

/**
 * @component
 */
export default Flow;
