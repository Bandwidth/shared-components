import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container as AccordionContainer } from './Accordion';

const Container = styled.div`
  & > ${AccordionContainer}:not(:first-child) {
    border-top: none;
  }
`;

class AccordionGroup extends React.Component {
  static propTypes = {
    /**
     * Accordions to render in this group.
     */
    children: PropTypes.node.isRequired,
    /**
     * The key of the accordion (if any) to start in the expanded state.
     */
    startExpandedKey: PropTypes.string,
    /**
     * A class name to pass to the accordion group container.
     */
    className: PropTypes.string,
    /**
     * An id to pass to the accordion group container
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    startExpandedKey: null,
    className: null,
    id: null,
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
    const { className, id } = this.props;

    return (
      <Container className={className} id={id}>
        {this.renderAccordions()}
      </Container>
    );
  }
}

AccordionGroup.usage = `
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
