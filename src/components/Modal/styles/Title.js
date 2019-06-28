import SectionTitle from 'components/SectionTitle';
import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled(SectionTitle)`
  padding: 10px 1em 10px 1.5em;
  border-radius: 5px 5px 0px 0px;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: ${get('colors.gray.border')};
`;
