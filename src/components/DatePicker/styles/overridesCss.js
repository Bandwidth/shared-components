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

  .DateRangePicker_picker,
  .SingleDatePicker_picker {
    top: 51px !important;
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
    width: auto;
    &::after {
      position: absolute;
      right: var(--spacing-medium);
      top: 50%;
      content: "${icons('calendar')}";
      font-family: var(--fonts-icon);
      font-size: 1.5em;
      transform: translateY(-50%);
    }
    .DateInput_fang {
      display: none;
    }
  }
  .DateInput_input {
    z-index: 100;
    transition: all 200ms;
    font-family: var(--fonts-brand);
    font-size: 14px;
    line-height: 1.5;
    padding: calc(var(--spacing-medium) - 1px) var(--spacing-medium);
    border: ${get('thicknesses.wide')} solid ${get('colors.border.light')};
  }
  .DateInput_input__focused {
    box-shadow: inset 0 -5px 0 ${get('colors.primary.light')};
    border-color: var(--colors-border-medium);
  }

  .DateInput_displayText {
    font-family: ${get('fonts.brand')};
    font-size: 14px;
    font-weight: normal;
    color: ${get('colors.text.default')};
    position: relative;
    padding-right: 2.5em;
    z-index: 0;
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
    & > div > div {
      width: auto !important;
    }
  }

  .CalendarMonth_table {
    margin-top: var(--spacing-medium);
   }

  .CalendarMonth {
    background: ${get('colors.background.default')};
    padding: 0 ${get('spacing.large')} 0 0;
    color: ${get('colors.text.default')};
  }

  .CalendarMonth_caption {
    font-size: 14px;
    color: ${get('colors.text.default')};
    padding: var(--spacing-medium);
  }

  .CalendarMonthGrid__horizontal {
    left: 0;
  }

  .CalendarDay__default {
    border-color: ${get('colors.border.medium')};
    background: ${get('colors.background.default')};
    color: ${get('colors.text.default')};

    &:hover {
      background: ${get('colors.primary.light')};
    }
  }

  .CalendarDay__selected_span {
    background: ${get('colors.primary.light')};
    &:hover {
      background: var(--colors-primary-default);
      color: var(--colors-text-inverted);
    }
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${get('colors.primary.default')};
    color: ${get('colors.text.inverted')};
  }

  .CalendarDay__blocked_out_of_range {
    color: ${get('colors.text.disabled')} ;
    background: ${get('colors.background.disabled')};
    cursor: normal;

    &:hover {
      color: ${get('colors.text.disabled')} ;
      background: ${get('colors.background.disabled')};
      border-color: ${get('colors.border.medium')};
    }
  }

  .CalendarDay_button {
    cursor: pointer;
  }

  .DayPickerNavigation {
    display: flex;
    justify-content: space-between;
    padding: var(--spacing-medium);
    position: absolute;
    width: 100%;
  }

  .DayPickerNavigation_button {
    background: transparent;
    border: none;
    color: ${get('colors.text.default')};
    font-size: 1em;
  }

  .DayPicker_weekHeaders__horizontal {
    margin: 0;
  }

  .DayPicker_weekHeader {
    padding: 0;
    top: 45px;

    &:not(:first-of-type) {
      transform: translateX(4px);
    }
  }

  .DayPicker_weekHeader_li > small {
    font-weight: bold;
  }
`;
