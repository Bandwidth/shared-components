import React, { createRef } from 'react';
import { Viewport, Timeline, Container, NudgeButton } from './components';
import moment from 'moment';
import { noop } from 'lodash';

const now = moment();

class TimeScrubber extends React.Component {
  static defaultProps = {
    tickSpacing: 11,
    value: now,
    disabled: false,
    allowedRange: [0, 24],
  };

  state = {
    offset: 0,
    dragging: false,
    grabPoint: null,
  };

  viewportRef = createRef();

  componentDidMount() {
    window.addEventListener('mousemove', this.handleDrag);
    window.addEventListener('mouseup', this.handleRelease);
    this.enforceTimeRounding();
  }

  componentDidUpdate() {
    this.enforceTimeRounding();
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleDrag);
    window.removeEventListener('mouseup', this.handleRelease);
  }

  roundMinutes = minutes => Math.round(minutes / 15.0) * 15;
  capToRange = position => {
    const { tickSpacing, allowedRange } = this.props;
    const rangeSpan = (allowedRange[1] - allowedRange[0]) * 4 * tickSpacing;
    const minimum = allowedRange[0] * 4 * tickSpacing;
    const maximum = minimum + rangeSpan;
    return Math.min(maximum, Math.max(minimum, position));
  };

  enforceTimeRounding = () => {
    const { value, onChange } = this.props;
    if (onChange && value.minutes() % 15 !== 0) {
      onChange(value.clone().minutes(this.roundMinutes(value.minutes())));
    }
  };

  getPosition = () => {
    const { value, tickSpacing } = this.props;
    const { offset } = this.state;
    const hour = value.hour();
    const minute = value.minute();
    const maximum = tickSpacing * 4 * 24;
    const minimum = 0;

    // round minute to 15 min increments, convert to hours
    const minuteHourPartial = this.roundMinutes(minute) / 60.0;
    const rawPosition = tickSpacing * (hour + minuteHourPartial) * 4 - offset;

    return this.capToRange(rawPosition);
  };

  getTime = () => {
    const { value, tickSpacing } = this.props;
    const realPosition = this.getPosition();
    const hoursWithPartial = realPosition / 4 / tickSpacing;
    const hours = Math.floor(hoursWithPartial);
    const minutes = Math.floor((hoursWithPartial - hours) * 60);
    const roundedMinutes = this.roundMinutes(minutes);
    return value
      .clone()
      .hours(hours)
      .minutes(roundedMinutes);
  };

  stepTime = stepMinutes => {
    const { value, onChange, allowedRange } = this.props;
    const newValue = value.clone().add(stepMinutes, 'minutes');
    const hoursWithPartial = newValue.hours() + newValue.minutes() / 60.0;
    if (
      hoursWithPartial < allowedRange[0] ||
      hoursWithPartial > allowedRange[1]
    ) {
      return;
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  incrementTime = () => this.stepTime(15);
  decrementTime = () => this.stepTime(-15);

  handleGrab = ev => {
    ev.preventDefault();
    const grabPoint = ev.clientX;
    this.setState(({ offset }) => ({
      dragging: true,
      grabPoint,
    }));
  };

  handleDrag = ev => {
    if (!this.state.dragging) {
      return;
    }

    const dragPoint = ev.clientX;

    this.setState(({ grabPoint, storedOffset }) => ({
      offset: dragPoint - grabPoint,
    }));
  };

  handleRelease = () => {
    const { tickSpacing } = this.props;
    const { offset } = this.state;
    if (!this.state.dragging) {
      return;
    }

    const newTime = this.getTime();

    if (this.props.onChange) {
      this.props.onChange(newTime);
    }
    this.setState({
      dragging: false,
      offset: 0,
      grabPoint: null,
    });

    if (this.viewportRef.current) {
      this.viewportRef.current.focus();
    }
  };

  handleKey = ev => {
    if (ev.key === 'ArrowLeft') {
      this.decrementTime();
    } else if (ev.key === 'ArrowRight') {
      this.incrementTime();
    }
  };

  render() {
    const { offset, dragging } = this.state;
    const { tickSpacing, value, allowedRange, disabled } = this.props;

    const maximum = this.props.tickSpacing * 4 * 25;
    const minimum = 0;

    const position = this.getPosition();
    const displayTime = this.getTime();

    return (
      <Container>
        <NudgeButton direction="left" onClick={this.decrementTime} />
        <Viewport
          onMouseDown={this.handleGrab}
          onKeyDown={this.handleKey}
          disabled={disabled}
          time={displayTime}
          innerRef={this.viewportRef}
        >
          <Timeline
            style={{ left: `${-position}px` }}
            dragging={dragging}
            tickSpacing={tickSpacing}
            allowedRange={disabled ? [-1, -1] : allowedRange}
          />
        </Viewport>
        <NudgeButton direction="right" onClick={this.incrementTime} />
      </Container>
    );
  }
}

export default TimeScrubber;
