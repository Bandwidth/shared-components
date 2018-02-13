import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const FieldRowContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div:not(:last-child) {
    /* a custom, non-theme-standard value requested by UX */
    margin-bottom: 20px;
  }
`;

export default FieldRowContainer;
