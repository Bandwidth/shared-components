import { mapProps } from 'recompose';
import Link from 'components/Link';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const CloseIcon = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.7em 1em 0.7em 1.5em;
  font-size: 0.9em;
  color: ${get('colors.text.default')};

  &:hover{
    color: ${get('colors.primary.alternate')};
  }
`;

export default mapProps(props => ({
  ...props,
  icon: 'delete2',
}))(CloseIcon);
