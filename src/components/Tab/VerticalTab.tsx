import styled from 'styled-components';
import Tab, { verticalStyles } from './Tab';
import dotNotation from 'extensions/dotNotation';
import * as styles from './styles';

const VerticalTab = styled(Tab)`
  ${verticalStyles}
`;

export default dotNotation(VerticalTab, {
  Container: styles.Container,
  Content: styles.Content,
  styles,
});
