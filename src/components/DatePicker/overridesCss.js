import { css } from 'styled-components';
import icons from '../Icon/icons';

export default select => css`
  font-family: ${select('fontFamily')};
  color: ${select('colors.default')};
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
      background: ${select('input.backgrounds.disabled')};
      border-color: ${select('input.borderColors.disabled')};
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
    border-width: ${select('input.borderWidth')};
    border-style: ${select('input.borderStyle')};
    border-color: ${select('input.borderColors.default')};
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
    box-shadow: inset 0 -5px 0 ${select('input.effectColor')};
    border-color: ${select('input.borderColors.focus')};
  }

  .DateInput_displayText {
    font-family: ${select('fontFamily')};
    font-size: ${select('input.fontSize')};
    font-weight: normal;
    color: ${select('colors.default')};
    position: relative;
    padding-right: 2.5em;
    z-index: 0;

    &::after {
      content: "${icons('calendar')}";
      font-family: "Bandwidth";
      font-size: 1.5em;
      color: ${select('icon.colors.default')};
      padding: ${select('icon.padding')};
      position: absolute;
      right: 0;
      top: 3px;
      cursor: pointer;
    }
  }
  .DateInput_displayText__focused {
    background: transparent;

    &::after {
      color: ${select('icon.colors.focused')};
    }
  }
  .DateInput_displayText__disabled {
    font-style: normal;
  }

  .DayPicker {
    box-shadow: none;
    border-width: ${select('picker.borderWidth')};
    border-style: ${select('picker.borderStyle')};
    border-color: ${select('picker.borderColor')};
    border-radius: 0;
    width: auto !important;
  }

  .CalendarMonth {
    background: ${select('month.background')};
    padding: ${select('month.padding')};
    color: ${select('month.color')};
  }

  .CalendarMonth_caption {
    font-size: ${select('monthCaption.fontSize')};
    margin: ${select('monthCaption.margin')};
    color: ${select('monthCaption.color')};
    padding: ${select('monthCaption.padding')};
  }

  .CalendarMonthGrid__horizontal {
    left: 0;
  }

  .CalendarDay_container {
    border-color: ${select('day.borderColors.default')};
    background: ${select('day.backgrounds.default')};
    color: ${select('day.colors.default')};

    &:hover {
      background: ${select('day.backgrounds.hover')};
    }
  }

  .CalendarDay__selected_span {
    background: ${select('day.backgrounds.range')};
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${select('day.backgrounds.selected')};
    color: ${select('day.colors.selected')};
  }

  .CalendarDay__blocked_out_of_range {
    color: ${select('day.colors.disabled')};
    cursor: normal;

    &:hover {
      background: transparent;
      color: ${select('day.colors.disabled')};
    }
  }

  .CalendarDay_button {
    cursor: pointer;
  }

  .DayPickerNavigation_button {
    background: transparent;
    border: none;
    color: ${select('navigation.colors.default')};
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
