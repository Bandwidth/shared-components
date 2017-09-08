import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

import Block from './CodeBlock';
import Container from './CodeContainer';

const CodeImpl = styled.pre.withConfig({ displayName: 'Code' })`
  font-family: ${({ theme }) => theme.fonts.monospace};
  fontSize: 0.85em;
  background: #f1f1f1;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid #e4e4e4;
  padding: 0.3em;
  borderRadius: 3px;
  margin: 0;
`;

export const Code = ({...rest, children}) => (
  <CodeImpl {...rest}>{children}</CodeImpl>
)

Code.propTypes = {
  /**
   * A class name to pass to the element.
   */
  className: PropTypes.string,
  /**
   * An id to pass to the element.
   */
  id: PropTypes.string,
};

Code.defaultProps = {
  className: null,
  id: null,
};

export default sharedComponent({ Block, Container, Styled: CodeImpl })(Code);
