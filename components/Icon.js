import styled from 'styled-components';
import icons from './helpers/icons';

const Icon = styled.span`
  &::after {
    font-family: 'Bandwidth';
    font-size: ${({ theme, size }) => `${size}px` || theme.icon.fontSize};
    color: ${({ theme }) => theme.icon.fg};
    content: "${({ name, iconsHelper }) => iconsHelper(name)}";
    display: block;
    padding: 0.5em;
  }
`;

Icon.defaultProps = {
  theme: {
    icon: { fontSize: '16px', fg: 'inherit' },
  },

  name: 'attention',
  iconsHelper: icons,

  size: 16,
};

export default Icon;
