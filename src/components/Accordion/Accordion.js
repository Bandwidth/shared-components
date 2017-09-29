import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExpandToggle from '../../behaviors/ExpandToggle';
import Icon from '../Icon';
import Group from './AccordionGroup';
import theme from '../../theme';

const select = theme
  .register('Accordion', ({ colors, fonts, spacing }) => ({
    border: `1px solid ${colors.border}`,
    labelPadding: spacing.large,
    labelColor: colors.primary,
    labelFont: fonts.brand,
    labelFontSize: '1.5em',
    labelFontWeight: 400,
    labelTextTransform: 'none',
    iconColor: colors.black,
    iconFontWeight: 100,
    iconSize: '1.5em',
    contentPadding: spacing.large,
  })).addVariant('small', ({ spacing, colors }) => ({
    labelPadding: spacing.medium,
    labelColor: colors.black,
    labelFontSize: '1em',
    labelFontWeight: 600,
    labelTextTransform: 'uppercase',
    iconSize: '1em',
    contentPadding: spacing.medium,
  })).createSelector();

export const Container = styled.div`
  border: ${select('border')};
`;

const Label = theme.connect(styled.div`
  padding: ${select('labelPadding')};
  color: ${select('labelColor')};
  font-family: ${select('labelFont')};
  font-size: ${select('labelFontSize')};
  text-transform: ${select('labelTextTransform')};
  font-weight: ${select('labelFontWeight')};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  user-select: none;
`);

const AccordionExpandIcon = theme.connect(styled(Icon)`
  color: ${select('iconColor')};
  margin: auto 1em auto auto;
  transform: ${({ isExpanded }) => isExpanded ? 'rotate(90deg)' : 'rotate(0)'};
  transition: 0.2s all ease;
  font-weight: ${select('iconFontWeight')};

  &:after {
    padding-top: 0;
    padding-bottom: 0;
    font-size: ${select('iconSize')};
  }
`);

const LabelText = theme.connect(styled.span`
  margin: auto;
  flex: 1;
`);

export const ContentPadding = theme.connect(styled.div`
  padding: ${select('contentPadding')};
  padding-top: 0;
  display: flex;
  flex-direction: column;
`);

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
      <AccordionExpandIcon isExpanded={isExpanded} name="forward" size={21} />
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
          <ContentPadding>{children}</ContentPadding>
        </ExpandToggle>
      </Container>
    )
  }
}

Accordion.Group = Group;
Accordion.Small = theme.variant('small')(Accordion);
export default Accordion;
