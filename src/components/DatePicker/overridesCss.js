import { css } from 'styled-components';
import icons from '../Icon/icons';

export default css`
  font-family: ${({ theme }) => theme.fonts.brand};
  color: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;

  .DateRangePicker {
    display: block;
    box-sizing: border-box;
  }

  .DateRangePickerInput,
  .SingleDatePickerInput {
    width: 100%;
    display: flex;
    flex-direction: row;
    border: none;

    & > .DateInput {
      flex: 1;
    }

    & > .DateRangePickerInput_arrow {
      margin: auto;
    }
  }
  .DateRangePickerInput__disabled,
  .SingleDatePickerInput__disabled {
    background: transparent;

    & > .DateInput {
      background: ${({ theme }) => theme.colors.disabled};
      border-color: ${({ theme }) => theme.colors.border};
    }
  }
  .DateRangePicker_picker__openDown,
  .SingleDatePicker_picker__openDown {
    top: 49px;
  }
  .DateRangePicker_picker__openUp,
  .SingleDatePicker_picker__openUp {
    bottom: 49px;
  }

  .DateInput {
    border: 1px solid ${({ theme }) => theme.colors.borderLight};
    width: auto;

    &::before, &::after {
      content: none;
      border: none;
      background: transparent;
      display: none;
      z-index: -100;
    }
  }
  .DateInput_input {
    z-index: 100;
  }
  .DateInput__openDown,
  .DateInput__openUp {
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.border};
  }

  .DateInput_displayText {
    font-family: ${({ theme }) => theme.fonts.brand};
    font-size: ${({ theme }) => theme.input.fontSize};
    font-weight: normal;
    color: ${({ theme }) => theme.colors.black};
    position: relative;
    padding-right: 2.5em;
    z-index: 0;

    &::after {
      content: "${icons('calendar')}";
      font-family: "Bandwidth";
      font-size: 1.5em;
      color: ${({ theme }) => theme.colors.grayLightText};
      padding: 0 0 0 ${({ theme }) => theme.padding.small};
      position: absolute;
      right: 0;
      top: 3px;
      cursor: pointer;
    }
  }
  .DateInput_displayText__focused {
    background: transparent;

    &::after {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .DateInput_displayText__disabled {
    font-style: normal;
  }

  .DayPicker {
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    width: auto !important;
  }

  .CalendarMonth {
    background: ${({ theme }) => theme.colors.white};
    padding: 0 ${({ theme }) => theme.padding.large} 0 0;
    color: ${({ theme }) => theme.colors.black};
  }

  .CalendarMonth_caption {
    font-size: 14px;
    margin-bottom: ${({ theme }) => theme.padding.large};
    color: ${({ theme }) => theme.colors.black};
    padding: ${({ theme }) => theme.padding.small};
  }

  .CalendarMonthGrid__horizontal {
    left: 0;
  }

  .CalendarDay_container {
    border-color: ${({ theme }) => theme.colors.borderLight};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryLight};
    }
  }

  .CalendarDay__selected_span {
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  .CalendarDay__blocked_out_of_range {
    color: ${({ theme }) => theme.colors.disabled};
    cursor: normal;

    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.disabled};
    }
  }

  .CalendarDay_button {
    cursor: pointer;
  }

  .DayPickerNavigation_button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.black};
  }

  .DayPickerNavigation_leftButton__horizontal {
    left: 4px;
  }
  .DayPickerNavigation_rightButton__horizontal {
    right: 4px;
  }
  .DayPickerNavigation_leftButton__horizontal,
  .DayPickerNavigation_rightButton__horizontal {
    top: 8px;
  }

  .DayPicker_weekHeaders__horizontal {
    margin: 0;
  }

  .DayPicker_weekHeader {
    padding: 0;
    top: 40px;

    &:not(:first-of-type) {
      transform: translateX(4px);
    }
  }

  .DayPicker_weekHeader_li > small {
    font-weight: bold;
  }
`;
