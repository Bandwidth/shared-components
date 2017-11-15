import { css } from 'styled-components';

export default css`
.SingleDatePicker {
  position: relative;
  display: inline-block
}
.SingleDatePicker_picker {
  z-index: 1;
  background-color: #fff;
  position: absolute
}
.SingleDatePicker_picker__rtl {
  direction: rtl
}
.SingleDatePicker_picker__directionLeft {
  left: 0
}
.SingleDatePicker_picker__directionRight {
  right: 0
}
.SingleDatePicker_picker__openDown {
  top: 72px
}
.SingleDatePicker_picker__openUp {
  bottom: 72px
}
.SingleDatePicker_picker__portal {
  background-color: rgba(0,0,0,.3);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%
}
.SingleDatePicker_picker__fullScreenPortal {
  background-color: #fff
}
.SingleDatePicker_closeButton {
  background: 0 0;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  z-index: 2
}
.SingleDatePicker_closeButton:focus,
.SingleDatePicker_closeButton:hover {
  color: darken(#cacccd,10%);
  text-decoration: none
}
.SingleDatePicker_closeButton_svg {
  height: 15px;
  width: 15px;
  fill: #cacccd
}
.SingleDatePickerInput {
  background-color: #fff;
  border: 1px solid #dbdbdb
}
.SingleDatePickerInput__rtl {
  direction: rtl
}
.SingleDatePickerInput__disabled {
  background-color: #cacccd
}
.SingleDatePickerInput_clearDate {
  background: 0 0;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  padding: 10px;
  margin: 0 10px 0 5px
}
.SingleDatePickerInput_clearDate:focus,
.SingleDatePickerInput_clearDate:hover {
  background: #dbdbdb;
  border-radius: 50%
}
.SingleDatePickerInput_clearDate__hide {
  visibility: hidden
}
.SingleDatePickerInput_clearDate_svg {
  fill: #82888a;
  height: 12px;
  width: 15px;
  vertical-align: middle
}
.SingleDatePickerInput_calendarIcon {
  background: 0 0;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  padding: 10px;
  margin: 0 5px 0 10px
}
.SingleDatePickerInput_calendarIcon_svg {
  fill: #82888a;
  height: 15px;
  width: 14px;
  vertical-align: middle
}
.DateRangePicker {
  position: relative;
  display: inline-block
}
.DateRangePicker_picker {
  z-index: 1;
  background-color: #fff;
  position: absolute
}
.DateRangePicker_picker__rtl {
  direction: rtl
}
.DateRangePicker_picker__directionLeft {
  left: 0
}
.DateRangePicker_picker__directionRight {
  right: 0
}
.DateRangePicker_picker__openDown {
  top: 72px
}
.DateRangePicker_picker__openUp {
  bottom: 72px
}
.DateRangePicker_picker__portal {
  background-color: rgba(0,0,0,.3);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%
}
.DateRangePicker_picker__fullScreenPortal {
  background-color: #fff
}
.DateRangePicker_closeButton {
  background: 0 0;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  z-index: 2
}
.DateRangePicker_closeButton:focus,
.DateRangePicker_closeButton:hover {
  color: darken(#cacccd,10%);
  text-decoration: none
}
.DateRangePicker_closeButton_svg {
  height: 15px;
  width: 15px;
  fill: #cacccd
}
.DayPicker {
  background: #fff;
  position: relative;
  text-align: left
}
.DayPicker__horizontal {
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.07);
  border-radius: 3px
}
.DayPicker__verticalScrollable {
  height: 100%
}
.DayPicker__hidden {
  visibility: hidden
}
.DayPicker_portal__horizontal {
  box-shadow: none;
  position: absolute;
  left: 50%;
  top: 50%
}
.DayPicker_portal__vertical {
  position: initial
}
.DayPicker_focusRegion {
  outline: 0
}
.DayPicker_weekHeaders {
  position: relative
}
.DayPicker_weekHeaders__horizontal {
  margin-left: 9px
}
.DayPicker_weekHeader {
  color: #757575;
  position: absolute;
  top: 62px;
  z-index: 2;
  padding: 0 13px;
  text-align: left
}
.DayPicker_weekHeader__vertical {
  left: 50%
}
.DayPicker_weekHeader__verticalScrollable {
  top: 0;
  display: table-row;
  border-bottom: 1px solid #dbdbdb;
  background: #fff;
  margin-left: 0;
  left: 0;
  width: 100%;
  text-align: center
}
.DayPicker_weekHeader_ul {
  list-style: none;
  margin: 1px 0;
  padding-left: 0;
  padding-right: 0
}
.DayPicker_weekHeader_li {
  display: inline-block;
  text-align: center
}
.DayPicker_transitionContainer {
  position: relative;
  overflow: hidden;
  border-radius: 3px
}
.DayPicker_transitionContainer__horizontal {
  -webkit-transition: height .2s ease-in-out;
  -moz-transition: height .2s ease-in-out;
  transition: height .2s ease-in-out
}
.DayPicker_transitionContainer__vertical {
  width: 100%
}
.DayPicker_transitionContainer__verticalScrollable {
  padding-top: 20px;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-y: scroll
}
.DayPickerKeyboardShortcuts_buttonReset {
  background: 0 0;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  cursor: pointer
}
.DayPickerKeyboardShortcuts_buttonReset:active {
  outline: 0
}
.DayPickerKeyboardShortcuts_show {
  width: 22px;
  position: absolute;
  z-index: 2
}
.DayPickerKeyboardShortcuts_show__bottomRight {
  border-top: 26px solid transparent;
  border-right: 33px solid #00a699;
  bottom: 0;
  right: 0
}
.DayPickerKeyboardShortcuts_show__bottomRight:hover {
  border-right: 33px solid #008489
}
.DayPickerKeyboardShortcuts_show__topRight {
  border-bottom: 26px solid transparent;
  border-right: 33px solid #00a699;
  top: 0;
  right: 0
}
.DayPickerKeyboardShortcuts_show__topRight:hover {
  border-right: 33px solid #008489
}
.DayPickerKeyboardShortcuts_show__topLeft {
  border-bottom: 26px solid transparent;
  border-left: 33px solid #00a699;
  top: 0;
  left: 0
}
.DayPickerKeyboardShortcuts_show__topLeft:hover {
  border-left: 33px solid #008489
}
.DayPickerKeyboardShortcuts_showSpan {
  color: #fff;
  position: absolute
}
.DayPickerKeyboardShortcuts_showSpan__bottomRight {
  bottom: 0;
  right: -28px
}
.DayPickerKeyboardShortcuts_showSpan__topRight {
  top: 1px;
  right: -28px
}
.DayPickerKeyboardShortcuts_showSpan__topLeft {
  top: 1px;
  left: -28px
}
.DayPickerKeyboardShortcuts_panel {
  overflow: auto;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  padding: 22px;
  margin: 33px
}
.DayPickerKeyboardShortcuts_title {
  font-size: 16px;
  font-weight: 700;
  margin: 0
}
.DayPickerKeyboardShortcuts_list {
  list-style: none;
  padding: 0
}
.DayPickerKeyboardShortcuts_close {
  position: absolute;
  right: 22px;
  top: 22px;
  z-index: 2
}
.DayPickerKeyboardShortcuts_close:active {
  outline: 0
}
.DayPickerKeyboardShortcuts_closeSvg {
  height: 15px;
  width: 15px;
  fill: #cacccd
}
.DayPickerKeyboardShortcuts_closeSvg:focus,
.DayPickerKeyboardShortcuts_closeSvg:hover {
  fill: #82888a
}
.KeyboardShortcutRow {
  list-style: none;
  margin: 6px 0
}
.KeyboardShortcutRow__block {
  margin-bottom: 16px
}
.KeyboardShortcutRow_keyContainer {
  display: inline-block;
  white-space: nowrap;
  text-align: right;
  margin-right: 6px
}
.KeyboardShortcutRow_keyContainer__block {
  width: auto;
  text-align: left;
  display: inline
}
.KeyboardShortcutRow_key {
  font-family: monospace;
  font-size: 12px;
  text-transform: uppercase;
  background: #f2f2f2;
  padding: 2px 6px
}
.KeyboardShortcutRow_action {
  display: inline;
  word-break: break-word;
  margin-left: 8px
}
.DayPickerNavigation_container {
  position: relative;
  z-index: 2
}
.DayPickerNavigation_container__vertical {
  background: #fff;
  box-shadow: 0 0 5px 2px rgba(0,0,0,.1);
  position: absolute;
  bottom: 0;
  left: 0;
  height: 52px;
  width: 100%
}
.DayPickerNavigation_container__verticalScrollable {
  position: relative
}
.DayPickerNavigation_button {
  cursor: pointer;
  line-height: .78;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}
.DayPickerNavigation_button__default {
  border: 1px solid #e4e7e7;
  background-color: #fff;
  color: #757575
}
.DayPickerNavigation_button__default:focus,
.DayPickerNavigation_button__default:hover {
  border: 1px solid #c4c4c4
}
.DayPickerNavigation_button__default:active {
  background: #f2f2f2
}
.DayPickerNavigation_button__horizontal {
  border-radius: 3px;
  padding: 6px 9px;
  top: 18px;
  position: absolute
}
.DayPickerNavigation_leftButton__horizontal {
  left: 22px
}
.DayPickerNavigation_rightButton__horizontal {
  right: 22px
}
.DayPickerNavigation_button__vertical {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 50%
}
.DayPickerNavigation_button__vertical__default {
  padding: 5px
}
.DayPickerNavigation_nextButton__vertical__default {
  border-left: 0
}
.DayPickerNavigation_nextButton__verticalScrollable {
  width: 100%
}
.DayPickerNavigation_svg__horizontal {
  height: 19px;
  width: 19px;
  fill: #82888a
}
.DayPickerNavigation_svg__vertical {
  height: 42px;
  width: 42px;
  fill: #565a5c
}
.CalendarMonthGrid {
  background: #fff;
  text-align: left;
  z-index: 0
}
.CalendarMonthGrid__animating {
  z-index: 1
}
.CalendarMonthGrid__horizontal {
  position: absolute;
  left: 9px
}
.CalendarMonthGrid__vertical {
  margin: 0 auto
}
.CalendarMonthGrid__vertical_scrollable {
  margin: 0 auto;
  overflow-y: scroll
}
.CalendarMonthGrid_month__horizontal {
  display: inline-block;
  vertical-align: top;
  min-height: 100%
}
.CalendarMonthGrid_month__hideForAnimation {
  position: absolute;
  z-index: -1;
  opacity: 0;
  pointer-events: none
}
.CalendarMonth {
  background: #fff;
  text-align: center;
  padding: 0 13px;
  vertical-align: top;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}
.CalendarMonth_table {
  border-collapse: collapse;
  border-spacing: 0
}
.CalendarMonth_caption {
  color: #565a5c;
  font-size: 18px;
  text-align: center;
  padding-top: 22px;
  padding-bottom: 37px;
  caption-side: initial
}
.CalendarMonth_caption__verticalScrollable {
  padding-top: 12px;
  padding-bottom: 7px
}
.CalendarDay_container {
  border: 1px solid #e4e7e7;
  padding: 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #565a5c;
  background: #fff
}
.CalendarDay_container:hover {
  background: #e4e7e7;
  border: 1px double #e4e7e7;
  color: inherit
}
.CalendarDay_button {
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer
}
.CalendarDay_button:active {
  outline: 0
}
.CalendarDay_button__default {
  cursor: default
}
.CalendarDay__outside {
  border: 0;
  background: #fff;
  color: #565a5c
}
.CalendarDay__blocked_minimum_nights {
  background: #fff;
  border: 1px solid #eceeee;
  color: #cacccd
}
.CalendarDay__blocked_minimum_nights:active,
.CalendarDay__blocked_minimum_nights:hover {
  background: #fff;
  color: #cacccd
}
.CalendarDay__highlighted_calendar {
  background: #ffe8bc;
  color: #565a5c
}
.CalendarDay__highlighted_calendar:active,
.CalendarDay__highlighted_calendar:hover {
  background: #ffce71;
  color: #565a5c
}
.CalendarDay__selected_span {
  background: #66e2da;
  border: 1px solid #33dacd;
  color: #fff
}
.CalendarDay__selected_span:active,
.CalendarDay__selected_span:hover {
  background: #33dacd;
  border: 1px solid #33dacd;
  color: #fff
}
.CalendarDay__last_in_range {
  border-right: #00a699
}
.CalendarDay__selected,
.CalendarDay__selected:active,
.CalendarDay__selected:hover {
  background: #00a699;
  border: 1px solid #00a699;
  color: #fff
}
.CalendarDay__hovered_span,
.CalendarDay__hovered_span:hover {
  background: #b2f1ec;
  border: 1px solid #80e8e0;
  color: #007a87
}
.CalendarDay__hovered_span:active {
  background: #80e8e0;
  border: 1px solid #80e8e0;
  color: #007a87
}
.CalendarDay__blocked_calendar,
.CalendarDay__blocked_calendar:active,
.CalendarDay__blocked_calendar:hover {
  background: #cacccd;
  border: 1px solid #cacccd;
  color: #82888a
}
.CalendarDay__blocked_out_of_range,
.CalendarDay__blocked_out_of_range:active,
.CalendarDay__blocked_out_of_range:hover {
  background: #fff;
  border: 1px solid #e4e7e7;
  color: #cacccd
}
.DateRangePickerInput {
  background-color: #fff;
  border: 1px solid #cacccd;
  display: inline-block
}
.DateRangePickerInput__disabled {
  background: #cacccd
}
.DateRangePickerInput__rtl {
  direction: rtl
}
.DateRangePickerInput_arrow {
  display: inline-block;
  vertical-align: middle
}
.DateRangePickerInput_arrow_svg {
  vertical-align: middle;
  fill: #565a5c;
  height: 24px;
  width: 24px
}
.DateRangePickerInput_clearDates {
  background: 0 0;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  padding: 10px;
  margin: 0 10px 0 5px
}
.DateRangePickerInput_clearDates:focus,
.DateRangePickerInput_clearDates:hover {
  background: #dbdbdb;
  border-radius: 50%
}
.DateRangePickerInput_clearDates__hide {
  visibility: hidden
}
.DateRangePickerInput_clearDates_svg {
  fill: #82888a;
  height: 12px;
  width: 15px;
  vertical-align: middle
}
.DateRangePickerInput_calendarIcon {
  background: 0 0;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  padding: 10px;
  margin: 0 5px 0 10px
}
.DateRangePickerInput_calendarIcon_svg {
  fill: #82888a;
  height: 15px;
  width: 14px;
  vertical-align: middle
}
.DateInput {
  font-weight: 200;
  font-size: 18px;
  line-height: 24px;
  color: #757575;
  margin: 0;
  padding: 8px;
  background: #fff;
  position: relative;
  display: inline-block;
  width: 130px;
  vertical-align: middle
}
.DateInput__withCaret:after,
.DateInput__withCaret:before {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: auto;
  border: 10px solid transparent;
  left: 22px;
  z-index: 2
}
.DateInput__openUp:before {
  border-bottom: 0;
  top: -24px;
  border-top-color: rgba(0,0,0,.1)
}
.DateInput__openUp:after {
  border-bottom: 0;
  top: -25px;
  border-top-color: #fff
}
.DateInput__openDown:before {
  border-top: 0;
  top: 62px;
  border-bottom-color: rgba(0,0,0,.1)
}
.DateInput__openDown:after {
  border-top: 0;
  top: 63px;
  border-bottom-color: #fff
}
.DateInput__disabled {
  background: #cacccd
}
.DateInput_input {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  height: 100%;
  width: 100%
}
.DateInput_input__readOnly {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}
.DateInput_screenReaderMessage {
  border: 0;
  clip: rect(0,0,0,0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px
}
.DateInput_displayText {
  padding: 4px 8px;
  white-space: nowrap;
  overflow: hidden
}
.DateInput_displayText__hasInput {
  color: #565a5c
}
.DateInput_displayText__focused {
  background: #99ede6;
  border-color: #99ede6;
  border-radius: 3px;
  color: #007a87
}
.DateInput_displayText__disabled {
  font-style: italic
}
`;
