import styled, { css, keyframes } from 'styled-components';
import get from 'extensions/themeGet';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const expand = keyframes`
  from {
    transform: translateY(-50%) scaleY(0);
    opacity: 0;
  }
  to {
    transform: translateY(0) scaleY(1);
    opacity: 1;
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

  .Select-placeholder ~ .Select-input,
  .Select-value ~ .Select-input {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .Select-control {
    background-color: ${get('colors.background.default')};
    border-color: ${props =>
      props.invalid
        ? get('colors.negative.border')
        : get('colors.border.light')};
    border-radius: 0;
    border-width: ${get('thicknesses.wide')};
    border-style: solid;
    color: inherit;
    cursor: default;
    border-spacing: 0;
    border-collapse: separate;
    outline: none;
    overflow: hidden;
    position: relative;
    width: 100%;
    min-height: 53px;
    display: flex;
    & > * {
      flex: 0 1 auto;
    }
    & > .Select-multi-value-wrapper {
      flex: 1 1 auto;
    }
  }

  ${props =>
    props.invalid
      ? css`
          .Select:not(.is-open) > .Select-control {
            box-shadow: inset 0 -5px 0 ${get('colors.negative.light')};
          }
        `
      : ''} .Select-control .Select-input:focus {
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
    color: ${({ value }) => (value ? 'inherit' : get('colors.text.disabled'))};
    font-size: inherit;
    line-height: 1.5;
    padding: calc(${get('spacing.medium')} - 1px) ${get('spacing.medium')};
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    line-height: 1.5;
    padding: calc(${get('spacing.medium')} - 1px) ${get('spacing.medium')};
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
    font: ${get('fonts.brand')};
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
    text-align: center;
    padding: 9px 10px;
  }
  .Select-clear-zone:hover {
    opacity: 1;
  }
  .Select-clear {
    font-size: 20px;
    display: block;
    height: 26px;
  }
  .Select--multi .Select-clear-zone {
    width: 17px;
  }
  .Select-arrow-zone {
    cursor: pointer;
    display: inline-block;
  }
  .Select-arrow {
    display: block;
    padding: calc(${get('spacing.medium')} - 1px) ${get('spacing.medium')};
    transition: transform 200ms;
    &::before {
      font-family: ${get('fonts.icon')};
      content: '\\f117';
    }
  }
  .is-open .Select-arrow,
  .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: ${get('colors.gray.default')};
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
    border: ${get('thicknesses.wide')} solid ${get('colors.border.medium')};
    border-top-width: 0;
    box-shadow: ${get('shadows.short')};
    box-sizing: border-box;
    max-height: 200px;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000000;
    -webkit-overflow-scrolling: touch;
    overflow: hidden;
    animation: ${expand} 200ms;
  }
  .Select-menu {
    max-height: 198px;
    overflow-y: auto;
  }
  .Select-option {
    box-sizing: border-box;
    border-bottom: ${get('thicknesses.normal')} solid
      ${get('colors.gray.border')};
    background-color: ${get('colors.background.default')};
    color: ${get('colors.text.default')};
    cursor: pointer;
    display: block;
    padding: calc(${get('spacing.extraSmall')} - 1px) ${get('spacing.medium')};
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
    color: ${get('colors.text.default')};
    cursor: default;
    display: block;
    padding: calc(${get('spacing.extraSmall')} - 1px) ${get('spacing.medium')};
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
    border-width: ${get('thicknesses.wide')};
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
    border-right-width: ${get('thicknesses.wide')};
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
    border-width: ${get('thicknesses.wide')};
    color: ${get('colors.text.disabled')};
  }
  .Select--multi.is-disabled .Select-value-icon {
    cursor: not-allowed;
    border-right-color: ${get('colors.gray.default')};
    border-right-style: solid;
    border-right-width: ${get('thicknesses.wide')};
  }
  .Select--multi.is-disabled .Select-value-icon:hover,
  .Select--multi.is-disabled .Select-value-icon:focus,
  .Select--multi.is-disabled .Select-value-icon:active {
    background-color: ${get('colors.background.disabled')};
    color: ${get('colors.text.disabled')};
  }
`;

export default SelectWrapper;
