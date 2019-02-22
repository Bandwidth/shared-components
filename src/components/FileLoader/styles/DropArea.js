import styled from 'styled-components';
import InputStyles from '../../Input/styles/InputStyles';
import defaultProps from 'extensions/defaultProps';
import get from 'extensions/themeGet';

export default defaultProps({ as: 'div' })(styled(InputStyles)`
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  ${({ error }) =>
    error
      ? `
    box-shadow: inset 0 -5px ${get('colors.negative.light')};
    border-color: ${get('colors.negative.border')};
    `
      : ''};
`);
