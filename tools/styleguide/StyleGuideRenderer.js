import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './Logo';
import Markdown from 'rsg-components/Markdown';
import get from 'extensions/themeGet';
import BandwidthProvider from 'components/BandwidthProvider';
import Topbar from './Topbar';
import { iris, catapult } from 'theme';
import bootstrap from 'bootstrap';

const Root = styled.div`
  display: grid;
  grid-template-columns: fit-content(25%) auto;
  /* fix for chrome scroll-reset bug: use minmax(1px, 1fr) instead of auto / 1fr */
  grid-template-rows: 85px minmax(1px, 1fr);
  grid-template-areas: 'topbar topbar' 'sidebar main';
  height: 100vh;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  background-color: white;
  overflow-y: scroll;
  border-width: 0 ${get('thicknesses.normal')} 0 0;
  border-style: solid;
  border-color: ${get('colors.border.medium')};
`;

const Content = styled.main`
  grid-area: main;
  background-color: var(--colors--background-default);
  display: block;
  padding: 30px;
  overflow-y: auto;
`;

const Footer = styled.div`
  display: block;
`;

// export const themeEvents = new EventEmitter();

class StyleGuideRenderer extends React.Component {
  state = {
    theme: iris,
  };

  onThemeSelect = theme => {
    const newTheme = theme === 'iris' ? iris : catapult;
    this.setState({
      theme: newTheme,
    });
    // themeEvents.emit('change', newTheme);
  };

  render() {
    const {
      classes,
      title,
      homepageUrl,
      children,
      toc,
      hasSidebar,
    } = this.props;

    const { theme } = this.state;

    return (
      <BandwidthProvider customTheme={theme}>
        <Root>
          <Topbar initialTheme="iris" onThemeSelect={this.onThemeSelect} />
          <Content>
            {children}
            <Footer>
              <Markdown
                text={`Generated with [React Styleguidist](${homepageUrl})`}
              />
            </Footer>
          </Content>
          <Sidebar>
            <Logo />
            {toc}
          </Sidebar>
        </Root>
      </BandwidthProvider>
    );
  }
}

export default StyleGuideRenderer;
