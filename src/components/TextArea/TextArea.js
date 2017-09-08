import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const TextArea = styled.textarea`
  background: ${({ theme }) => theme.textarea.bg};
  color: ${({ theme }) => theme.textarea.fg};
  border: ${({ theme }) => theme.textarea.border};
  font-size: ${({ theme }) => theme.textarea.fontSize};
  font-weight: ${({ theme }) => theme.textarea.fontWeight};
  font-family: ${({ theme }) => theme.textarea.fontFamily};
  padding: ${({ theme }) => theme.textarea.padding};
  letter-spacing: 0.02em;
  box-shadow: none;
  transition: all 0.2s ease;
  line-height: ${({ theme }) => theme.textarea.lineHeight};
  outline: none;
  width: 100%;
  min-height: 100px;
`;

TextArea.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

TextArea.defaultProps = {
  className: null,
  id: null,
};

export default sharedComponent(`
An input component that renders a large field for entering long text.

\`\`\`
<TextArea value="hi" required />
\`\`\`
`)(TextArea);
