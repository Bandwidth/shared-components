import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const HelpTextImpl = styled.div.withConfig({ displayName: 'HelpText' })`
  color: ${({ theme, error }) => error ? theme.colors.errorText : theme.helpText.fg};
  font-style: italic;
  font-weight: ${({ theme }) => theme.helpText.fontWeight};
  padding: ${({ theme }) => theme.input.helpTextPadding};
  font-family: ${({ theme }) => theme.helpText.fontFamily};
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
