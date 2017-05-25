import styled from 'styled-components';
import icons, { map } from './helpers/icons';

const Icon = styled.i.withConfig({ displayName: 'Icon' })`
  font-family: 'Bandwidth';
  font-size: ${({ theme, size }) => `${size}` || theme.icon.fontSize};
  color: inherit;
  font-style: normal;
  display: inline-block;
  &::before {
    content: "${({ name, iconsHelper }) => iconsHelper(name) || iconsHelper('help_2')}";
    display: block;
    color: inherit;
  }
`;

Icon.defaultProps = {
  theme: {
    icon: { fontSize: '16px', fg: 'inherit' },
  },

  name: 'attention',
  iconsHelper: icons,

  size: '16px',
};

Icon.usage = `
# Icon

Icons let you easily render some of our icons. Pass in the \`name\` prop to specify which one.

\`\`\`
<Icon name="checkmark" />
\`\`\`

## Icons

The icon definition file is in \`components/helpers/icons.js\`

${Object.keys(map).map((name) => `* ${name}`).join('\n')}
`;

export default Icon;
