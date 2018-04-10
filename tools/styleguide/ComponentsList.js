import React from 'react';
import PropTypes from 'prop-types';
import { ExpandToggle } from '../../src';
import styled from 'styled-components';
import Accordion, { AccordionGroup } from 'components/Accordion';
import RadioGroupButtonLabel from 'components/RadioGroup/styles/RadioGroupButtonLabel';
import get from 'extensions/themeGet';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  color: rgb(0, 141, 177);
  font-weight: bold;
  margin: 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: inherit;
  margin-left: 15px;

  ${({ active }) =>
    active
      ? `color: ${get('colors.primary.default')};`
      : ''} &:focus, &:active {
    color: ${get('colors.primary.default')};
  }
`;

export default class ComponentsListRenderer extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    classes: PropTypes.object,
  };

  renderSection = section =>
    section && (
      <Link
        key={section.name}
        href={`#!/${section.name}`}
        active={`#!/${section.name}` === window.location.hash}
      >
        {section.name}
      </Link>
    );

  renderTopLevel = ({ name, content, sections, components }) => (
    <Accordion.Small key={name} label={name}>
      {(sections.length > 0 ? sections : components).map(this.renderSection)}
    </Accordion.Small>
  );

  render() {
    let { classes, items } = this.props;
    items = items.filter(item => item.name);

    if (!items.length) {
      return null;
    }

    return (
      <List>
        <AccordionGroup>{items.map(this.renderTopLevel)}</AccordionGroup>
      </List>
    );
  }
}
