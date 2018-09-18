import React from 'react';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import P from 'components/P';
import HelpIcon from './styles/HelpIcon';
import Container from './styles/HelpCalloutContainer';

class HelpCallout extends React.Component {
  static propTypes = {
    /**
     * Where to place the element. Use a value from react-popper
     */
    placement: PropTypes.string,
    /**
     * Content to render inside the callout
     */
    content: PropTypes.node,
    /**
     * Boundary for the callout; either a selector or a DOM element
     */
    boundary: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
     * Maximum width of the callout
     */
    maxWidth: PropTypes.number,
  };

  static defaultProps = {
    placement: 'top',
    content: '',
    boundary: null,
    maxWidth: 300,
  };

  state = {
    showCallout: false,
  };

  onMouseOver = () => {
    this.setState({ showCallout: true });
  };

  onMouseLeave = () => {
    this.setState({ showCallout: false });
  };

  renderReference = ({ ref }) => (
    <HelpIcon
      name="help"
      innerRef={ref}
      onMouseOver={this.onMouseOver}
      onMouseLeave={this.onMouseLeave}
    />
  );

  renderPopper = ({ ref, style, placement }) => (
    <Container
      innerRef={ref}
      style={style}
      data-placement={placement}
      maxWidth={this.props.maxWidth}
    >
      {this.props.content}
    </Container>
  );

  getBoundariesElement = () =>
    typeof this.props.boundary === 'string'
      ? document.querySelector(this.props.boundary)
      : this.props.boundary;

  render() {
    const { placement, children } = this.props;
    const { showCallout } = this.state;

    return (
      <Manager>
        <div style={{ display: 'flex' }}>
          {children}
          <Reference>{this.renderReference}</Reference>
        </div>
        {showCallout && (
          <Popper
            placement={placement}
            positionFixed
            modifiers={{
              preventOverflow: {
                boundariesElement:
                  this.getBoundariesElement() || window.document,
              },
            }}
          >
            {this.renderPopper}
          </Popper>
        )}
      </Manager>
    );
  }
}

export default HelpCallout;
