import styled, { css, keyframes } from 'styled-components';

const WIDTH = 260;

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
  .SingleDatePicker {
    width: ${WIDTH}px;
  }

  .CalendarMonth,
  .DayPicker_weekHeader {
  }

  .DayPicker_transitionContainer {
    width: ${WIDTH - 4}px !important;
  }

  .DayPicker_weekHeader_li {
    /* a fix for the weekday headers being just 2px too large in total */
    margin-left: ${2.0 / -7.0}px;
  }

  .SingleDatePicker_picker {
    top: ${({ openDirection }) =>
      openDirection === 'up' ? 'inherit' : '51px !important'};
    bottom: ${({ openDirection }) =>
      openDirection === 'up' ? '51px !important' : 'inherit'};
    width: ${({ disabled }) => (disabled ? '262px' : '100%')};
    animation: ${({ openDirection }) =>
        openDirection === 'up' ? expandUp : expandDown}
      200ms;
  }

  ${({ invalid }) =>
    invalid &&
    css`
      .DateInput_input:not(.DateInput_input__focused) {
        border-color: var(--colors-negative-border) !important;
        box-shadow: inset 0 -5px 0 ${get('colors.negative.light')};
      }
    `};
`;
