import React from 'react';
import PropTypes from 'prop-types';
import { ExpandToggle } from '../../src';
import styled from 'styled-components';
import Accordion, { AccordionGroup } from 'components/Accordion';
import RadioGroupButtonLabel from 'components/RadioGroup/styles/RadioGroupButtonLabel';
import themeGet from 'extensions/themeGet';
import _ from 'lodash';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  color: rgb(0, 141, 177);
  font-weight: bold;
  margin: 0;
`;

const Link = styled.a`
  text-decoration: ${({ deprecated }) =>
    deprecated ? 'line-through' : 'none'};
  color: inherit;
  font-weight: inherit;
  margin-left: 15px;
  color: ${({ deprecated }) =>
    deprecated ? themeGet('colors.gray.default') : 'inherit'};
  &:focus,
  &:active {
    color: ${({ deprecated }) =>
      deprecated
        ? themeGet('colors.gray.medium')
        : themeGet('colors.primary.default')};
  }
`;

export default class ComponentsListRenderer extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    classes: PropTypes.object,
  };

  sectionDoclets = (section, name) => _.get(section, `props.doclets.${name}`);

  renderSection = section =>
    section &&
    !this.sectionDoclets(section, 'private') && (
      <Link
        key={section.name}
        href={`#!/${section.name}`}
        active={`#!/${section.name}` === window.location.hash}
        deprecated={this.sectionDoclets(section, 'deprecated')}
      >
        {this.sectionDoclets(section, 'name') || section.name}
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
