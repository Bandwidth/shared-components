import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

class AccordionGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    startExpandedKey: PropTypes.string,
  };

  static defaultProps = {
    startExpandedKey: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      expandedKey: `${props.startExpandedKey}`,
    };
  }

  createToggleHandler = (key) => (isAlreadyCollapsed) => {
    // current state is closed, it will open
    if (isAlreadyCollapsed) {
      this.setState({ expandedKey: key });
    // close already open accordion
    } else {
      this.setState({ expandedKey: null });
    }
  };

  renderAccordion = (accordion) => {
    const { expandedKey } = this.state;
    if (!accordion.key) {
      throw new Error('All AccordionGroup accordion children must have a key');
    }
    return React.cloneElement(accordion, {
      isCollapsed: expandedKey !== accordion.key,
      onToggle: this.createToggleHandler(accordion.key),
    });
  };

  renderAccordions = () => {
    const { children } = this.props;
    return React.Children.map(children, this.renderAccordion);
  }

  render() {
    return (
      <Container>
        {this.renderAccordions()}
      </Container>
    );
  }
}

AccordionGroup.usage = `
# AccordionGroup

Creates a group of Accordions which expand mutually exclusively of each other (only one can be open).

Every Accordion must have a \`key\` prop, which must be unique. You can provide the \`startExpandedKey\` prop with the key you want to start in the expanded state (defaults to the first one).

\`\`\`
<AccordionGroup startExpandedKey={1}>
  <Accordion key={0} />
  <Accordion key={1} />
</AccordionGroup>
\`\`\`
`;

export default AccordionGroup;