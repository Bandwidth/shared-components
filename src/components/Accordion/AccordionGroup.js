import React from 'react';
import PropTypes from 'prop-types';
import AccordionGroupContainer from './styles/AccordionGroupContainer';

export default class AccordionGroup extends React.Component {
  static propTypes = {
    /**
     * Accordions to render in this group.
     */
    children: PropTypes.node.isRequired,
    /**
     * The key of the accordion (if any) to start in the expanded state.
     */
    startExpandedKey: PropTypes.any,
    /**
     * A class name to pass to the accordion group container.
     */
    className: PropTypes.string,
    /**
     * An id to pass to the accordion group container
     */
    id: PropTypes.string,
    /**
     * A component that wraps the accordions and defines layout and styling
     */
    Container: PropTypes.func,
  };

  static defaultProps = {
    startExpandedKey: null,
    className: null,
    id: null,
    Container: AccordionGroupContainer,
  };

  constructor(props) {
    super(props);
    this.state = {
      expandedKey: `${props.startExpandedKey}`,
    };
  }

  createToggleHandler = key => isAlreadyExpanded => {
    // current state is open, it will close
    if (!isAlreadyExpanded) {
      this.setState({ expandedKey: key });
      // close already open accordion
    } else {
      this.setState({ expandedKey: null });
    }
  };

  renderAccordion = accordion => {
    const { expandedKey } = this.state;
    if (!accordion.key) {
      throw new Error('All AccordionGroup accordion children must have a key');
    }
    return React.cloneElement(accordion, {
      isExpanded: expandedKey === accordion.key,
      onToggle: this.createToggleHandler(accordion.key),
    });
  };

  renderAccordions = () => {
    const { children } = this.props;
    return React.Children.map(children, this.renderAccordion);
  };

  render() {
    const { className, id, Container } = this.props;

    return (
      <Container className={className} id={id}>
        {this.renderAccordions()}
      </Container>
    );
  }
}
