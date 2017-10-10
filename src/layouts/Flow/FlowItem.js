import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import Label from '../../components/Label';
import HelpText from '../../components/HelpText';
import { HORIZONTAL_SPACING } from './constants';
import theme from '../../theme';

const select = theme
  .register('FlowItem', {
    fontSize: '1em',
    labelHeight: '21px',
    labelMargin: `0 0 5.6px 0`,
    minContentHeight: '53px',
    minHelpTextHeight: '18px',
    helpTextMargin: `5.6px 0 0 0`,
    horizontalContentSpacing: HORIZONTAL_SPACING + 'px',
  })
  .addVariant('small', {
    fontSize: '0.75em',
    labelHeight: 'auto',
    minContentHeight: '20px',
    minHelpTextHeight: '14px',
    helpTextMargin: '0',
    labelMargin: '0',
  })
  .createSelector();

const Content = styled.div.withConfig({ displayName: 'FlowItemContent' })``;
const FlexibleContent = styled.div.withConfig({ displayName: 'FlowItemContentFlexible' })``;
const MoreContent = styled.div.withConfig({ displayName: 'FlowItemMoreContent' })``;

const Container = theme.connect(styled.div.withConfig({ displayName: 'FlowItemContainer' })`
  display: flex;
  flex-direction: column;
  font-size: ${select('fontSize')};
  align-items: ${({ alignment }) => {
    switch (alignment) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return 'stretch';
    }
  }};

  & > ${Label.Styled} {
    height: ${select('labelHeight')};
    margin: ${select('labelMargin')};
    overflow-x: hidden;
    flex-basis: ${select('labelHeight')};
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0;
  }

  & > ${Content} {
    height: ${select('minContentHeight')};
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;

    & > * {
      margin: auto;
    }

    & > *:not(:last-child):not(:only-child) {
      margin-right: ${select('horizontalContentSpacing')};
    }
  }

  & > ${FlexibleContent} {
    height: auto;
    flex-basis: ${select('minContentHeight')};
    flex-grow: 1;
    flex-shrink: 0;
  }

  & > ${HelpText.Styled} {
    min-height: ${select('minHelpTextHeight')};
    margin: ${select('helpTextMargin')};
    flex-basis: ${select('minHelpTextHeight')};
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0;
  }

  & > ${MoreContent} {
    flex: 1 0 0;
  }
`, { pure: false });

/**
 * Flow.Item is an individual element in the Flow system. It annotates the provided
 * content with a label, help text, and ensures correct layout with sibling elements when used properly inside
 * a Flow.Row. Flow.Item includes some advanced props like `moreContent` and `flexibleContent` to further
 * customize the way it looks and behaves.
 *
 * @class FlowItem
 * @extends {React.Component}
 */
class FlowItem extends React.Component {
  static propTypes = {
    /**
     * A label for this item. May be a Label instance or a string.
     */
    label: PropTypes.node,
    /**
     * Help text for this item. May be a HelpText instance or a string.
     */
    helpText: PropTypes.node,
    /**
     * Contents of this item. This goes between the label and the help text.
     */
    children: PropTypes.node,
    /**
     * More contents for this item. This goes below the help text and extends the size
     * of the component.
     */
    moreContent: PropTypes.node,
    /**
     * Allows the main content to grow larger than the default fixed size.
     */
    flexibleContent: PropTypes.bool,
    /**
     * Aligns the various elements within the item to a particular side.
     */
    alignment: PropTypes.oneOf(['stretch', 'left', 'right']),
    /**
     * Whether this item should render a visual error state.
     */
    error: PropTypes.bool,
    /**
     * An id to add to the item container element.
     */
    id: PropTypes.string,
    /**
     * A class name to add to the item container element.
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    helpText: null,
    children: null,
    moreContent: null,
    flexibleContent: false,
    error: false,
    id: null,
    className: null,
    alignment: 'stretch',
  };

  renderLabel = () => {
    const { label } = this.props;

    if (!!label && _.isString(label)) {
      return <Label>{label}</Label>;
    }

    // always render some label, even if blank, to keep layout consistent
    return label || <Label />;
  };

  renderChildren = () => this.props.flexibleContent ?
    <FlexibleContent>{this.props.children}</FlexibleContent> :
    <Content>{this.props.children}</Content>
  ;

  renderHelpText = () => {
    const { helpText, error } = this.props;

    if (_.isString(helpText)) {
      return <HelpText error={error}>{helpText}</HelpText>;
    } else if (helpText && helpText.props) {
      return React.cloneElement(helpText, { error: error });
    } else if (!helpText && error) {
      return <HelpText error>{error}</HelpText>;
    }

    return helpText || null;
  };

  renderMoreContent = () => this.props.moreContent ?
    <MoreContent>{this.props.moreContent}</MoreContent> :
    null
  ;

  render() {
    const { id, className } = this.props;
    return (
      <Container alignment={this.props.alignment} id={id} className={className}>
        {this.renderLabel()}
        {this.renderChildren()}
        {this.renderHelpText()}
        {this.renderMoreContent()}
      </Container>
    );
  }
}

FlowItem.Container = Container.WrappedComponent;
FlowItem.Content = Content;
FlowItem.FlexibleContent = FlexibleContent;
FlowItem.MoreContent = MoreContent;

FlowItem.Small = theme.variant('small')(FlowItem);

export default FlowItem;
