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

    color: var(--colors-text-inverted);

    font-family: var(--fonts-icon);
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

    background: var(--colors-background-default);
    border-color: var(--colors-primary-dark);
    border-width: var(--thicknesses-wide);
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
    box-shadow: var(--shadows-focus-outline);
  }
  ${Input}:checked + &::after {
    background: var(--colors-primary-dark);
  }

  ${Input}:disabled + & {
    color: var(--colors-text-disabled);
    cursor: default;
  }
  ${Input}:disabled + &::after {
    background: var(--colors-background-disabled);
    border-color: var(--colors-border-disabled);
  }
  ${Input}:disabled:checked + & {
    &::after {
      background: var(--colors-background-disabled-selected);
      border-color: var(--colors-border-disabled);
    }

    &::before {
      color: var(--colors-text-inverted);
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
