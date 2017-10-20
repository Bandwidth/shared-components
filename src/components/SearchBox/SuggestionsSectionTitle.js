import styled from 'styled-components';

export default styled.h5`
  font-size: 0.95em;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding: ${({ theme }) => theme.padding.extraSmall} ${({ theme }) => theme.padding.small};
  background: ${({ theme }) => theme.colors.gutter};
`;
