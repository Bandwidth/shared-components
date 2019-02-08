import styled, { css, keyframes } from 'styled-components';

const WIDTH = 554;

const expandDown = keyframes`
  from {
    transform: translateY(-50%) scaleY(0);
    opacity: 0;
  }
  to {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
`;

const expandUp = keyframes`
  from {
    transform: translateY(50%) scaleY(0);
    opacity: 0;
  }
  to {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
`;

export default styled.div`
  .DateRangePicker {
    width: ${WIDTH}px;
  }

  .CalendarMonth,
  .DayPicker_weekHeader {
  }

  .DateRangePicker_picker {
    top: ${({ openDirection }) =>
      openDirection === 'up' ? 'inherit' : '51px !important'};
    bottom: ${({ openDirection }) =>
      openDirection === 'up' ? '51px !important' : 'inherit'};
    width: ${({ disabled }) => (disabled ? '262px' : WIDTH + 'px')};
    animation: ${({ openDirection }) =>
        openDirection === 'up' ? expandUp : expandDown}
      200ms;
  }

  ${({ invalid }) =>
    invalid &&
    css`
      .DateInput_input:not(.DateInput_input__focused) {
        border-color: var(--colors-negative-border) !important;
        box-shadow: inset 0 -5px 0 var(--colors.negative.light')};
      }
    `};
`;
