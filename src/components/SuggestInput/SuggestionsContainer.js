import styled from 'styled-components';

const Container = styled.div`
  border-color: ${({ theme }) => theme.colors.border};
  border-style: ${({ children }) => !!children ? 'solid' : 'none'};
  border-width: 1px;
  margin-top: -1px;

  & ul {
    display: block;
    padding: 0;
    margin: 0;

    & > li {
      display: block;
      padding: 0;
      margin: 0;
    }
  }
`;

export default Container;
