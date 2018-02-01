import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const FieldRowContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div:not(:last-child) {
    margin-bottom: ${themeGet('spacing.medium')};
  }
`;

export default FieldRowContainer;
