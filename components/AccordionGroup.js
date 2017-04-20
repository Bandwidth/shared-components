import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

export default class AccordionGroup extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    startExpandedKey: React.PropTypes.string,
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
