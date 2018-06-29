import styled from 'styled-components';
import get from 'extensions/themeGet';

/**
 * @component
 */
export default styled.pre`
  font-family: var(--fonts-monospace);
  font-size: 1em;

  background: var(--colors-background-inverted);
  color: var(--colors-text-inverted);

  padding: 2em;
  margin: 0;

  word-wrap: break-word;
  white-space: pre-wrap;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  & pre,
  & code {
    background: transparent !important;
    word-wrap: inherit;
    white-space: inherit;
  }
`;
