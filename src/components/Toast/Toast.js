import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('Toast', ({ colors, spacing }) => ({
    background: colors.background.default,
    width: '400px',
    padding: spacing.small,
    textAlign: 'center',
    top: '120px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.gray.border,
    borderRadius: '3px',
  }))
  .createSelector();

const ToastImpl = theme.connect(styled.div.withConfig({ displayName: 'Toast' })`
  ${spreadStyles(select)}
  position: fixed;
  z-index: 10000000;
  left: 50%;
  transform: translateX(-50%);
  display: block;

  & p {
    margin: 0;
  }
`);

ToastImpl.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

ToastImpl.defaultProps = {
  className: null,
  id: null,
};

ToastImpl.usage = `
Fill with quick notification content.

\`\`\`
<Toast>Hi there</Toast>
\`\`\`
`;

export const Toast = (props) => (<ToastImpl {...props} />);

export default ToastImpl;
