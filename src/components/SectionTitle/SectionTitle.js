import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.h3`
  background: ${get('colors.gray.mediumLight')};
  color: ${get('colors.text.default')};
  display: block;
  padding: ${get('spacing.extraSmall')} ${get('spacing.large')};
  margin: 0;
  font-size: 0.9em;
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  width: 100%;
`;
