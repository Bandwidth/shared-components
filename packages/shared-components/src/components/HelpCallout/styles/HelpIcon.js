import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import Icon from 'components/Icon';

export default styled(Icon)`
  color: ${themeGet('colors.primary.alternate')};
  margin: auto;
  margin-left: ${themeGet('spacing.small')};
  font-weight: normal;
`;
