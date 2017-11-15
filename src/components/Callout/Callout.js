import React from 'react';
import PropTypes from 'prop-types';
import CalloutTag from './styles/CalloutTag';

class Callout extends React.Component {
  static propTypes = {
    /**
     * Miliseconds to wait before showing the callout.
     */
    delay: PropTypes.number,
    /**
     * Elements to render which will activate the callout on hover.
     */
    children: PropTypes.node.isRequired,
    /**
     * Content to render inside the callout itself.
     */
    content: PropTypes.node.isRequired,
    /**
     * A class name to pass to the callout activation area container.
     */
    className: PropTypes.string,
    /**
     * An id to pass to the callout activation area container.
     */
    id: PropTypes.string,
    /**
     * A component to render the flyout tag
     */
    Tag: PropTypes.func,
  };

  static defaultProps = {
    delay: 200,
    className: null,
    id: null,
    Tag: CalloutTag,
  };

  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  trigger = () => {
    this._timer = setTimeout(
      this.show,
      this.props.delay,
    );
  };

  show = () => {
    this.setState({ show: true });
  };

  cancel = () => {
    this.setState({ show: false });
    clearTimeout(this._timer);
  };

  render() {
    const { className, id, Tag } = this.props;
    return (
      <div
        onMouseEnter={this.trigger}
        onMouseLeave={this.cancel}
        className={className}
        id={id}
        style={{ position: 'relative' }}
      >
        {this.props.children}
        {this.state.show ? <Tag>{this.props.content}</Tag> : null}
      </div>
    )
  }
}

export default Callout;
