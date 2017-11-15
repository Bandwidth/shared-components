import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  background: ${(props) => props.isHighlighted ?
    get('colors.primary.light')(props) :
    get('colors.background.default')(props)
  };
  color: ${get('colors.text.default')};
  display: block;
  padding: ${get('spacing.small')};
  cursor: pointer;
`;
