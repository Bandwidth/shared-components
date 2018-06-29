import styled from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';
import Input from './RadioInput';

const SIZE = '30px';
const PADDING = '0.5em';
const BORDER_WIDTH = '2px';

const calcLabelColor = ({ disabled }) => {
  if (disabled) return 'var(--colors-text-disabled)';
  return 'var(--colors-text-default)';
};

export default styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  user-select: none;

  padding-left: calc(${SIZE} + 10px);
  padding-top: 4px;
  padding-bottom: 5px;
  line-height: 1.5;
  min-height: ${SIZE};
  color: ${calcLabelColor};

  ${Input}:enabled + &:hover::after,
  ${Input}:enabled:focus + &::after {
    box-shadow: var(--shadows-focus-outline);
  }

  /* the check */

  &::before {
    /* label color will take precedence over this unless we mark it important */
    color: var(--colors-text-inverted) !important;
    font-family: var(--fonts-icon);
    text-align: center;
    width: ${SIZE};
    height: ${SIZE};
    display: block;
    position: absolute;
    top: 50%;
    left: calc(${SIZE} / 2);
    transform: translate(-50%, -50%);
    z-index: 1;
    font-size: 1.5em;
    line-height: 1.5;
    transition: all 0.2s ease;
  }

  /* the bubble */

  &::after {
    content: '';
    border-style: solid;
    border-radius: ${SIZE};
    border-width: ${BORDER_WIDTH};
    width: calc(${SIZE} - 2 * ${BORDER_WIDTH});
    height: calc(${SIZE} - 2 * ${BORDER_WIDTH});
    display: block;
    position: absolute;
    top: 50%;
    left: calc(${SIZE} / 2);
    transform: translate(-50%, -50%);
    transition: all 0.2s ease;
  }
`;
