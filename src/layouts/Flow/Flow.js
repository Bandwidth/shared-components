import styled from 'styled-components';
import FlowRow from './FlowRow';
import FlowFieldHoc from './FlowFieldHoc';
import FlowItem from './FlowItem';

const VERTICAL_SPACING = 28;

const Flow = styled.div.withConfig({ displayName: 'Flow' })`
  display: flex;
  flex-direction: column;

  & > ${FlowRow.Container} {
    margin: ${VERTICAL_SPACING / 2}px 0;

    &:first-child {
      margin-top: 0;
    }
    &:last-child: {
      margin-bottom: 0;
    }
  }
`;

Flow.Row = FlowRow;
Flow.field = FlowFieldHoc;
Flow.Item = FlowItem;

export default Flow;
