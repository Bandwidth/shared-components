import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

import Sub from './SubHeader';

const HeaderImpl = styled.h1.withConfig({ displayName: 'Header' })`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.brand};
  font-weight: 100;
  font-size: ${({ mods }) => mods.compact ? '22px' : '2.5em'};
  margin: ${({ mods }) => mods.compact ? '12px' : '0.83em 0 0 0'};
  line-height: ${({ mods }) => mods.compact ? '22px' : '21px'};
`;

export const Header = ({...rest, children}) => (
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
