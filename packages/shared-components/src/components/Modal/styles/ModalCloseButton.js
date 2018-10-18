import { mapProps } from 'recompose';
import Anchor from 'components/Anchor';
import styled from 'styled-components';

const CloseButton = styled(Anchor)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.95em 1em 0.95em 1.5em;
  font-size: 0.9em;
`;

export default mapProps(({ onClose, ...rest }) => ({
  ...rest,
  icon: 'delete2',
  onClick: onClose,
}))(CloseButton);
