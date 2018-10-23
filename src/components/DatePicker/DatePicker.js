import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import {
  SingleDatePicker as LibDatePicker,
  SingleDatePickerShape,
} from 'react-dates';
import Icon from '../Icon';
import DatePickerWrapper from './styles/DatePickerWrapper';

import DateRangePicker from './DateRangePicker';
import moment from 'moment';
moment.updateLocale('en', {
  weekdaysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
});
import omit from 'lodash.omit';
import pick from 'lodash.pick';

/**
 * This is a styling wrapper around [react-dates](https://github.com/airbnb/react-dates).
 * Please see [here](https://github.com/airbnb/react-dates#singledatepicker) for prop types.
 *
 * The picker can be controlled by setting the props `date` and `onDateChange`.
 * `date` should be set to a moment object of the currently selected date,
 * while `onDateChange` should be a function that handles the date when it
 * changes.
 */
class DatePicker extends React.PureComponent {
  static Range = DateRangePicker;

  static propTypes = {
    ...omit(SingleDatePickerShape, ['onFocusChange']),
    id: PropTypes.string,
    /**
     * A component to wrap and control styles of the underlying react-dates DatePicker
     */
    Wrapper: PropTypes.func,
    /**
     * Format to pass to moment to control the input's value
     */
    displayFormat: PropTypes.string,
    /**
     * Set to true if the component's value is invalid
     */
    invalid: PropTypes.bool,
    /**
     * Set to true if the component should be disabled.
     */
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    Wrapper: DatePickerWrapper,
    displayFormat: 'MMM DD YYYY',
    invalid: false,
    disabled: false,
  };

  state = {
    focused: false,
  };

  handleFocusChange = ({ focused }) => this.setState({ focused });

  render() {
    const { Wrapper, ...rest } = this.props;
    const { focused } = this.state;
    return (
      <Wrapper
        className={focused && 'focused'}
        openDirection={this.props.openDirection}
        invalid={this.props.invalid}
        disabled={this.props.disabled}
      >
        <LibDatePicker
          navPrev={<Icon name="back" />}
          navNext={<Icon name="forward" />}
          weekDayFormat="dd"
          daySize={37}
          horizontalMargin={0}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
          focused={focused}
          onFocusChange={this.handleFocusChange}
          {...pick(rest, Object.keys(SingleDatePickerShape))}
        />
      </Wrapper>
    );
  }
}

export default DatePicker;
