import styled from 'styled-components';
import get from 'extensions/themeGet';
import Corner from './Corner';

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

NoteContainer.Alternate = styled(NoteContainer)`
  background: ${get('colors.primary.light')};
  color: ${get('colors.primary.dark')};
  border-color: ${get('colors.primary.default')};

  & > ${Corner} {
    border-color: ${get('colors.primary.default')};

    &::before {
      border-color: ${get('colors.primary.default')} transparent transparent
        ${get('colors.primary.default')};
      box-shadow: 0 -1px 0 ${get('colors.primary.default')};
    }
    &::after {
      border-color: ${get('colors.primary.light')} transparent transparent
        ${get('colors.primary.light')};
    }
  }
`;

export default NoteContainer;
