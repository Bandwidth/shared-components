import styled from 'styled-components';

const ShowMore = styled.div`
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: ${({ theme }) => theme.padding.large};
  cursor: pointer;
`;

export default ShowMore;
