import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

import Sub from './SubHeader';

const HeaderImpl = styled.h1.withConfig({ displayName: 'Header' })`
  color: ${({ theme }) => theme.header.fg};
  font-family: ${({ theme }) => theme.header.fontFamily};
  font-weight: ${({ theme }) => theme.header.fontWeight};
  font-size: ${({ theme }) => theme.header.fontSize};
  margin: ${({ theme }) => theme.header.margin};
  line-height: ${({ theme }) => theme.header.lineHeight};
`;

const Header = ({...rest, children}) => (
  <HeaderImpl {...rest}>{children}</HeaderImpl>
)

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

export default sharedComponent({ Sub, Styled: HeaderImpl })(Header);
