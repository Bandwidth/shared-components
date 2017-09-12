import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const SubHeaderImpl = styled.h2.withConfig({ displayName: 'SubHeader' })`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.17em;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.brand};
`;

export const SubHeader = ({children, ...rest}) => (
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

export default sharedComponent({ Styled: SubHeaderImpl })(SubHeader);
