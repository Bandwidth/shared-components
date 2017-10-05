import styled from 'styled-components';
import FlowRow from './FlowRow';
import field from './fields/flowField';
import * as fields from './fields';
import FlowItem from './FlowItem';
import { HORIZONTAL_SPACING, VERTICAL_SPACING } from './constants';
import theme from '../../theme';

const select = theme
  .register('Flow', {
    horizontalSpacing: HORIZONTAL_SPACING + 'px',
    verticalSpacing: VERTICAL_SPACING + 'px',
  })
  .createSelector();

const FlowImpl = theme.connect(styled.div.withConfig({ displayName: 'Flow' })`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  & > ${FlowRow.Container} {
    flex-basis: 100%;
    flex-shrink: 0;
  }

  & > ${FlowItem.Container} {
    flex-basis: calc(50% - ${select('horizontalSpacing')} / 2);
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > ${FlowRow.Container},
  & > ${FlowItem.Container} {
    margin-top: calc(${select('verticalSpacing')} / 2);
    margin-bottom: calc(${select('verticalSpacing')} / 2);

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`);

export const Flow = (props) => <FlowImpl {...props} />;

FlowImpl.Row = FlowRow;
FlowImpl.fields = fields;
FlowImpl.createField = field;
FlowImpl.Item = FlowItem;

export default FlowImpl;
