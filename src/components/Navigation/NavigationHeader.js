import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Navigation, { Container as NavigationContainer } from './Navigation';
import LogoHeader from './LogoHeader';
import { linksPropType } from './Navigation';
import theme from '../../theme';

const Container = styled.header.withConfig({ displayName: 'NavigationContainer' })`
  background: ${({ theme }) => theme.topNav.bg};
  color: ${({ theme }) => theme.topNav.fg};
  border-bottom: 1px solid ${({ theme }) => theme.shadow.color};
  padding: ${({ theme }) => theme.topNav.padding};
  display: flex;
  justify-content: space-between;
  z-index: 1000;

  /* we don't want the nav to expand or collapse, just keep its natural size */
  flex: 0 0 auto;
`;

const Links = styled.div.withConfig({ displayName: 'NavigationLinks' })`
  align-self: flex-end;
  min-height: 96px;
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: auto;
  }

  & > ${NavigationContainer}:last-child &{Navigation.Item} {
    padding-top: 10px;
  }
`;


class NavigationHeader extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    links: linksPropType.isRequired,
    topLinks: linksPropType,
  };

  static defaultProps = {
    topLinks: null,
  };

  render() {
    const { title, links, topLinks } = this.props;
    const RenderIf = ({ children, val }) => (val ? children : null);

    return (
      <Container>
        <LogoHeader>{title}</LogoHeader>
        <Links>
          <RenderIf val={topLinks}>
            <ThemeProvider theme={theme.small}>
              <Navigation links={topLinks} />
            </ThemeProvider>
          </RenderIf>
          <Navigation links={links} />
        </Links>
      </Container>
    );
  }
}

NavigationHeader.usage = `
# NavigationHeader

The header above a page which contains page title and navigation.

\`\`\`
<NavigationHeader
  title="Bandwidth App"
  links={[
    { to: '/cat', exact: true, content: 'Cat' },
    { to: '/anotherCat', content: 'Another Cat' },
  ]}
  topLinks={[
    { to: '/submitCat', content: 'Submit Cat' },
    { to: '/logout', content: 'Log Out' },
  ]}
/>
\`\`\`
`;

export default NavigationHeader;
