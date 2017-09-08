import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import FlowRow from './FlowRow';
import field from './fields/flowField';
import * as fields from './fields';
import FlowItem from './FlowItem';
import { HORIZONTAL_SPACING, VERTICAL_SPACING } from './constants';

const FlowImpl = styled.div.withConfig({ displayName: 'Flow' })`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  & > ${FlowRow.Container} {
    flex-basis: 100%;
    flex-shrink: 0;
  }

  & > ${FlowItem.Container} {
    flex-basis: calc(50% - ${HORIZONTAL_SPACING / 2}px);
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > ${FlowRow.Container},
  & > ${FlowItem.Container} {
    margin-top: ${VERTICAL_SPACING / 2}px;
    margin-bottom: ${VERTICAL_SPACING / 2}px;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Flow = ({ children, ...rest }) => (
  <FlowImpl {...rest}>{children}</FlowImpl>
);

export default sharedComponent({ Row: FlowRow, fields, createField: field, Item: FlowItem })(Flow);
