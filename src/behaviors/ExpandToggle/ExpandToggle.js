import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Collapse } from 'react-collapse';

/**
 * A prototypical accordion element with no styling. Renders one element which can be
 * clicked to toggle expanded state, and an expandable content area.
 */
class ExpandToggle extends React.Component {
  static propTypes = {
    /**
     * Sets the id of the containing collapsible element
     */
    id: PropTypes.string,
    /**
     * Sets the className of the containing collapsible element
     */
    className: PropTypes.string,
    /**
     * Callback for toggle events
     */
    onToggle: PropTypes.func,
    /**
     * Content to render within the toggle area. You may optionally pass a function,
     * which will be called with the current toggle on/off state.
     */
    toggleContent: PropTypes.node.isRequired,
    /**
     * Override ('control') toggling behavior, disabling default internal toggle state
     */
    isExpanded: PropTypes.bool,
    /**
     * Content to render inside the collapsible area
     */
    children: PropTypes.node.isRequired,
    /**
     * Whether to start expanded
     */
    startExpanded: PropTypes.bool,
  };

  static defaultProps = {
    id: null,
    className: null,
    onToggle: () => null,
    isExpanded: null,
    startExpanded: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      internalIsExpanded: props.startExpanded,
    };
  }

  handleToggle = () => {
    if (this.props.onToggle) {
      this.props.onToggle(this.calcIsExpanded());
    }
    this.setState({ internalIsExpanded: !this.state.internalIsExpanded });
  };

  calcIsExpanded = () => {
    const { isExpanded } = this.props;
    const { internalIsExpanded } = this.state;
    if (isExpanded === null) {
      return internalIsExpanded;
    }

    return isExpanded;
  };

  renderToggle = () => {
    const { toggleContent } = this.props;
    if (_.isFunction(toggleContent)) {
      return toggleContent(this.calcIsExpanded());
    }
    return toggleContent;
  };

  render() {
    const isExpanded = this.calcIsExpanded();
    const { children, id, className } = this.props;

    return (
      <div id={id} className={className}>
        <div style={{ cursor: 'pointer' }} onClick={this.handleToggle}>
          {this.renderToggle()}
        </div>
        <Collapse isOpened={isExpanded}>{children}</Collapse>
      </div>
    );
  }
}

ExpandToggle.usage = `
\`\`\`
<ExpandToggle
  toggleContent={<Label>Click me</Label>}
  startExpanded={false}
>
  Stuff!
</ExpandToggle>

<ExpandToggle
  isExpanded={true}
  toggleContent={<Label>Won't do anything</Label>}
>
  This one won't toggle, expand state is overridden to true!
</ExpandToggle>
\`\`\`
`;

export default ExpandToggle;
