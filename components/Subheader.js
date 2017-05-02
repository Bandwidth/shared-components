import styled from 'styled-components';

const Subheader = styled.h2.withConfig({ displayName: 'Subheader' })`
  color: ${({ theme }) => theme.subheader.fg};
  font-size: ${({ theme }) => theme.subheader.fontSize};
  font-weight: ${({ theme }) => theme.subheader.fontWeight};
  font-family: ${({ theme }) => theme.subheader.fontFamily};
`;

Subheader.usage = `
# Subheader

A smaller header.
`;

export default Subheader;
