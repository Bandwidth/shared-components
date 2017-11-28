import React from 'react';
import PropTypes from 'prop-types';
import { ExpandToggle } from '../../src';
import styled from 'styled-components';

const List = styled.ul`
  padding: 8px;
  color: rgb(0, 141, 177);
  font-weight: bold;
  margin: 8px;

  & ul {
    padding-left: 8px;
    & li {
      font-weight: normal;
      color: black;
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: inherit;

  ${({ active }) => (active ? 'color: #00bef0;' : '')} &:focus, &:active {
    color: #00bef0;
  }
`;

const Item = styled.li`
  list-style: none;
  display: block;
  font-weight: inherit;
  color: inherit;
`;

export default class ComponentsListRenderer extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    let { classes, items } = this.props;
    items = items.filter(item => item.name);

    if (!items.length) {
      return null;
    }

    const currentPath = window.location.hash;

    return (
      <List>
        {items.map(({ heading, name, slug, content }) => (
          <Item key={name}>
            <ExpandToggle
              toggleContent={
                <Link href={`#${slug}`} active={`#${slug}` === currentPath}>
                  {name}
                </Link>
              }
            >
              {content}
            </ExpandToggle>
          </Item>
        ))}
      </List>
    );
  }
}
