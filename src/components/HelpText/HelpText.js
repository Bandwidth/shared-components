import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const HelpTextImpl = styled.div.withConfig({ displayName: 'HelpText' })`
  color: ${({ theme, error }) =>
    error ? theme.colors.errorText : theme.colors.grayLightText};
  font-style: italic;
  font-weight: 300;
  padding: 0.4em 0 0 0;
  font-family: ${({ theme }) => theme.fonts.brand};
`;

export const HelpText = ({children, ...rest}) => (
  <HelpTextImpl {...rest}>{children}</HelpTextImpl>
)

HelpText.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Whether this help text is in an error state
   */
  error: PropTypes.bool,
};

HelpText.defaultProps = {
  className: null,
  id: null,
};

export default sharedComponent({ Styled: HelpTextImpl })(HelpText);
