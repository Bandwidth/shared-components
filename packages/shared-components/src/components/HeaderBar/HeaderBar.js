import styled from 'styled-components';
import irisTheme from 'theme/irisTheme';

const HeaderBar = styled.div.withConfig({ displayName: 'HeaderBar' })`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: ${irisTheme.thicknesses.normal} solid ${irisTheme.colors.gray.border};
`;

/**
 * @component
 */
export default HeaderBar;
