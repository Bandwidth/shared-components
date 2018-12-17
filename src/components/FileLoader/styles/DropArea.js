import styled from 'styled-components';
import InputStyles from '../../Input/styles/InputStyles';
import { defaultProps } from 'recompose';

export default defaultProps({ as: 'div' })(styled(InputStyles)`
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`);
