import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubHeaderImpl = styled.h2.withConfig({ displayName: 'SubHeader' })`
  color: ${({ theme }) => theme.subheader.fg};
  font-size: ${({ theme }) => theme.subheader.fontSize};
  font-weight: ${({ theme }) => theme.subheader.fontWeight};
  font-family: ${({ theme }) => theme.subheader.fontFamily};
`;

const SubHeader = ({children, ...rest}) => (
  <SubHeaderImpl {...rest}>{children}</SubHeaderImpl>
)

SubHeader.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

SubHeader.defaultProps = {
  className: null,
  id: null,
};

export default SubHeader;
