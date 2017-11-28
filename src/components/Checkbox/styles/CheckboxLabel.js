import styled from 'styled-components';
import get from 'extensions/themeGet';
import Label from '../../Label';
import Input from './CheckboxInput';
import icons from 'components/Icon/icons';

const SIZE = '22px';
const CHECK_SIZE = '14px';

// Builds off the base label
export default Label.extend`
  padding: 0.2em 0 0.2em 2.1em;

  cursor: pointer;
  position: relative;
  user-select: none;

  font-weight: 200;

  /* the check */
  &::before {
    content: "";

    color: ${get('colors.text.inverted')};

    font-family: ${get('fonts.icon')};
    font-size: ${CHECK_SIZE};

    display: block;
    position: absolute;
    top: 50%;
    left: calc(${SIZE} / 2);
    transform: translate(-50%, -48%);
    z-index: 1;
    box-sizing: border-box;
  }

  /* the box */
  &::after {
    content: "";

    background: ${get('colors.background.default')};
    border-color: ${get('colors.primary.dark')};
    border-width: ${get('thicknesses.wide')};
    border-style: solid;
    border-radius: 0.2em;

    width: ${SIZE};
    height: ${SIZE};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: all 0.2s ease;
    box-sizing: border-box;
  }

  ${Input}:focus + &::after {
    box-shadow: ${get('shadows.focusOutline')};
  }
  ${Input}:checked + &::after {
    background: ${get('colors.primary.dark')};
  }
  ${Input}:disabled + & {
    opacity: 0.5;
    &::before { opacity: 0.5 }
  }
  ${Input}:checked + &::before {
    content: "${icons('checkmark')}";
  }
`;
