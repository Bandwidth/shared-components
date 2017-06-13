import styled from 'styled-components';

const Toast = styled.div.withConfig({ displayName: 'Toast' })`
  position: fixed;
  z-index: 10000000;
  background: ${({ theme }) => theme.colors.white};
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  padding: ${({ theme }) => theme.padding.small};
  text-align: center;
  display: block;
  top: 120px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;

  & p {
    margin: 0;
  }
`;

Toast.usage = `
# Toast

Fill with quick notification content.

\`\`\`
<Toast>Hi there</Toast>
\`\`\`
`
