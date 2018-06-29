import styled from 'styled-components';
import get from 'extensions/themeGet';

const InputRevealPasswordContainer = styled.div`
  position: relative;
  width: 100%;

  div {
    position: absolute;
    right: var(--spacing-medium);
    top: 30%;
    z-index: 10;
  }

  input[type='password'],
  input[type='text'] {
    padding-right: var(--spacing-extra-large);
    padding-left: var(--spacing-medium);
  }
`;

InputRevealPasswordContainer.Small = styled(InputRevealPasswordContainer)`
  input[type='password'],
  input[type='text'] {
    padding: var(--spacing-small) var(--spacing-extra-large)
      var(--spacing-small) var(--spacing-small) !important;
  }
`;

export default InputRevealPasswordContainer;
