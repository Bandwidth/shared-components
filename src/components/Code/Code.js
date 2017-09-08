import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

import Block from './CodeBlock';
import Container from './CodeContainer';

const CodeImpl = styled.pre.withConfig({ displayName: 'Code' })`
  font-family: ${({ theme }) => theme.inlineCode.fontFamily};
  fontSize: ${({ theme }) => theme.inlineCode.fontSize};
  background: ${({ theme }) => theme.inlineCode.bg};
  color: ${({ theme }) => theme.inlineCode.fg};
  border: ${({ theme }) => theme.inlineCode.border};
  padding: ${({ theme }) => theme.inlineCode.padding}
  borderRadius: ${({ theme }) => theme.inlineCode.borderRadius};
  margin: 0;
`;

const Code = ({...rest, children}) => (
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
