import { mapProps } from 'recompose';
import Anchor from 'components/Anchor';
import styled from 'styled-components';
import { omit } from 'lodash';

const CloseButton = styled(Anchor)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.95em 1em 0.95em 1.5em;
  font-size: 0.9em;
`;

export default mapProps(props => ({
  ...omit(props, 'onClose'),
  icon: 'delete2',
  onClick: props.onClose,
}))(CloseButton);
