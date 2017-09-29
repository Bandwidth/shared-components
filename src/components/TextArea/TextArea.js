import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('TextArea', ({ colors, spacing, fonts }) => ({
    background: colors.white,
    color: colors.black,
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: fonts.brand,
    letterSpacing: '0.02em',
    borderColor: colors.borderLight,
    borderWidth: '1px',
    borderStyle: 'solid',
    lineHeight: '1.5',
    minHeight: '100px',
  }))
  .createSelector();

const TextArea = theme.connect(styled.textarea`
  ${spreadStyles(select)}
  box-shadow: none;
  transition: all 0.2s ease;
  outline: none;
  width: 100%;
`);

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

TextArea.usage = `
An input component that renders a large field for entering long text.

\`\`\`
<TextArea value="hi" required />
\`\`\`
`;

export default TextArea;
