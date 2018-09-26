import styled from 'styled-components';

const HelpCalloutContainer = styled.div`
  background-color: var(--colors-background-default);
  border: 1px solid var(--colors-border-medium);
  border-radius: 4px;
  overflow-y: auto;
  box-shadow: var(--shadows-short);
  z-index: 100000;
  padding: var(--spacing-medium);
  pointer-events: none;
  max-width: ${({ maxWidth }) =>
    typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth};

  &[data-placement*='top'] {
    margin-bottom: 6px;
  }
  &[data-placement*='bottom'] {
    margin-top: 6px;
  }
  &[data-placement*='right'] {
    margin-left: 6px;
  }
  &[data-placement*='left'] {
    margin-right: 6px;
  }
`;

export default HelpCalloutContainer;
