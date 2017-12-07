import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  display: flex;
  flex-direction: row;
  margin: ${get('spacing.extraSmall')} 0;
`;
