import React from 'react';
import 'react-dates/initialize';
import {
  DateRangePicker as LibDateRangePicker,
  DateRangePickerShape,
} from 'react-dates';
import Icon from 'components/Icon';
import generateId from 'extensions/generateId';
import * as styles from './styles';

interface DateRangePickerProps {
  /**
   * An id for the start date part of the widget.
   */
  startDateId: string;
  /**
   * An id for the end date part of the widget.
   */
  endDateId: string;
  /**
   * A component to wrap and control styles of the underlying react-dates DatePicker
   */
  Wrapper?: any;
  /**
   * A component that renders the separator line between the two inputs
   */
  LineSeparator?: any;
  /**
   * Set to true if the component's value is invalid
   */
  invalid?: boolean;
  /**
   * Set to true if the component should be disabled. Alternatively, set to either 'startDate' or 'endDate'
   * to disable a particular part of the component.
   */
  disabled?: boolean | string;
  /**
   * Direction for the input to open.
   */
  openDirection?: 'up' | 'down';
}

interface DateRangePickerState {
  internalFocusedInput: 'startDate' | 'endDate' | null;
}

/**
 * This is a styling wrapper around [react-dates](https://github.com/airbnb/react-dates).
 * Please see [here](https://github.com/airbnb/react-dates#singledatepicker) for prop types.
 *
 * The picker can be controlled by setting the props `startDate`, `endDate` and `onDatesChange`.
 * `startDate` and `endDate` should be set to moment objects of the currently selected dates,
 * while `onDatesChange` should be a function that handles the dates when they
 * change.
 *
 * **NOTE: ** The range picker uses `onDatesChange` not `onDateChange`.
 *
 * @visibleName DatePicker.Range
 */
class DateRangePicker extends React.PureComponent<
  DateRangePickerProps & DateRangePickerShape,
  DateRangePickerState
> {
  static defaultProps = {
    Wrapper: styles.RangeWrapper,
    LineSeparator: styles.LineSeparator,
    invalid: false,
    disabled: false,
  };

  static styles = styles;

  state: DateRangePickerState = {
    internalFocusedInput: null,
  };

  handleFocusChange = (internalFocusedInput: 'startDate' | 'endDate' | null) =>
    this.setState({ internalFocusedInput });

  get focusedInput() {
    return (
      this.props.disabled !== this.state.internalFocusedInput &&
      this.state.internalFocusedInput
    );
  }

  genStartDateId = generateId('startDate');
  getEndDateId = generateId('endDate');

  render() {
    const {
      Wrapper,
      LineSeparator,
      startDateId,
      endDateId,
      ...rest
    } = this.props;
    return (
      <Wrapper
        className={this.focusedInput && 'focused-' + this.focusedInput}
        openDirection={this.props.openDirection}
        disabled={this.props.disabled}
        invalid={this.props.invalid}
      >
        <LibDateRangePicker
          navPrev={<Icon name="back" />}
          navNext={<Icon name="forward" />}
          weekDayFormat="dd"
          displayFormat="MMM DD YYYY"
          customArrowIcon={<LineSeparator />}
          daySize={35}
          horizontalMargin={0}
          hideKeyboardShortcutsPanel
          numberOfMonths={this.props.disabled ? 1 : 2}
          minimumNights={0}
          focusedInput={this.focusedInput}
          anchorDirection={this.focusedInput === 'endDate' ? 'right' : 'left'}
          onFocusChange={this.handleFocusChange}
          startDateId={startDateId || this.genStartDateId}
          endDateId={endDateId || this.getEndDateId}
          {...rest}
        />
      </Wrapper>
    );
  }
}

export default DateRangePicker;
