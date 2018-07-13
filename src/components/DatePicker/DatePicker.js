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

class DatePicker extends React.Component {
  static Range = DateRangePicker;

  static propTypes = {
    ...SingleDatePickerShape,
    id: PropTypes.string,
    /**
     * A component to wrap and control styles of the underlying react-dates DatePicker
     */
    Wrapper: PropTypes.func,
  };

  static defaultProps = {
    Wrapper: DatePickerWrapper,
  };

  state = {
    focused: false,
  };

  handleFocusChange = ({ focused }) => this.setState({ focused });

  render() {
    const { Wrapper, ...rest } = this.props;
    const { focused } = this.state;
    return (
      <Wrapper className={focused && 'focused'}>
        <LibDatePicker
          navPrev={<Icon name="back" />}
          navNext={<Icon name="forward" />}
          weekDayFormat="dd"
          displayFormat="MMM DD YYYY"
          daySize={37}
          horizontalMargin={0}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
          focused={focused}
          onFocusChange={this.handleFocusChange}
          {...rest}
        />
      </Wrapper>
    );
  }
}

export default DatePicker;
