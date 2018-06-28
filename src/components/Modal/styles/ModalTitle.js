import SectionTitle from 'components/SectionTitle';
import styled from 'styled-components';
import Anchor from 'components/Anchor';

export default styled(SectionTitle)`
  padding: 0.95em 1em 0.95em 1.5em;

  & > a {
    position: absolute;
    right: 10px;
  }
`;
