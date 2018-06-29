import styled from 'styled-components';
import get from 'extensions/themeGet';
import Corner from './NoteCorner';

const NoteContainer = styled.div`
  background: var(--colors-background-default);
  border: var(--thicknesses-normal) solid var(--colors-border-medium);
  border-right: 0;
  margin-right: 1em;
  padding: 0.7em;
  padding-left: 1em;
  min-width: 10em;
  position: relative;
`;

NoteContainer.Alternate = styled(NoteContainer)`
  background: var(--colors-primary-light);
  color: var(--colors-primary-dark);
  border-color: var(--colors-primary-default);

  & > ${Corner} {
    border-color: var(--colors-primary-default);

    &::before {
      border-color: var(--colors-primary-default) transparent transparent
        var(--colors-primary-default);
      box-shadow: 0 -1px 0 var(--colors-primary-default);
    }
    &::after {
      border-color: var(--colors-primary-light) transparent transparent
        var(--colors-primary-light);
    }
  }
`;

export default NoteContainer;
