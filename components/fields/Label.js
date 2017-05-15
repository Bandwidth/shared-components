import styled, { css } from 'styled-components';

const Label = styled.label.withConfig({ displayName: 'Label' })`
  font-size: ${({ theme }) => theme.label.fontSize};
  letter-spacing: ${({ theme }) => theme.label.letterSpacing};
  font-weight: ${({ theme }) => theme.label.fontWeight};
  font-family: ${({ theme }) => theme.label.fontFamily};
  margin: ${({ theme }) => theme.label.margin};
  padding: ${({ theme }) => theme.label.padding};
  color: ${({ theme }) => theme.label.fg};
  background: ${({ theme }) => theme.label.bg};
  opacity: ${({ disabled }) => disabled ? '0.5' : '1'};

  ${({ required, theme }) =>
    required ?
      css`
        &::after {
          content: '*';
          color: ${theme.label.requiredMarkFG};
          padding-left: 0.3em;
        }
      ` :
      ''
  }
`;

Label.usage = `
# Label

A simple label. Meant to be tied to an input component.

\`\`\`
<Label htmlFor="some-components-id">Hi</Label>
\`\`\`
`;

export default Label;
