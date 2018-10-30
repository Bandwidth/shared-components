import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

import Block from './CodeBlock';

const Code = styled.code.withConfig({ displayName: 'Code' })`
  white-space: pre;

  font-family: ${get('fonts.monospace')};
  font-size: 0.85em;

  background: ${get('colors.gray.light')};
  color: ${get('colors.text.default')};
  border-color: ${get('colors.border.medium')};
  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  border-radius: 3px;

  padding: 0.3em;
  margin: 0;

  display: inline-block;
`;

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

Code.Block = Block;

/**
 * @component
 */
export default Code;
