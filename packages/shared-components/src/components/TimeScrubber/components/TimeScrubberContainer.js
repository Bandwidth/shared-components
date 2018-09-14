import styled from 'styled-components';

const TimeScrubberContainer = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;

    &:first-child,
    &:last-child {
      flex: 0 0 auto;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;

/**
 * A simple outer container that controls layout and border radius
 */
export default TimeScrubberContainer;
