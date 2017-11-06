import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import NavigationItems, { linksPropType } from './NavigationItems';
import LogoHeader from './LogoHeader';
import theme from '../../theme';

const select = theme
  .register('Navigation', ({ colors, spacing, shadows }) => ({
    background: colors.primary.default,
    color: colors.text.inverted,
    borderWidth: '1px',
    borderColor: colors.shadow.default,
    padding: `0 ${spacing.large}`,
  }))
  .addVariant('sub', ({ colors }) => ({
    background: colors.gray.light,
    color: colors.text.default,
  }))
  .addVariant('dark', ({ colors }) => ({
    background: colors.primary.dark,
  }))
  .createSelector();

const Container = theme.connect(styled.header.withConfig({ displayName: 'NavigationContainer' })`
  background: ${select('background')};
  color: ${select('color')};
  border-bottom: ${select('borderWidth')} solid ${select('borderColor')};
  padding: ${select('padding')};
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  z-index: 1000;

  /* we don't want the nav to expand or collapse, just keep its natural size */
  flex: 0 0 auto;
`);

const Links = theme.connect(styled.div.withConfig({ displayName: 'NavigationLinks' })`
  align-self: flex-end;
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: auto;
  }
`);


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
            <NavigationItems.Small links={topLinks} />
          </RenderIf>
          <NavigationItems links={links} />
        </Links>
      </Container>
    );
  }
}

Navigation.Sub = theme.variant('sub')(Navigation);
Navigation.Dark = theme.variant('dark')(Navigation);

export default Navigation;
