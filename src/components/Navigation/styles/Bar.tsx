import styled from 'styled-components';
import get from 'extensions/themeGet';
import dotNotation from 'extensions/dotNotation';

const NavigationBar = styled.header`
  background: ${get('colors.primary.default')};
  color: ${get('colors.text.inverted')};
  border-bottom: ${get('thicknesses.normal')} solid
    ${get('colors.shadow.default')};
  padding: 0 ${get('spacing.large')};
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;

  /* we don't want the nav to expand or collapse, just keep its natural size */
  flex: 0 0 auto;

  & > * {
    margin: auto 0;
  }
`;
const Dark = styled(NavigationBar)`
  background: ${get('colors.primary.dark')};
`;

const Sub = dotNotation(
  styled(NavigationBar)`
    background: ${get('colors.gray.light')};
    color: ${get('colors.text.default')};
  `,
  { Dark },
);

const Light = styled(NavigationBar)`
  background: ${get('colors.background.default')};
  color: ${get('colors.text.default')};
`;

export default dotNotation(NavigationBar, {
  Sub,
  Dark,
  Light,
});
