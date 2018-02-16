import styled from 'styled-components';
import Content from './FlowItemContent';
import FlexibleContent from './FlowItemFlexibleContent';
import MoreContent from './FlowItemMoreContent';
import {
  LABEL_HEIGHT,
  MIN_HELP_TEXT_HEIGHT,
  MIN_CONTENT_HEIGHT,
  HORIZONTAL_CONTENT_SPACING,
} from '../constants';

const FlowItemContainer = styled.div.withConfig({
  displayName: 'FlowItemContainer',
})`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  align-items: ${({ alignment }) => {
    switch (alignment) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return 'stretch';
    }
  }};

  & > .FlowItem-label {
    height: ${LABEL_HEIGHT};
    margin: 0 0 5.6px 0;
    overflow-x: hidden;
    flex-basis: ${LABEL_HEIGHT};
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0;
  }

  & > ${Content} {
    height: ${MIN_CONTENT_HEIGHT};
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;

    & > * {
      margin: auto;
    }

    & > *:not(:last-child):not(:only-child) {
      margin-right: ${HORIZONTAL_CONTENT_SPACING};
    }
  }

  & > ${FlexibleContent} {
    height: auto;
    flex-basis: ${MIN_CONTENT_HEIGHT};
    flex-grow: 1;
    flex-shrink: 0;
  }

  & > .FlowItem-helpText {
    min-height: ${MIN_HELP_TEXT_HEIGHT};
    margin: 5.6px 0 0 0;
    flex-basis: ${MIN_HELP_TEXT_HEIGHT};
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0;
  }

  & > ${MoreContent} {
    flex: 1 0 0;
  }
`;

FlowItemContainer.Small = styled(FlowItemContainer)`
  font-size: 0.75em;

  & > .FlowItem-label {
    height: auto;
    margin: 0;
  }

  & > ${Content} {
    height: 20px;
  }

  & > ${FlexibleContent} {
    flex-basis: 20px;
  }

  & > .FlowItem-helpText {
    min-height: 14px;
    margin: 0;
  }
`;

export default FlowItemContainer;
