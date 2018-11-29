import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import moment from 'moment';

const disabledRange = [-1, -1];
const roundMinutes = minutes => Math.round(minutes / 15.0) * 15;
const toHours = momentTime => momentTime.hours() + momentTime.minutes() / 60.0;

/**
 * An intuitive time selector which works in 15 minute increments. Allows setting
 * a valid range of time to pick from. Please supply all time values as moment objects
 * which are rounded to 15 minutes. If your provided value is not rounded, an onChange
 * event will be immediately fired with the rounded value.
 */
class TimeScrubber extends React.Component {
  static propTypes = {
    /**
     * A MomentJS object which represents the current time. You can
     * provide an object with a date included, and the date will not
     * be modified.
     */
    value: PropTypes.object.isRequired,
    /**
     * Called when the time value is changed with the new value. This
     * is not called while the user is scrubbing; only when they release.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * An array with two values. The first is the time (in hours) which
     * represents an *inclusive* start to the allowed time range. The
     * second represents the *inclusive* end of the range. Values should
     * be decimals representing hour values between 0 and 24
     * (like "13.5" for 1:30PM)
     */
    allowedRange: PropTypes.arrayOf(PropTypes.number),
    /**
     * Determines whether the user can interact with the control
     */
    disabled: PropTypes.bool,
    /**
     * Adjusts the spacing between tickmarks. Include the width
     * of the mark itself (1px) in the provided spacing total.
     */
    tickSpacing: PropTypes.number,
    /**
     * A component that can be provided to customize
     * the rendering behavior of the outer container
     */
    Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component that can be provided to customize
     * the rendering behavior of the buttons
     */
    NudgeButton: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component that can be provided to customize
     * the rendering behavior of the viewport window
     */
    Viewport: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component that can be provided to customize
     * the rendering behavior of the timeline bar
     */
    Timeline: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    tickSpacing: 11,
    value: moment()
      .hour(12)
      .minute(0)
      .second(0),
    disabled: false,
    allowedRange: [0, 23.75],
    Container: styles.Container,
    NudgeButton: styles.NudgeButton,
    Viewport: styles.Viewport,
    Timeline: styles.Timeline,
  };

  static styles = styles;

  state = {
    offset: 0,
    dragging: false,
    grabPoint: null,
    potentialTime: null,
    internalValue: this.props.value,
  };

  viewportRef = createRef();
  timelineElement = null;
  offset = 0;

  componentDidMount() {
    window.addEventListener('mousemove', this.handleDrag);
    window.addEventListener('mouseup', this.handleRelease);
    window.addEventListener('touchmove', this.handleDrag);
    window.addEventListener('touchend', this.handleRelease);
    this.enforceTimeRounding();
  }

  componentDidUpdate(prevProps, prevState) {
    this.enforceTimeRounding();
    if (this.props.value !== prevProps.value) {
      this.setState({ internalValue: this.props.value });
    }
    if (this.state.internalValue !== prevState.internalValue) {
      this.syncTimelinePosition();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleDrag);
    window.removeEventListener('mouseup', this.handleRelease);
    window.removeEventListener('touchmove', this.handleDrag);
    window.removeEventListener('touchend', this.handleRelease);
  }

  /**
   * Restricts a position to only be within the allowed range
   */
  capToRange = position => {
    const { tickSpacing, allowedRange } = this.props;
    const rangeSpan = (allowedRange[1] - allowedRange[0]) * 4 * tickSpacing;
    const minimum = allowedRange[0] * 4 * tickSpacing;
    const maximum = minimum + rangeSpan;
    return Math.min(maximum, Math.max(minimum, position));
  };

  /**
   * Takes the current time value and rounds it to 15 minutes.
   * Called whenever a user-provided value is supplied to the component
   * to ensure it is always rounded.
   */
  enforceTimeRounding = () => {
    const { value, onChange } = this.props;
    if (onChange && value.minutes() % 15 !== 0) {
      const rounded = value
        .clone()
        .minutes(roundMinutes(value.minutes()))
        .seconds(0);
      onChange(rounded);
    }
  };

  /**
   * Returns the physical timeline position based on the current
   * scrubbed time. Optionally, you can provide your own base time value
   * as the first parameter. In both cases, any offset from user interaction
   * will be added to the final position.
   *
   * You can pass a time object to override the internal value.
   */
  getPosition = timeValue => {
    const { tickSpacing } = this.props;
    const { internalValue } = this.state;
    const { offset } = this;
    const value = timeValue || internalValue;
    const hours = toHours(value);
    const rawPosition = tickSpacing * hours * 4 - offset;

    return this.capToRange(rawPosition);
  };

  /**
   * Converts the current real scrubber position into a time value.
   */
  getTime = timeValue => {
    const { tickSpacing } = this.props;
    const { internalValue } = this.state;
    const realPosition = this.getPosition(timeValue);
    const hoursWithPartial = realPosition / 4 / tickSpacing;
    const hours = Math.floor(hoursWithPartial);
    const minutes = Math.floor((hoursWithPartial - hours) * 60);
    const roundedMinutes = roundMinutes(minutes);
    return (
      timeValue ||
      internalValue
        .clone()
        .hours(hours)
        .minutes(roundedMinutes)
    );
  };

  /**
   * Bumps the time up or down by the provided number of minutes.
   */
  stepTime = stepMinutes => {
    const { onChange, allowedRange } = this.props;
    const { internalValue } = this.state;
    const newValue = internalValue.clone().add(stepMinutes, 'minutes');
    const hoursWithPartial = toHours(newValue);
    if (
      hoursWithPartial < allowedRange[0] ||
      hoursWithPartial > allowedRange[1]
    ) {
      return;
    }
    this.setState({ internalValue: newValue });
    if (onChange) {
      onChange(newValue);
    }
  };
  incrementTime = () => this.stepTime(15);
  decrementTime = () => this.stepTime(-15);
  canIncrementTime = () =>
    toHours(this.state.internalValue) + 0.25 <= this.props.allowedRange[1];
  canDecrementTime = () =>
    toHours(this.state.internalValue) - 0.25 >= this.props.allowedRange[0];

  /**
   * Forces the timeline element's position to be synchronized with
   * the current calculated position value based on the time value
   * and user input.
   *
   * You can pass a time object to override the current internal value
   */
  syncTimelinePosition = timeValue => {
    if (this.timelineElement) {
      this.timelineElement.style.left =
        '-' + this.getPosition(timeValue) + 'px';
    }
  };

  getEventPosition = ev => {
    if (ev.touches) {
      return ev.touches.item(0).clientX;
    }
    return ev.clientX;
  };

  /**
   * Called when the user first starts manipulating the timeline.
   */
  handleGrab = ev => {
    ev.preventDefault();
    const grabPoint = this.getEventPosition(ev);
    this.setState(({ offset }) => ({
      dragging: true,
      grabPoint,
    }));
  };

  /**
   * We modify the element position on the timeline directly
   * rather than store it in state. Since it's a Pure component,
   * it doesn't get re-rendered as we move, which is critical
   * for performance.
   */
  handleDrag = ev => {
    if (!this.state.dragging) {
      return;
    }

    const dragPoint = this.getEventPosition(ev);
    this.offset = dragPoint - this.state.grabPoint;
    this.syncTimelinePosition();

    this.setState({ potentialTime: this.getTime() });
  };

  /**
   * Called when the user releases the timeline. Sets the time
   * value and calls onChange.
   */
  handleRelease = () => {
    const { tickSpacing } = this.props;
    if (!this.state.dragging) {
      return;
    }

    const newTime = this.getTime();

    if (this.props.onChange) {
      this.props.onChange(newTime);
    }
    this.setState({
      dragging: false,
      grabPoint: null,
      potentialTime: null,
      internalValue: newTime,
    });

    this.offset = 0;
    this.syncTimelinePosition();

    if (this.viewportRef.current && this.viewportRef.current.focus) {
      this.viewportRef.current.focus();
    }
  };

  /**
   * Handles keyboard events on the component so users can
   * scrub time with arrow keys.
   */
  handleKey = ev => {
    // setting dragging: true turns off the smoothing on the
    // timeline movement, which makes the component feel more
    // responsive
    if (ev.key === 'ArrowLeft') {
      this.setState({ dragging: true });
      this.decrementTime();
    } else if (ev.key === 'ArrowRight') {
      this.setState({ dragging: true });
      this.incrementTime();
    }
  };

  /**
   * Resets the dragging state after the user releases
   * a key
   */
  handleKeyUp = () => {
    this.setState({ dragging: false });
  };

  timelineRef = el => {
    if (!el) {
      return;
    }

    this.timelineElement = el;
    this.syncTimelinePosition();
  };

  render() {
    const { offset, dragging, potentialTime, internalValue } = this.state;
    const {
      tickSpacing,
      allowedRange,
      disabled,
      Container,
      NudgeButton,
      Viewport,
      Timeline,
      ...rest
    } = this.props;

    const maximum = this.props.tickSpacing * 4 * 25;
    const minimum = 0;

    const position = this.getPosition();

    return (
      <Container
        onKeyDown={this.handleKey}
        onKeyUp={this.handleKeyUp}
        {...rest}
      >
        <NudgeButton
          direction="left"
          onClick={this.decrementTime}
          disabled={disabled || !this.canDecrementTime()}
          type="button"
        />
        <Viewport
          onMouseDown={this.handleGrab}
          onTouchStart={this.handleGrab}
          disabled={disabled}
          time={potentialTime || internalValue}
          ref={this.viewportRef}
        >
          <Timeline
            dragging={dragging}
            tickSpacing={tickSpacing}
            allowedRange={disabled ? disabledRange : allowedRange}
            ref={this.timelineRef}
          />
        </Viewport>
        <NudgeButton
          direction="right"
          onClick={this.incrementTime}
          disabled={disabled || !this.canIncrementTime()}
          type="button"
        />
      </Container>
    );
  }
}

export default TimeScrubber;
