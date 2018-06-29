import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

import Block from './CodeBlock';

const Code = styled.pre.withConfig({ displayName: 'Code' })`
  font-family: var(--fonts-monospace);
  font-size: 0.85em;

  background: var(--colors-gray-light);
  color: var(--colors-text-default);
  border-color: var(--colors-border-medium);
  border-width: var(--thicknesses-normal);
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
