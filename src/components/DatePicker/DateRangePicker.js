import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import {
  DateRangePicker as LibDateRangePicker,
  DateRangePickerShape,
} from 'react-dates';
import Icon from '../Icon';
import DateRangePickerWrapper from './styles/DateRangePickerWrapper';
import DateRangePickerLineSeparator from './styles/DateRangePickerLineSeparator';

class DateRangePicker extends React.Component {
  static propTypes = {
    ...DateRangePickerShape,
    startDateId: PropTypes.string,
    endDateId: PropTypes.string,
    /**
     * A component to wrap and control styles of the underlying react-dates DatePicker
     */
    Wrapper: PropTypes.func,
    /**
     * A component that renders the separator line between the two inputs
     */
    LineSeparator: PropTypes.func,
  };

  static defaultProps = {
    Wrapper: DateRangePickerWrapper,
    LineSeparator: DateRangePickerLineSeparator,
  };

  state = {
    focusedInput: null,
  };

  handleFocusChange = focusedInput => this.setState({ focusedInput });

  render() {
    const { Wrapper, LineSeparator, ...rest } = this.props;
    const { focusedInput } = this.state;
    return (
      <Wrapper className={focusedInput && 'focused-' + focusedInput}>
        <LibDateRangePicker
          navPrev={<Icon name="back" size="12px" />}
          navNext={<Icon name="forward" size="12px" />}
          weekDayFormat="dd"
          displayFormat="MMM DD YYYY"
          customArrowIcon={<LineSeparator />}
          daySize={37}
          horizontalMargin={0}
          hideKeyboardShortcutsPanel
          focusedInput={focusedInput}
          onFocusChange={this.handleFocusChange}
          {...rest}
        />
      </Wrapper>
    );
  }
}

export default DateRangePicker;
