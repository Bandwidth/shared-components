import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.h5`
  color: ${get('colors.text.default')};
  padding: ${get('spacing.extraSmall')} ${get('spacing.small')};
  margin: 0;
  font-weight: 800;
  font-size: 0.95em;
  background: ${get('colors.gray.light')};
`;
