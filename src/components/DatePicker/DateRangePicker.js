import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { DateRangePicker as LibDateRangePicker, DateRangePickerShape } from 'react-dates';
import baseCss from './reactDatesCss';
import overridesCss from './overridesCss';
import styled from 'styled-components';
import Icon from '../Icon';
import theme from '../../theme';

const WIDTH = 550;

const select = theme.register('DateRangePicker', ({ spacing, colors, fonts }) => ({
  fontFamily: fonts.brand,
  colors: {
    default: colors.text.default,
  },
  input: {
    backgrounds: {
      default: colors.background.default,
      disabled: colors.background.disabled,
    },
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColors: {
      default: colors.gray.borderLight,
      focus: colors.gray.border,
    },
    effectColor: colors.primary.light,
    fontSize: '14px',
  },
  icon: {
    colors: {
      default: colors.gray.medium,
      focused: colors.primary.default,
    },
    padding: `0 0 0 ${spacing.small}`,
  },
  picker: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.gray.border,
  },
  month: {
    background: colors.background.default,
    padding: `0 ${spacing.large} 0 0`,
    color: colors.text.default,
  },
  monthCaption: {
    fontSize: '14px',
    margin: `0 0 ${spacing.large} 0`,
    color: colors.text.default,
    padding: spacing.small,
  },
  day: {
    borderColors: {
      default: colors.gray.borderLight,
    },
    backgrounds: {
      default: colors.background.default,
      hover: colors.primary.light,
      range: colors.primary.light,
      selected: colors.primary.default,
    },
    colors: {
      default: colors.text.default,
      selected: colors.text.inverted,
      disabled: colors.text.disabled,
    },
  },
  navigation: {
    colors: {
      default: colors.text.default,
    },
  },
  lineSeparator: {
    margin: `auto ${spacing.small}`,
    color: colors.gray.border,
    thickness: '1px',
  },
}))
.createSelector();

const Wrapper = theme.connect(styled.div`
  ${baseCss}
  ${overridesCss(select)}

  .DateRangePicker {
    width: ${WIDTH}px;
  }

  .DayPicker_transitionContainer {
    width: ${WIDTH - 2}px !important;
  }
`);

const LineSeparator = theme.connect(styled.div`
  width: 10px;
  margin: ${select('lineSeparator.margin')};
  height: ${select('lineSeparator.thickness')};
  background: ${select('lineSeparator.color')};
`);

const DateRangePicker = (props) => (
  <Wrapper>
    <LibDateRangePicker
      {...props}
      navPrev={<Icon name="back" size="12px" />}
      navNext={<Icon name="forward" size="12px" />}
      weekDayFormat="dd"
      displayFormat="MMM DD YYYY"
      customArrowIcon={<LineSeparator />}
      daySize={37}
      horizontalMargin={0}
    />
  </Wrapper>
);

DateRangePicker.propTypes = {
  ...DateRangePickerShape,
  startDateId: PropTypes.string,
  endDateId: PropTypes.string,
};

export default DateRangePicker;
