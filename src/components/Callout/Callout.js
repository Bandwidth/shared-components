import React from 'react';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import * as styles from './styles';
import { Foreground } from 'behaviors';

/**
 * Renders a flyout on hover which can display helpful contextual information to the user.
 */
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
     * Where to place the element. Use a value from react-popper
     */
    placement: PropTypes.oneOf([
      'auto',
      'top',
      'top-start',
      'top-end',
      'right',
      'right-start',
      'right-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
    ]),
    /**
     * Boundary for the callout; either a selector or a DOM element
     */
    boundary: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
     * Maximum width of the callout
     */
    maxWidth: PropTypes.number,
    /**
     * Any additional props you want to supply to the containing element which
     * wraps the callout content
     */
    contentProps: PropTypes.object,
    /**
     * Provide a component to render the outer visual container of the callout content.
     * Must handle the `data-placement` attribute to determine its styling relative
     * to the anchored component!
     */
    Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    delay: 100,
    placement: 'top',
    content: '',
    boundary: null,
    maxWidth: 300,
    Container: styles.Container,
  };

  static styles = styles;

  state = { show: false };

  trigger = () => {
    this._timer = setTimeout(this.show, this.props.delay);
  };

  show = () => {
    this.setState({ show: true });
  };

  cancel = () => {
    this.setState({ show: false });
    clearTimeout(this._timer);
  };

  renderReferenceContent = ({ ref }) => {
    /* skip all props used by component and let outermost component to take an extra props */
    const {
      delay,
      children,
      content,
      boundary,
      maxWidth,
      placement,
      Container,
      ...extra
    } = this.props;
    return (
      <div
        style={{ display: 'inline-block' }}
        ref={ref}
        onMouseOver={this.trigger}
        onMouseLeave={this.cancel}
        {...extra}
      >
        {this.props.children}
      </div>
    );
  };

  renderPopperContent = ({ ref, style, placement }) => {
    const { Container, contentProps } = this.props;
    return (
      <Foreground>
        <Container
          {...contentProps}
          ref={ref}
          style={style}
          data-placement={placement}
          maxWidth={this.props.maxWidth}
        >
          {this.props.content}
        </Container>
      </Foreground>
    );
  };

  getBoundariesElement = () =>
    typeof this.props.boundary === 'string'
      ? document.querySelector(this.props.boundary)
      : this.props.boundary;

  render() {
    const { placement, ...rest } = this.props;
    const { show } = this.state;

    return (
      <Manager>
        <Reference>{this.renderReferenceContent}</Reference>
        {show && (
          <Popper
            placement={placement}
            modifiers={{
              preventOverflow: {
                boundariesElement:
                  this.getBoundariesElement() || window.document,
              },
            }}
            {...rest}
          >
            {this.renderPopperContent}
          </Popper>
        )}
      </Manager>
    );
  }
}

export default Callout;
