import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import get from 'extensions/themeGet';

import Block from './CodeBlock';

type CodeStyle = StyledComponentClass<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
  any
>;

interface Code extends CodeStyle {
  Block?: StyledComponentClass<any, any>;
}

/** Applies styling to render code inside a larger paragraph.*/
const Code: Code = styled.code`
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

Code.Block = Block;

export default Code;
