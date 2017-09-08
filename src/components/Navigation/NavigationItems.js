import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import NavigationItem from './NavigationItem';
import Anchor from '../Anchor';

export const Container = styled.div.withConfig({
  displayName: 'NavigationItemsContainer',
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ mods }) => mods.compact ? '0.8em' : '1em'};
  margin-bottom: ${({ mods }) => mods.compact ? '15px' : 'auto'};

  & > * {
    margin: 0 30px 0 0;
  }

  & > *:last-of-type {
    margin: 0;
    padding-right: 0;
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }
`;

export const linksPropType = PropTypes.arrayOf(
  PropTypes.shape({
    to: PropTypes.string,
    onClick: PropTypes.func,
    content: PropTypes.node.isRequired,
    exact: PropTypes.bool,
    newTab: PropTypes.bool,
  }),
);

const NavigationItems = ({ links, className, id, mods }) =>
  <Container id={id} className={className} mods={mods}>
    {links.map(link =>
      <Anchor
        key={`${link.content}_${link.to}`}
        to={link.to}
        onClick={link.onClick}
        exact={link.exact}
        newTab={link.newTab}
      >
        <NavigationItem>
          {link.content}
        </NavigationItem>
      </Anchor>,
    )}
  </Container>;

NavigationItems.propTypes = {
  /**
   * Links to render in the list.
   */
  links: linksPropType,
  /**
   * Adds a class name to the link container element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the link container element.
   */
  id: PropTypes.string,
  /**
   * Provided by our sharedComponent HOC
   */
  mods: PropTypes.object.isRequired,
};

NavigationItems.defaultProps = {
  links: [],
  className: null,
  id: null,
};

export default sharedComponent({ Container, Item: NavigationItem })(NavigationItems);
