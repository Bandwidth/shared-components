import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

import Block from './CodeBlock';
import Container from './CodeContainer';

const select = theme
  .register('Code', ({ colors, fonts }) => ({
    fontFamily: fonts.monospace,
    fontSize: '0.85em',
    background: colors.gray.light,
    color: colors.text.default,
    borderColor: colors.gray.border,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '3px',
    padding: '0.3em',
    margin: '0',
  }))
  .createSelector();

const CodeImpl = theme.connect(styled.pre.withConfig({ displayName: 'Code' })`
  ${spreadStyles(select)}
  display: inline-block;
`);

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

Code.Block = Block;
Code.Container = Container;
Code.Styled = CodeImpl;

export default Code;
