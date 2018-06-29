import styled from 'styled-components';
import get from 'extensions/themeGet';
import Input from './CheckboxInput';
import icons from 'components/Icon/icons';

const SIZE = '30px';
const CHECK_SIZE = '21px';
const SMALL_SIZE = '20px';
const SMALL_CHECK_SIZE = '1em';

const CheckboxLabel = styled.label`
  display: block;
  padding: 4px 0 5px calc(${SIZE} + 10px);
  min-height: ${SIZE};
  min-width: ${SIZE};
  line-height: 1.5;

  cursor: pointer;
  position: relative;
  user-select: none;

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
    transition: all 0.2s ease;
  }

  /* the box */
  &::after {
    content: "";

    background: ${get('colors.background.default')};
    border-color: ${get('colors.primary.dark')};
    border-width: ${get('thicknesses.wide')};
    border-style: solid;
    border-radius: 3px;

    width: ${SIZE};
    height: ${SIZE};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: all 0.2s ease;
    box-sizing: border-box;
  }

  ${Input}:hover:not(:disabled) + &::after,
  ${Input}:focus:not(:disabled) + &::after,
  ${Input}:active:not(:disabled) + &::after {
    box-shadow: ${get('shadows.focusOutline')};
  }
  ${Input}:checked + &::after {
    background: ${get('colors.primary.dark')};
  }

  ${Input}:disabled + & {
    color: ${get('colors.text.disabled')};
    cursor: default;
  }
  ${Input}:disabled + &::after {
    background: ${get('colors.background.disabled')};
    border-color: ${get('colors.border.disabled')};
  }
  ${Input}:disabled:checked + & {
    &::after {
      background: ${get('colors.background.disabledSelected')};
      border-color: ${get('colors.border.disabled')};
    }

    &::before {
      color: ${get('colors.text.inverted')};
    }
  }
  ${Input}:checked + &::before {
    content: "${icons('checkmark')}";
  }
`;

CheckboxLabel.Small = styled(CheckboxLabel)`
  padding: 4px 0 5px calc(${SMALL_SIZE} + 10px);
  min-height: ${SMALL_SIZE};
  min-width: ${SMALL_SIZE};

  &::before {
    font-size: ${SMALL_CHECK_SIZE};
    left: calc(${SMALL_SIZE} / 2);
  }

  &::after {
    width: ${SMALL_SIZE};
    height: ${SMALL_SIZE};
  }
`;

export default CheckboxLabel;
