import React from 'react';
import PropTypes from 'prop-types';
import { ExpandToggle } from '../../src';
import styled from 'styled-components';
import Accordion, { AccordionGroup } from 'components/Accordion';
import RadioButton from 'components/RadioGroup/RadioButton';
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

// TODO: Radio buttons should actually be smart about how they are used
// and insert the margin when needed so that we don't have to monkey patch it.
const StyledRadioButtonLabel = styled(RadioGroupButtonLabel)`
  margin-right: 0px;
`;

export default class ComponentsListRenderer extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    classes: PropTypes.object,
  };

  renderSection = ({ name }) => (
    <Link
      key={name}
      href={`#!/${name}`}
      active={`#!/${name}` === window.location.hash}
    >
      {name}
    </Link>
  );

  renderTopLevel = ({ name, content, sections, components }) =>
    content ? (
      <Accordion.Small key={name} label={name}>
        {(sections.length > 0 ? sections : components).map(this.renderSection)}
      </Accordion.Small>
    ) : (
      <RadioButton
        key={name}
        checked={`#!/${name}` === window.location.hash}
        value={`#!/${name}` === window.location.hash}
        name={name}
        label={name}
        Label={StyledRadioButtonLabel}
        onChange={ev => (window.location.hash = `#!/${name}`)}
      />
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
