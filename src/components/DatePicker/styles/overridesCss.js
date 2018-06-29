import { css } from 'styled-components';
import icons from 'components/Icon/icons';
import get from 'extensions/themeGet';

export default css`
  font-family: var(--fonts-brand);
  color: var(--colors-text-default);
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
      background: var(--colors-background-disabled);
      border-color: var(--colors-border-medium);
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
    border-width: var(--thicknesses-wide);
    border-style: solid;
    border-color: var(--colors-border-light);
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
    box-shadow: inset 0 -5px 0 var(--colors-primary-light);
    border-color: var(--colors-border-medium);
  }

  .DateInput_displayText {
    font-family: var(--fonts-brand);
    font-size: 14px;
    font-weight: normal;
    color: var(--colors-text-default);
    position: relative;
    padding-right: 2.5em;
    z-index: 0;

    &::after {
      content: "${icons('calendar')}";
      font-family: var(--fonts-icon);
      font-size: 1.5em;
      color: var(--colors-gray-medium);
      padding: 0 0 0 var(--spacing-small);
      position: absolute;
      right: 0;
      top: 3px;
      cursor: pointer;
    }
  }
  .DateInput_displayText__focused {
    background: transparent;

    &::after {
      color: var(--colors-primary-default);
    }
  }
  .DateInput_displayText__disabled {
    font-style: normal;
  }

  .DayPicker {
    box-shadow: none;
    border-width: var(--thicknesses-wide);
    border-style: solid;
    border-color: var(--colors-border-medium);
    border-radius: 0;
    width: auto !important;
  }

  .CalendarMonth {
    background: var(--colors-background-default);
    padding: 0 var(--spacing-large) 0 0;
    color: var(--colors-text-default);
  }

  .CalendarMonth_caption {
    font-size: 14px;
    margin: 0 0 var(--spacing-large) 0;
    color: var(--colors-text-default);
    padding: var(--spacing-small);
  }

  .CalendarMonthGrid__horizontal {
    left: 0;
  }

  .CalendarDay_container {
    border-color: var(--colors-border-light);
    background: var(--colors-background-default);
    color: var(--colors-text-default);

    &:hover {
      background: var(--colors-primary-light);
    }
  }

  .CalendarDay__selected_span {
    background: var(--colors-primary-light);
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: var(--colors-primary-default);
    color: var(--colors-text-inverted);
  }

  .CalendarDay__blocked_out_of_range {
    color: var(--colors-text-disabled);
    background: var(--colors-gray-light);
    cursor: normal;

    &:hover {
      background: var(--colors-gray-light);
      color: var(--colors-text-disabled);
    }
  }

  .CalendarDay_button {
    cursor: pointer;
  }

  .DayPickerNavigation_button {
    background: transparent;
    border: none;
    color: var(--colors-text-default);
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
