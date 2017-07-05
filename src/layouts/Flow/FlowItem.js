import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import Label from '../../components/Label';
import HelpText from '../../components/HelpText';

const Content = styled.div.withConfig({ displayName: 'FlowItemContent' })``;
const FlexibleContent = styled.div.withConfig({ displayName: 'FlowItemContentFlexible' })``;
const MoreContent = styled.div.withConfig({ displayName: 'FlowItemMoreContent' })``;

const Container = styled.div.withConfig({ displayName: 'FlowItemContainer' })`
  display: flex;
  flex-direction: column;
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

  & > ${Label} {
    height: 21px;
    margin: 0;
    margin-bottom: 5.6px;
    overflow-x: hidden;
    flex-basis: 21px;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0;
  }

  & > ${Content} {
    height: 53px;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;

    & > * {
      margin: auto;
    }

    & > *:not(:last-child):not(:only-child) {
      margin-right: 30px;
    }
  }

  & > ${FlexibleContent} {
    height: auto;
    flex-basis: 53px;
    flex-grow: 1;
    flex-shrink: 0;
  }

  & > ${HelpText} {
    min-height: 18px;
    margin: 0;
    margin-top: 5.6px;
    flex-basis: 18px;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0;
  }

  & > ${MoreContent} {
    flex: 1 0 0;
  }
`;

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
    if (_.isString(this.props.helpText)) {
      return <HelpText error={this.props.error}>{this.props.helpText}</HelpText>;
    } else if (this.props.helpText && this.props.helpText.props) {
      return React.cloneElement(this.props.helpText, { error: this.props.error });
    }

    return this.props.helpText || null;
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

FlowItem.usage = `

`;

FlowItem.Container = Container;
FlowItem.Content = Content;
FlowItem.FlexibleContent = FlexibleContent;
FlowItem.MoreContent = MoreContent;

export default FlowItem;
