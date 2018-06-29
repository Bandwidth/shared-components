import styled from 'styled-components';
import get from 'extensions/themeGet';

const FieldRowContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div:not(:last-child) {
    margin-bottom: var(--spacing-large);
  }
`;

export default FieldRowContainer;
