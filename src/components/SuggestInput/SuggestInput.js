import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Select from 'react-select';
import arrowImage from './arrow.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Container = styled.div`
  width: 100%;
    .Select {
    position: relative;
  }
  .Select,
  .Select div,
  .Select input,
  .Select span {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .Select.is-disabled > .Select-control {
    background-color: #f9f9f9;
  }
  .Select.is-disabled > .Select-control:hover {
    box-shadow: none;
  }
  .Select.is-disabled .Select-arrow-zone {
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }
  .Select-control {
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.borderLight};
    border-radius: 0;
    border-width: 1px;
    border-style: solid;
    color: ${({ theme }) => theme.colors.black};
    cursor: default;
    border-spacing: 0;
    border-collapse: separate;
    outline: none;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .Select-control .Select-input:focus {
    outline: none;
  }

  .is-searchable.is-open > .Select-control {
    cursor: text;
  }
  .is-open > .Select-control .Select-arrow {
    transform: rotate(180deg);
  }
  .is-searchable.is-focused:not(.is-open) > .Select-control {
    cursor: text;
  }

  .is-focused > .Select-control {
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  .is-focused:not(.is-open) > .Select-control {
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.colors.primaryLight};
  }

  .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    bottom: 0;
    color: ${({ theme }) => theme.colors.black};
    left: 0;
    line-height: 1.5;
    padding-left: ${({ theme }) => theme.padding.medium};
    padding-right: ${({ theme }) => theme.padding.medium};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .has-value.Select--single > .Select-control .Select-value .Select-value-label,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
    color: ${({ theme }) => theme.colors.black};
  }
  .has-value.Select--single > .Select-control .Select-value a.Select-value-label,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {
    cursor: pointer;
    text-decoration: none;
  }
  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,
  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {
    color: ${({ theme }) => theme.colors.primaryText};
    outline: none;
    text-decoration: underline;
  }
  .Select-input {
    font-size: 14px;
    line-height: 1;
    padding: 1em;
    vertical-align: middle;
  }
  .Select-input > input {
    width: 100%;
    background: none transparent;
    border: 0 none;
    box-shadow: none;
    cursor: default;
    display: inline-block;
    margin: 0;
    outline: none;
    line-height: 1;
    font-size: 14px;
    /* For IE 8 compatibility */
    -webkit-appearance: none;
  }
  .is-focused .Select-input > input {
    cursor: text;
  }
  .has-value.is-pseudo-focused .Select-input {
    opacity: 0;
  }
  .Select-control:not(.is-searchable) > .Select-input {
    outline: none;
  }
  .Select-loading-zone {
    position: absolute;
    right: 35px;
    top: 50%;
    transform: translateY(-50%);
  }
  .Select-loading {
    box-sizing: border-box;
    animation: ${spin} 400ms infinite linear;
    width: 16px;
    height: 16px;
    display: block;
    border-radius: 50%;
    border: 2px solid transparent;
    border-right-color: ${({ theme }) => theme.colors.primary};
  }
  .Select-clear-zone {
    animation: ${fadeIn} 200ms;
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
    position: relative;
    text-align: center;
    width: 17px;
  }
  .Select-clear-zone:hover {
    color: ${({ theme }) => theme.colors.primaryText};
  }
  .Select-clear {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
  }
  .Select--multi .Select-clear-zone {
    width: 17px;
  }
  .Select-arrow-zone {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
  }
  .Select-arrow {
    display: block;
    width: 35px;
    height: 35px;
    position: relative;
    background-image: url(${arrowImage});
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: center;
    transition: 0.2s;
  }
  .is-open .Select-arrow,
  .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: #666;
  }
  .Select--multi .Select-multi-value-wrapper {
    display: inline-block;
  }
  .Select .Select-aria-only {
    display: inline-block;
    height: 1px;
    width: 1px;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    float: left;
  }

  .Select-menu-outer {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-top-color: ${({ theme }) => theme.colors.borderLight};
    box-shadow: ${({ theme }) => theme.shadows.short};
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
  }
  .Select-menu {
    max-height: 198px;
    overflow-y: auto;
  }
  .Select-option {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    display: block;
    font-size: 14px;
    padding: 1em;
  }
  .Select-option.is-selected {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
  .Select-option.is-focused {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  .Select-option.is-disabled {
    color: ${({ theme }) => theme.colors.disabled};
    cursor: default;
  }
  .Select-noresults {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.grayMed};
    cursor: default;
    display: block;
    font-size: 14px;
    padding: 1em;
  }
  .Select--multi .Select-input {
    vertical-align: middle;
    margin-left: 10px;
    padding: 0;
  }
  .Select--multi.has-value .Select-input {
    margin-left: 5px;
  }
  .Select--multi .Select-value {
    background-color: #ebf5ff;
    border: 1px solid #c2e0ff;
    color: #007eff;
    display: inline-block;
    font-size: 0.9em;
    line-height: 1.4;
    margin-left: 5px;
    margin-top: 5px;
    vertical-align: top;
  }
  .Select--multi .Select-value-icon,
  .Select--multi .Select-value-label {
    display: inline-block;
    vertical-align: middle;
  }
  .Select--multi .Select-value-label {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    cursor: default;
    padding: 2px 5px;
  }
  .Select--multi a.Select-value-label {
    color: #007eff;
    cursor: pointer;
    text-decoration: none;
  }
  .Select--multi a.Select-value-label:hover {
    text-decoration: underline;
  }
  .Select--multi .Select-value-icon {
    cursor: pointer;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    border-right: 1px solid #c2e0ff;
    padding: 1px 5px 3px;
  }
  .Select--multi .Select-value-icon:hover,
  .Select--multi .Select-value-icon:focus {
    background-color: #d8eafd;
    color: #0071e6;
  }
  .Select--multi .Select-value-icon:active {
    background-color: #c2e0ff;
  }
  .Select--multi.is-disabled .Select-value {
    background-color: #fcfcfc;
    border: 1px solid #e3e3e3;
    color: #333;
  }
  .Select--multi.is-disabled .Select-value-icon {
    cursor: not-allowed;
    border-right: 1px solid #e3e3e3;
  }
  .Select--multi.is-disabled .Select-value-icon:hover,
  .Select--multi.is-disabled .Select-value-icon:focus,
  .Select--multi.is-disabled .Select-value-icon:active {
    background-color: #fcfcfc;
  }
`;

const SuggestInput = (props) => (
  <Container>
    <Select
      {...props}
      clearable={false}
      searchable
    />
  </Container>
);

SuggestInput.propTypes = {
  autoBlur: PropTypes.bool,
  autofocus: PropTypes.bool,
  autoload: PropTypes.bool,
  autosize: PropTypes.bool,
  cache: PropTypes.bool,
  className: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  deleteRemoves: PropTypes.bool,
  delimiter: PropTypes.string,
  disabled: PropTypes.bool,
  filterOption: PropTypes.func,
  filterOptions: PropTypes.func,
  ignoreAccents: PropTypes.bool,
  ignoreCase: PropTypes.bool,
  inputProps: PropTypes.object,
  isLoading: PropTypes.bool,
  joinValues: PropTypes.bool,
  loadOptions: PropTypes.func,
  multi: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  onFocus: PropTypes.func,
  onInputChange: PropTypes.func,
  onInputKeyDown: PropTypes.func,
  onOpen: PropTypes.func,
  onValueClick: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  value: PropTypes.any,
};

export default SuggestInput;
