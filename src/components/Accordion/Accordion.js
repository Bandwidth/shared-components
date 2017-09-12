import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExpandToggle from '../../behaviors/ExpandToggle';
import Icon from '../Icon';
import Group from './AccordionGroup';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Label = styled.div`
  padding: ${({ theme }) => theme.accordion.padding};
  color: ${({ theme }) => theme.accordion.labelFG};
  font-family: ${({ theme }) => theme.accordion.labelFontFamily};
  font-size: ${({ theme }) => theme.accordion.labelFontSize};
  text-transform: ${({ theme }) => theme.accordion.textTransform};
  font-weight: ${({ theme }) => theme.accordion.labelFontWeight};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;
`;

const ModdedIcon = styled(Icon)`
  color: #666;
  margin: auto 1em auto auto;
  transform: ${({ isExpanded }) => isExpanded ? 'rotate(90deg)' : 'rotate(0)'};
  transition: 0.2s all ease;
  font-weight: 100;

  &:after {
    padding-top: 0;
    padding-bottom: 0;
    font-size: ${({ theme }) => theme.accordion.iconFontSize};
  }
`;

const LabelText = styled.span`
  margin: auto;
  flex: 1;
`;

export const ContentPadding = styled.div`
  padding: ${({ theme }) => theme.accordion.padding};
  padding-top: 0;
  display: flex;
  flex-direction: column;
`;

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
  };

  static defaultProps = {
    isExpanded: null,
    isCollapsed: null,
    onToggle: null,
    className: null,
    id: null,
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
    <Label onClick={this.handleToggle}>
      <ModdedIcon isExpanded={isExpanded} name="forward" size={21} />
      <LabelText>{this.props.label}</LabelText>
    </Label>
  );

  render() {
    const { id, className, onToggle, children } = this.props;

    return (
      <Container>
        <ExpandToggle
          id={id}
          className={className}
          onToggle={onToggle}
          toggleContent={this.renderLabel}
          isExpanded={this.coalesceIsExpandedProps()}
        >
          {children}
        </ExpandToggle>
      </Container>
    )
  }
}

Accordion.Group = Group;
export default Accordion;
