import styled, { keyframes } from 'styled-components';
import get from 'extensions/themeGet';
import arrowImage from '../arrow.png';

const ARROW_SIZE = '35px';

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

const SelectWrapper = styled.div`
  width: 100%;
  color: ${get('colors.text.default')};

  .Select {
    position: relative;
    font-size: 1em;
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
    background-color: ${get('colors.background.disabled')};
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
    background-color: ${get('colors.background.default')};
    border-color: ${get('colors.border.light')};
    border-radius: 0;
    border-width: ${get('thicknesses.normal')};
    border-style: solid;
    color: inherit;
    cursor: default;
    border-spacing: 0;
    border-collapse: separate;
    outline: none;
    overflow: hidden;
    position: relative;
    width: 100%;
    min-height: 46px;
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
    border-color: ${get('colors.border.medium')};
  }

  .is-focused:not(.is-open) > .Select-control {
    box-shadow: inset 0 -5px 0 ${get('colors.primary.light')};
  }

  .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    bottom: 0;
    color: inherit;
    left: 0;
    font-size: inherit;
    line-height: 1;
    padding: ${get('spacing.medium')};
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    left: 0;
  }
  .has-value.Select--single > .Select-control .Select-value .Select-value-label,
  .has-value.is-pseudo-focused.Select--single
    > .Select-control
    .Select-value
    .Select-value-label {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }
  .has-value.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:hover,
  .has-value.is-pseudo-focused.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:hover {
    color: ${get('colors.primary.default')};
    outline: none;
  }
  .has-value.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:focus,
  .has-value.is-pseudo-focused.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:focus {
    color: ${get('colors.primary.default')};
    outline: none;
  }

  & .is-open .Select-control .Select-value .Select-value-label {
    /* the library owner used !important on theirs... bah */

    color: inherit !important;
  }

  .Select-input {
    font-size: inherit;
    line-height: 1;
    padding: ${get('spacing.medium')};
    vertical-align: middle;
  }
  .Select-input > input {
    padding: 0;
    width: 100%;
    background: none transparent;
    border: 0 none;
    box-shadow: none;
    cursor: default;
    display: block;
    margin: 0;
    outline: none;
    line-height: 1;
    font-size: inherit;
    min-height: 1em;
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
    width: 0;
    height: 0;
  }
  .is-loading .Select-placeholder {
    width: 100%;
    display: flex;

    & > * {
      margin: auto;
    }
  }

  .Select-clear-zone {
    animation: ${fadeIn} 200ms;
    color: inherit;
    opacity: 0.5;
    cursor: pointer;
    position: absolute;
    text-align: center;
    width: 17px;
    right: 35px;
    top: 50%;
    transform: translateY(-50%);
  }
  .Select-clear-zone:hover {
    opacity: 1;
  }
  .Select-clear {
    font-size: 20px;
    display: block;
    height: 18px;
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
    width: ${ARROW_SIZE};
    height: ${ARROW_SIZE};
    position: relative;
    background-image: url(${arrowImage});
    background-repeat: no-repeat;
    background-size: ${ARROW_SIZE};
    background-position: center;
    transition: 0.2s;
  }
  .is-open .Select-arrow,
  .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: #666;
  }
  .Select--multi .Select-multi-value-wrapper {
    display: flex;
    flex-direction: row;
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
    background-color: ${get('colors.background.default')};
    border: ${get('thicknesses.normal')} solid ${get('colors.border.medium')};
    border-top-color: ${get('colors.border.light')};
    box-shadow: ${get('shadows.short')};
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
    background-color: ${get('colors.background.default')};
    color: ${get('colors.text.default')};
    cursor: pointer;
    display: block;
    font-size: 14px;
    padding: ${get('spacing.medium')};
  }
  .Select-option.is-geted {
    color: ${get('colors.primary.default')};
  }
  .Select-option.is-focused {
    background-color: ${get('colors.primary.light')};
    color: ${get('colors.text.default')};
  }
  .Select-option.is-disabled {
    color: ${get('colors.gray.medium')};
    cursor: default;
  }
  .Select-noresults {
    box-sizing: border-box;
    color: ${get('colors.gray.medium')};
    cursor: default;
    display: block;
    font-size: 14px;
    padding: ${get('spacing.medium')};
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
    background-color: ${get('colors.primary.light')};
    border-radius: 5px;
    color: ${get('colors.primary.default')};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 0.9em;
    line-height: 1.4;
    margin-left: 5px;
    margin-top: 5px;
    vertical-align: top;
    padding: ${get('spacing.extraSmall')};
    border-width: ${get('thicknesses.normal')};
    border-style: solid;
    border-color: ${get('colors.primary.default')};
  }
  .Select--multi .Select-value-icon,
  .Select--multi .Select-value-label {
    flex: 0 0 auto;
    margin: auto 4px;
  }

  .Select--multi .Select-value-label {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    cursor: default;
  }
  .Select--multi a.Select-value-label {
    color: ${get('colors.primary.default')};
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
    border-right-width: ${get('thicknesses.normal')};
    border-right-style: solid;
    border-right-color: ${get('colors.primary.default')};
    padding-right: 5px;
  }
  .Select--multi .Select-value-icon:hover,
  .Select--multi .Select-value-icon:focus,
  .Select--multi .Select-value-icon:active {
    color: ${get('colors.text.inverted')};
    background: ${get('colors.primary.default')};
  }
  .Select--multi.is-disabled .Select-value {
    background-color: ${get('colors.background.disabled')};
    border-color: ${get('colors.gray.default')};
    border-style: solid;
    border-width: ${get('thicknesses.normal')};
    color: ${get('colors.text.disabled')};
  }
  .Select--multi.is-disabled .Select-value-icon {
    cursor: not-allowed;
    border-right-color: ${get('colors.gray.default')};
    border-right-style: solid;
    border-right-width: ${get('thicknesses.normal')};
  }
  .Select--multi.is-disabled .Select-value-icon:hover,
  .Select--multi.is-disabled .Select-value-icon:focus,
  .Select--multi.is-disabled .Select-value-icon:active {
    background-color: ${get('colors.background.disabled')};
    color: ${get('colors.text.disabled')};
  }
`;

export default SelectWrapper;
