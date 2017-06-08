import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';
import Anchor from '../Anchor';

export const Container = styled.div.withConfig({ displayName: 'NavigationContainer' })`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  background: ${({ theme }) => theme.tab.bg};
  color: ${({ theme }) => theme.tab.fg};
  font-size: ${({ theme }) => theme.tab.fontSize};
  margin-bottom: ${({ theme }) => theme.tab.marginBottom};

  & > * {
    margin: ${({ theme }) => theme.tab.margin};
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

export const linksPropType = PropTypes.arrayOf(PropTypes.shape({
  to: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.node.isRequired,
  exact: PropTypes.bool,
}));

const Navigation = ({ links }) => (
  <Container>
    {links.map((link) => (
      <Anchor key={`${link.content}_${link.to}`} to={link.to} onClick={link.onClick} exact={link.exact}>
        <NavigationItem>{link.content}</NavigationItem>
      </Anchor>
    ))}
  </Container>
);

Navigation.propTypes = {
  links: linksPropType.isRequired,
};

Navigation.usage = `
# Navigation

Creates the top navigation selector, usually below the main navigation header.

\`\`\`
<Navigation
  links={[
    { to: '/cat', exact: true, content: 'Cat' },
    { to: '/anotherCat', content: 'Another Cat' },
  ]}
/>
\`\`\`
`

Navigation.Item = NavigationItem;
export default Navigation;
