import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withProps } from 'recompose';
import DefaultLabel from 'components/Label';
import DefaultHelpText from 'components/HelpText';
import FlowItemContainer from './styles/FlowItemContainer';
import FlowItemContent from './styles/FlowItemContent';
import FlowItemFlexibleContent from './styles/FlowItemFlexibleContent';
import FlowItemMoreContent from './styles/FlowItemMoreContent';

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
    /**
     * A component for rendering the containing element
     */
    Container: PropTypes.func,
    /**
     * A component for rendering the content area
     */
    Content: PropTypes.func,
    /**
     * A component for rendering content that is flexible in size
     */
    FlexibleContent: PropTypes.func,
    /**
     * A component for rendering the 'more content' area
     */
    MoreContent: PropTypes.func,
    /**
     * Allows overriding the default Label component
     */
    Label: PropTypes.func,
    /**
     * Allows overriding the default HelpText component
     */
    HelpText: PropTypes.func,
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
    Container: FlowItemContainer,
    Content: FlowItemContent,
    FlexibleContent: FlowItemFlexibleContent,
    MoreContent: FlowItemMoreContent,
    Label: DefaultLabel,
    HelpText: DefaultHelpText,
  };

  renderLabel = () => {
    const { label, Label } = this.props;

    if (!!label && _.isString(label)) {
      return <Label className="FlowItem-label">{label}</Label>;
    }

    // always render some label, even if blank, to keep layout consistent
    return label || <Label className="FlowItem-label" />;
  };

  renderChildren = () => {
    const { flexibleContent, FlexibleContent, Content, children } = this.props;

    if (flexibleContent) {
      return <FlexibleContent>{children}</FlexibleContent>;
    }
    return <Content>{children}</Content>;
  };

  renderHelpText = () => {
    const { helpText, error, HelpText } = this.props;

    if (_.isString(helpText)) {
      return (
        <HelpText className="FlowItem-helpText" error={error}>
          {helpText}
        </HelpText>
      );
    } else if (helpText && helpText.props) {
      return React.cloneElement(helpText, { error: error });
    } else if (!helpText && error) {
      return (
        <HelpText className="FlowItem-helpText" error>
          {error}
        </HelpText>
      );
    }

    return helpText || null;
  };

  renderMoreContent = () => {
    const { moreContent, MoreContent } = this.props;
    if (moreContent) {
      return <MoreContent>{moreContent}</MoreContent>;
    }
    return null;
  };

  render() {
    const { id, className, Container } = this.props;
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

FlowItem.Small = withProps({
  Container: FlowItemContainer.Small,
})(FlowItem);

export default FlowItem;
