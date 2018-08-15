import styled from 'styled-components';
import get from 'extensions/themeGet';

const shadowColor = get('colors.shadow.default');

export default styled.div`
  background: ${get('colors.background.default')};
  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  border-color: ${get('colors.border.medium')};
  border-radius: 5px 5px 0 0;
  font-size: 1em;
  width: 100%;
  overflow-x: auto;
  position: relative;

  ${props => {
    switch (props.shadow) {
      case 'left':
        return `box-shadow: inset 15px 0 10px -10px ${shadowColor(props)}};`;
      case 'right':
        return `box-shadow: inset -15px 0 10px -10px ${shadowColor(props)};`;
      case 'both':
        return `box-shadow: inset -15px 0 10px -10px ${shadowColor(props)},
          inset 15px 0 10px -10px ${shadowColor};`;
      default:
        return '';
    }
  }};
`;
