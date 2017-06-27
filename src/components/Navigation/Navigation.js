import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import NavigationItems, { Container as ItemsContainer, linksPropType } from './NavigationItems';
import LogoHeader from './LogoHeader';
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
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: auto;
  }

  & > ${ItemsContainer}:nth-child(2) ${NavigationItems.Item} {
    padding-top: 10px !important;
  }
`;


class Navigation extends React.Component {
  static propTypes = {
    /**
     * The title to render within the navigation header (optional)
     */
    title: PropTypes.string,
    /**
     * A list of links to include in the main navigation.
     */
    links: linksPropType.isRequired,
    /**
     * A list of links to include above the main links (optional).
     */
    topLinks: linksPropType,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    topLinks: null,
    title: null,
    className: null,
    id: null,
  };

  render() {
    const { title, links, topLinks, id, className } = this.props;
    const RenderIf = ({ children, val }) => (val ? children : null);

    return (
      <Container id={id} className={className}>
        <RenderIf val={title}>
          <LogoHeader>{title}</LogoHeader>
        </RenderIf>
        <Links>
          <RenderIf val={topLinks}>
            <ThemeProvider theme={theme.small}>
              <NavigationItems links={topLinks} />
            </ThemeProvider>
          </RenderIf>
          <NavigationItems links={links} />
        </Links>
      </Container>
    );
  }
}

Navigation.usage = `
The header above a page which contains page title and navigation.

\`\`\`
<Navigation
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

export default Navigation;
