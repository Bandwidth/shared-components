import styled from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';

const SIZE = '1.3em';
const PADDING = '0.2em';




export default styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  padding: ${PADDING} 0 ${PADDING} 2.1em;
  line-height: 1.5em;

  /* the check */

  &::before {
    content: ${({ checked }) => checked ? `"${icons('checkmark')}"` : '""'};
    color: ${get('colors.text.inverted')};
    font-family: ${get('fonts.icon')};
    text-align: center;
    width: ${SIZE};
    height: ${SIZE};
    display: block;
    position: absolute;
    top: calc(${PADDING} + ${SIZE} / 2);
    left: calc(${SIZE} / 2);
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  /* the bubble */

  &::after {
    content: "";
    border: ${get('thicknesses.wide')} solid ${get('colors.primary.dark')};
    border-radius: 100%;
    width: ${SIZE};
    height: ${SIZE};
    display: block;
    position: absolute;
    top: calc(${PADDING} + ${SIZE} / 2);
    left: calc(${SIZE} / 2);
    transform: translate(-50%, -50%);
    transition: all 0.2s ease;
  }
`;
