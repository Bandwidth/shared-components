import React from 'react';
import PropTypes from 'prop-types';
import { ExpandToggle } from '../../src';
import styled from 'styled-components';
import Accordion, {
  AccordionGroup,
  AccordionBorder,
} from 'components/Accordion';
import RadioGroupButtonLabel from 'components/RadioButton/styles/RadioGroupButtonLabel';
import get from 'extensions/themeGet';
import some from 'lodash.some';

const Container = styled.div`
  padding: 0 var(--spacing-medium) var(--spacing-extra-large);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const SectionHeader = styled.div`
  flex: 1 1 auto;
  text-transform: uppercase;
  font-size: 0.85em;
  font-weight: bold;
  color: #5f5f5f;
  * + & {
    margin-top: var(--spacing-small);
  }
`;

const Link = styled.a`
  text-decoration: none;
  & > span {
    text-decoration: ${({ deprecated }) =>
      deprecated ? 'line-through' : 'none'};
  }
  color: inherit;
  font-weight: lighter;
  font-family: var(--fonts-brand);
  letter-spacing: 0.2px;
  text-rendering: optimizeLegibility;
  margin-left: var(--spacing-medium);
  color: ${({ deprecated, active }) =>
    active
      ? 'var(--colors-primary-default)'
      : deprecated
        ? 'var(--colors-text-disabled)'
        : 'var(--colors-gray-dark)'};
`;

export default class ComponentsListRenderer extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    classes: PropTypes.object,
  };

  sectionJsDocAttr = attrName => section =>
    section &&
    section.props &&
    section.props.doclets &&
    section.props.doclets[attrName];

  sectionActive = section => `#!/${section.name}` === window.location.hash;

  sectionChildrenFunc = (section, func) =>
    func(section) ||
    some(section.sections, s => this.sectionChildrenFunc(s, func)) ||
    some(section.components, s => this.sectionChildrenFunc(s, func));

  sectionChildrenDeprecated = section =>
    this.sectionChildrenFunc(section, this.sectionJsDocAttr('deprecated'));

  sectionChildrenActive = section =>
    this.sectionChildrenFunc(section, this.sectionActive);

  renderSection = section =>
    section && (
      <Link
        key={section.name}
        href={`#!/${section.name}`}
        active={this.sectionActive(section)}
        deprecated={this.sectionChildrenDeprecated(section)}
      >
        {this.renderTopLevel(section)}
      </Link>
    );

  renderTopLevel = (section, topLevel = false) => {
    const { name, visibleName, sections = [], components = [] } = section;
    let listItems = [];
    if (sections.length > 0) listItems = sections;
    else if (components.length > 0) listItems = components;
    listItems = listItems.filter(s => s.name !== name);
    if (topLevel) {
      return (
        <React.Fragment key={name}>
          <SectionHeader>{name}</SectionHeader>
          {listItems &&
            listItems.length > 0 && (
              <List>{listItems.map(this.renderSection)}</List>
            )}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={name}>
        <span>{visibleName || name}</span>
        {this.sectionChildrenActive(section) && (
          <List>{listItems.map(this.renderSection)}</List>
        )}
      </React.Fragment>
    );
  };

  render() {
    let { items } = this.props;
    items = items.filter(item => item.name);

    if (!items.length) {
      return null;
    }

    return (
      <Container>
        <List>{items.map(section => this.renderTopLevel(section, true))}</List>
      </Container>
    );
  }
}
