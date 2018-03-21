import styled from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';

const SIZE = '30px';
const PADDING = '0.5em';
const BORDER_WIDTH = '2px';

const calcLabelColor = ({ disabled }) => {
  if (disabled) return get('colors.text.disabled');
  return get('colors.text.default');
};

export default styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  padding-left: calc(${SIZE} + 10px);
  padding-top: 4px;
  line-height: 1.5em;
  min-height: ${SIZE};
  color: ${calcLabelColor};
  /*
    We need to attach the hover to the label because it isn't
    hidden from view like the checkbox is. However, <label>
    doesn't support the disabled attribute natively.
  */
  &:hover::after,
  &:focus::after,
  &:active::after {
    box-shadow: ${({ disabled }) =>
      disabled ? '' : get('shadows.focusOutline')};
  }

  /* the check */

  &::before {
    /* label color will take precedence over this unless we mark it important */
    color: ${get('colors.text.inverted')} !important;
    font-family: ${get('fonts.icon')};
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
