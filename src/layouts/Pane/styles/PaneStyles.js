import styled from 'styled-components';
import get from 'extensions/themeGet';




export default styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: ${get('spacing.large')};

  & > h1, & > h2, & > h3, & > h4, & > h5 {
    margin: ${get('spacing.medium')} 0;
  }

  & > section {
    margin: ${get('spacing.large')} 0 0 0;

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: ${get('spacing.large')};
    }
  }
`;
