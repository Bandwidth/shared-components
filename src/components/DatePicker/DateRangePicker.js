import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { DateRangePicker as LibDateRangePicker } from 'react-dates';
import Icon from '../Icon';
import generateId from 'extensions/generateId';
import * as styles from './styles';
import omit from 'lodash.omit';
import pick from 'lodash.pick';

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
class DateRangePicker extends React.PureComponent {
  static propTypes = {
    /**
     * An id for the start date part of the widget.
     */
    startDateId: PropTypes.string,
    /**
     * An id for the end date part of the widget.
     */
    endDateId: PropTypes.string,
    /**
     * A component to wrap and control styles of the underlying react-dates DatePicker
     */
    Wrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component that renders the separator line between the two inputs
     */
    LineSeparator: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * Set to true if the component's value is invalid
     */
    invalid: PropTypes.bool,
    /**
     * Set to true if the component should be disabled. Alternatively, set to either 'startDate' or 'endDate'
     * to disable a particular part of the component.
     */
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  };

  static defaultProps = {
    Wrapper: styles.RangeWrapper,
    LineSeparator: styles.LineSeparator,
    invalid: false,
    disabled: false,
  };

  static styles = styles;

  state = {
    internalFocusedInput: null,
  };

  handleFocusChange = internalFocusedInput =>
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
          navPrev={<Icon name="back" size="12px" />}
          navNext={<Icon name="forward" size="12px" />}
          weekDayFormat="dd"
          displayFormat="MMM DD YYYY"
          customArrowIcon={<LineSeparator />}
          daySize={35}
          horizontalMargin={0}
          horizontalMonthPadding={14}
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
