import styled from 'styled-components';

const SubHeader = styled.h2.withConfig({ displayName: 'SubHeader' })`
  color: ${({ theme }) => theme.subheader.fg};
  font-size: ${({ theme }) => theme.subheader.fontSize};
  font-weight: ${({ theme }) => theme.subheader.fontWeight};
  font-family: ${({ theme }) => theme.subheader.fontFamily};
`;

SubHeader.usage = `
A smaller header.
`;

export default SubHeader;
