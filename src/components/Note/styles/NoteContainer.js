import styled from 'styled-components';
import get from 'extensions/themeGet';

const NoteContainer = styled.div`
  background: ${get('colors.background.default')};
  border: ${get('thicknesses.normal')} solid ${get('colors.border.medium')};
  border-right: 0;
  margin-right: 1em;
  padding: 0.7em;
  padding-left: 1em;
  min-width: 10em;
  position: relative;
`;

export default NoteContainer;
