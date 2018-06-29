import styled from 'styled-components';
import get from 'extensions/themeGet';
import icons from '../../../Icon/icons';
import Icon from '../../../Icon';

export default styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: var(--spacing-small);

  &::before {
    content: "${icons('expandArrow')}";
    font-family: var(--fonts-icon);
    font-size: 10px;
    transform: ${({ expanded }) =>
      expanded ? 'rotate(0deg)' : 'rotate(-90deg)'};
    transition: transform 0.2s ease;
    flex: 0 0 auto;
    margin: auto;
  }

  &::after {
    content: '';
    border-bottom-width: var(--thicknesses-normal);
    border-bottom-style: dashed;
    border-bottom-color: var(--colors-border-medium);
    flex: 1 0 0;
    margin: auto;
  }

  & > ${Icon} {
    display: none;
    position: absolute;
    right: 0;
    background: var(--colors-background-default);
    font-size: 12px;
    color: var(--colors-text-default);
  }

  &:hover > ${Icon} {
    display: block;
  }
`;
