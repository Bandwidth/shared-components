import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  border-width: ${props =>
    props.canDrop ? get('thicknesses.wide')(props) : '0px'};
  border-style: solid;
  border-color: ${get('colors.gray.light')};
  position: relative;
  height: ${({ canDrop, isOver }) =>
    canDrop ? (isOver ? '120px' : '80px') : '0px'};
  transition: height 0.2s ease, border-width 0.2s ease, background 0.2s ease;
  margin-bottom: ${get('spacing.medium')};

  ${props =>
    props.isOver
      ? `background: ${get('colors.gray.light')(props)};`
      : ''} &::after {
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
  }
`;
