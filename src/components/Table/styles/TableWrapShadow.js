import styled from 'styled-components';
import get from 'extensions/themeGet';

const shadowColor = 'var(--colors-shadow-default)';

export default styled.div`
  background: var(--colors-background-default);
  border-width: var(--thicknesses-normal);
  border-style: solid;
  border-color: var(--colors-border-medium);
  border-radius: 5px 5px 0 0;
  font-size: 1em;
  width: 100%;
  overflow-x: auto;
  position: relative;

  ${props => {
    switch (props.shadow) {
      case 'left':
        return `box-shadow: inset 15px 0 10px -10px var(--colors-shadow-default);`;
      case 'right':
        return `box-shadow: inset -15px 0 10px -10px var(--colors-shadow-default);`;
      case 'both':
        return `box-shadow: inset -15px 0 10px -10px var(--colors-shadow-default),
          inset 15px 0 10px -10px var(--colors-shadow-default);`;
      default:
        return '';
    }
  }};
`;
