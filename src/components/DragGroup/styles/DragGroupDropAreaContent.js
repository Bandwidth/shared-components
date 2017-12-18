import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  position: relative;

  &::before {
    content: '';

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    border-width: ${get('thicknesses.wide')};
    border-style: solid;
    border-color: ${get('colors.gray.light')};

    opacity: ${props => (props.canDrop ? 1 : 0)};
    pointer-events: none;
    transition: opacity 0.2s ease;

    z-index: 1;

    background: ${get
      .if(props => props.isOver, 'colors.gray.light')
      .else('colors.background.default')};
  }

  &::after {
    display: ${({ canDrop }) => (canDrop ? 'block' : 'none')};
    content: 'Drop here';
    text-transform: uppercase;
    color: ${get('colors.gray.medium')};
    font-size: 1em;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;
