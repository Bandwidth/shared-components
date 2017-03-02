import styled from 'styled-components';

export default styled.h2`
  color: ${({ theme }) => theme.subheader.fg};
  font-size: ${({ theme }) => theme.subheader.fontSize};
  font-weight: ${({ theme }) => theme.subheader.fontWeight};
  font-family: ${({ theme }) => theme.subheader.fontFamily};
`;
