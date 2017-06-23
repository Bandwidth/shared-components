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

MethodTag.usage = `
Use this to annotate URLs with the method which is used to access them (for instance, in API docs). It will automatically choose a color based on the contents of the component, so use \`GET\`, \`POST\` inside, etc.
`;

export default MethodTag;
