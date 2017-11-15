import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';

import ExpandToggle from '../../behaviors/ExpandToggle';
import AccordionLabel from './styles/AccordionLabel';
import AccordionArrow from './styles/AccordionArrow';
import AccordionBorder from './styles/AccordionBorder';
import AccordionLabelText from './styles/AccordionLabelText';
import AccordionContent from './styles/AccordionContent';
import AccordionGroup from './AccordionGroup';

/**
 * Accordion works like a controllable component. Provide the
 * isExpanded prop to control it, or don't to let it control itself.
 */
class Accordion extends React.Component {
  static propTypes = {
    /**
     * Content to render when the accordion is collapsed, and in the header of the expanded state.
     */
    label: PropTypes.node.isRequired,
    /**
     * Content inside the collapsible part of the accordion.
     */
    children: PropTypes.node.isRequired,
    /**
     * Pass isExpanded to override the internal collapsing state
     */
    isExpanded: PropTypes.bool,
    /**
     * DEPRECATED: the negation of isExpanded, overrides internal collapse state
     */
    isCollapsed: PropTypes.bool,
    /**
     * Add a handler for when the accordion is collapsed or expanded.
     */
    onToggle: PropTypes.func,
    /**
     * Set a classname for the accordion container element.
     */
    className: PropTypes.string,
    /**
     * Set an id for the accordion container element.
     */
    id: PropTypes.string,
    /**
     * A component to render the border
     */
    Border: PropTypes.func,
    /**
     * A component to render the label
     */
    Label: PropTypes.func,
    /**
     * A component to render the arrow
     */
    Arrow: PropTypes.func,
    /**
     * A component to render the text inside the label
     */
    LabelText: PropTypes.func,
    /**
     * A component to render the content area
     */
    Content: PropTypes.func,
  };

  static defaultProps = {
    isExpanded: null,
    isCollapsed: null,
    onToggle: null,
    className: null,
    id: null,
    Border: AccordionBorder,
    Label: AccordionLabel,
    Arrow: AccordionArrow,
    LabelText: AccordionLabelText,
    Content: AccordionContent,
  };

  coalesceIsExpandedProps = () => {
    const { isExpanded, isCollapsed } = this.props;
    if (isExpanded === null && isCollapsed === null) {
      return null;
    }
    if (isExpanded === null) {
      return !isCollapsed;
    }
    return isExpanded;
  }

  renderLabel = (isExpanded) => (
    <this.props.Label onClick={this.handleToggle}>
      <this.props.Arrow isExpanded={isExpanded} name="forward" size={21} />
      <this.props.LabelText>{this.props.label}</this.props.LabelText>
    </this.props.Label>
  );

  render() {
    const { id, className, onToggle, children, Border, Content } = this.props;

    return (
      <Border>
        <ExpandToggle
          id={id}
          className={className}
          onToggle={onToggle}
          toggleContent={this.renderLabel}
          isExpanded={this.coalesceIsExpandedProps()}
        >
          <Content>
            {children}
          </Content>
        </ExpandToggle>
      </Border>
    )
  }
}

Accordion.Small = withProps({
  Border: AccordionBorder.Small,
  Arrow: AccordionArrow.Small,
  Label: AccordionLabel.Small,
  Content: AccordionContent.Small,
})(Accordion);
Accordion.Group = AccordionGroup;

export default Accordion;
