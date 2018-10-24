import { mapProps } from 'recompose';
import Link from 'components/Link';
import styled from 'styled-components';

const CloseIcon = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.95em 1em 0.95em 1.5em;
  font-size: 0.9em;
`;

export default mapProps(props => ({
  ...props,
  icon: 'delete2',
}))(CloseIcon);
