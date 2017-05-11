import styled from 'styled-components';

const ShowMore = styled.div`
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: ${({ theme }) => `${theme.padding.medium} ${theme.padding.large}`};
  border-right: 1px solid ${({ theme }) => theme.colors.borderLight};
  cursor: pointer;
`;

export default ShowMore;
