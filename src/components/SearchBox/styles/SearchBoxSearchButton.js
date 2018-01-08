import styled from 'styled-components';
import icons from 'components/Icon/icons';
import get from 'extensions/themeGet';

const ACTIVE_SIZE = '3em';
const INACTIVE_SIZE = '2em';

export default styled.button`
  position: relative;
  display: block;
  width: 0;
  overflow: visible;
  background: none;
  border: none;
  padding: 0;
  font-size: 1.5em;
  outline: none;

  &::before {
    position: absolute;
    top: -0.125em;
    left: calc(-${ACTIVE_SIZE} / 2);
    font-family: Bandwidth;
    content: "${icons('search')}";
    width: ${ACTIVE_SIZE};
    height: ${ACTIVE_SIZE};
    line-height: ${ACTIVE_SIZE};
    background: ${get('colors.primary.default')};
    color: ${get('colors.text.inverted')};
    text-align: center;
    border-radius: 100%;
    transition: 0.2s all ease;
    cursor: pointer;
  }

  &:not(:disabled):hover::before {
    background: ${get('colors.primary.alternate')};
    color: ${get('colors.text.inverted')};
    box-shadow: ${get('shadows.short')};
  }

  &:disabled::before {
    width: ${INACTIVE_SIZE};
    height: ${INACTIVE_SIZE};
    top: 0.25em;
    line-height: ${INACTIVE_SIZE};
    font-size: 1em;
    left: calc(-${INACTIVE_SIZE} - ${get('spacing.small')});
    background: ${get('colors.background.default')};
    color: ${get('colors.text.disabled')};
    cursor: default;
  }
`;
