import React from 'react';
import styled from 'styled-components';

const MethodTag = styled.pre`
  background: ${({ theme, children }) => theme.methodTag.colors[children]};
  color: ${({ theme }) => theme.methodTag.fg};
  font-size: ${({ theme }) => theme.methodTag.fontSize};
  padding: ${({ theme }) => theme.methodTag.padding};
  border-radius: ${({ theme }) => theme.methodTag.borderRadius};
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.methodTag.lineHeight};
  margin: 0;
`;

export default MethodTag;