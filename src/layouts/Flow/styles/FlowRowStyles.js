import styled, { css } from 'styled-components';
import FlowItemContainer from './FlowItemContainer';
import { HORIZONTAL_SPACING } from '../constants';

const BaseStyles = styled.div`
  /* Flow is a row */
  display: flex;
  flex-direction: row;
`;

const grow = alignment =>
  ['left', 'right', 'center'].includes(alignment) ? 0 : 1;
const basis = alignment =>
  ['left', 'right', 'center'].includes(alignment) ? 'auto' : 0;

const justification = alignment => {
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

const generateSizes = sizes =>
  sizes.map(
    (size, idx) =>
      size !== undefined && size !== null
        ? css`
            & > ${FlowItemContainer}, & > ${BaseStyles} {
              &:nth-child(${idx + 1}) {
                flex-grow: ${size};
              }
            }
          `
        : '',
  );

// immediately extend via wrap so that we can do nested Flows

export default styled(BaseStyles)`
  justify-content: ${({ alignment }) => justification(alignment)};

  /* Flow is designed to be nestable */
  & > ${FlowItemContainer}, & > ${BaseStyles} {
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

  ${({ sizes }) => generateSizes(sizes)} & .FlowItem-label {
    ${({ suppressLabels }) => suppressLabels && 'display: none;'};
  }
`;
