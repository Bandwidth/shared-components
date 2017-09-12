import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import NavigationItems, { linksPropType } from './NavigationItems';
import LogoHeader from './LogoHeader';
import Small from '../../mods/Small';

const Container = styled.header.withConfig({
  displayName: 'NavigationContainer',
})`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  padding: 0 30px 0 30px;
  display: flex;
  flex-shrink: 0;
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

  & > ${NavigationItems.Styled}:nth-child(2) ${NavigationItems.Item.Styled} {
    padding-top: 10px !important;
  }
`;


export class Navigation extends React.Component {
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
          <LogoHeader>
            {title}
          </LogoHeader>
        </RenderIf>
        <Links>
          <RenderIf val={topLinks}>
            <Small>
              <NavigationItems links={topLinks} />
            </Small>
          </RenderIf>
          <NavigationItems links={links} />
        </Links>
      </Container>
    );
  }
}

export default sharedComponent({ Container, Styled: Container, Links })(Navigation);
