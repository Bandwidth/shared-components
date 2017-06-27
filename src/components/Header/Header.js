import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sub from './SubHeader';

const Header = styled.h1.withConfig({ displayName: 'Header' })`
  color: ${({ theme }) => theme.header.fg};
  font-family: ${({ theme }) => theme.header.fontFamily};
  font-weight: ${({ theme }) => theme.header.fontWeight};
  font-size: ${({ theme }) => theme.header.fontSize};
  margin: ${({ theme }) => theme.header.margin};
  line-height: ${({ theme }) => theme.header.lineHeight};
`;

Header.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Header.defaultProps = {
  className: null,
  id: null,
};

Header.usage = `
A header is large text that usually sits above a section, page, or form.

\`\`\`
<Header>My Page</Header>
<ScrollBox>
  <!-- content -->
</ScrollBox>
\`\`\`
`;

Header.Sub = Sub;
export default Header;
