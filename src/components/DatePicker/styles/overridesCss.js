import { css } from 'styled-components';
import icons from 'components/Icon/icons';
import get from 'extensions/themeGet';

export default css`
  font-family: ${get('fonts.brand')};
  color: ${get('colors.text.default')};
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
      background: ${get('colors.background.disabled')};
      border-color: ${get('colors.border.medium')};
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
    border-width: ${get('thicknesses.wide')};
    border-style: solid;
    border-color: ${get('colors.border.light')};
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
    box-shadow: inset 0 -5px 0 ${get('colors.primary.light')};
    border-color: ${get('colors.border.medium')};
  }

  .DateInput_displayText {
    font-family: ${get('fonts.brand')};
    font-size: 14px;
    font-weight: normal;
    color: ${get('colors.text.default')};
    position: relative;
    padding-right: 2.5em;
    z-index: 0;

    &::after {
      content: "${icons('calendar')}";
      font-family: ${get('fonts.icon')};
      font-size: 1.5em;
      color: ${get('colors.gray.medium')};
      padding: 0 0 0 ${get('spacing.small')};
      position: absolute;
      right: 0;
      top: 3px;
      cursor: pointer;
    }
  }
  .DateInput_displayText__focused {
    background: transparent;

    &::after {
      color: ${get('colors.primary.default')};
    }
  }
  .DateInput_displayText__disabled {
    font-style: normal;
  }

  .DayPicker {
    box-shadow: none;
    border-width: ${get('thicknesses.wide')};
    border-style: solid;
    border-color: ${get('colors.border.medium')};
    border-radius: 0;
    width: auto !important;
  }

  .CalendarMonth {
    background: ${get('colors.background.default')};
    padding: 0 ${get('spacing.large')} 0 0;
    color: ${get('colors.text.default')};
  }

  .CalendarMonth_caption {
    font-size: 14px;
    margin: 0 0 ${get('spacing.large')} 0;
    color: ${get('colors.text.default')};
    padding: ${get('spacing.small')};
  }

  .CalendarMonthGrid__horizontal {
    left: 0;
  }

  .CalendarDay_container {
    border-color: ${get('colors.border.light')};
    background: ${get('colors.background.default')};
    color: ${get('colors.text.default')};

    &:hover {
      background: ${get('colors.primary.light')};
    }
  }

  .CalendarDay__selected_span {
    background: ${get('colors.primary.light')};
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${get('colors.primary.default')};
    color: ${get('colors.text.inverted')};
  }

  .CalendarDay__blocked_out_of_range {
    color: ${get('colors.text.disabled')};
    background: ${get('colors.gray.light')};
    cursor: normal;

    &:hover {
      background: ${get('colors.gray.light')};
      color: ${get('colors.text.disabled')};
    }
  }

  .CalendarDay_button {
    cursor: pointer;
  }

  .DayPickerNavigation_button {
    background: transparent;
    border: none;
    color: ${get('colors.text.default')};
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
