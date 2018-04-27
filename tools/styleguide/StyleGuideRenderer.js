import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './Logo';
import Markdown from 'rsg-components/Markdown';
import get from 'extensions/themeGet';
import BandwidthProvider from 'components/BandwidthProvider';
import BandwidthThemeProvider from 'components/BandwidthThemeProvider';

const Root = styled.div`
  display: grid;
  grid-template-columns: fit-content(25%) auto;
  grid-template-areas: 'sidebar main';
  height: 100vh;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  background-color: white;
  overflow-y: scroll;
  border: 1px;
  border-style: solid;
  border-color: ${get('colors.border.light')};
`;

const Content = styled.main`
  grid-area: main;
  background-color: white;
  display: block;
  padding: 30px;
  overflow-y: auto;
`;

const Footer = styled.div`
  display: block;
`;

class StyleGuideRenderer extends React.Component {
  mapComponent = component => {
    return {
      ...component,
      name: component.props.doclets.name || component.name,
    };
    return component;
  };

  mapComponents = components => components.map(this.mapComponent);

  mapSection = sections =>
    sections.map(section => ({
      components: this.mapComponents(section.components),
    }));

  render() {
    const { classes, title, homepageUrl, children, toc } = this.props;
    return (
      <BandwidthProvider ThemeProvider={BandwidthThemeProvider}>
        <Root>
          <Content>
            {React.Children.map(children, child =>
              React.cloneElement(child, {
                sections: this.mapSection(child.props.sections),
              }),
            )}
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
