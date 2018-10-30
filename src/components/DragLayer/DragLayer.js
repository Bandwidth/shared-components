import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer as LibDragLayer } from 'react-dnd';
import * as styles from './styles';
import { DragContext } from 'components/DragContainer';
import identity from 'lodash.identity';

/**
 * Renders a generic layer for drawing dragged items from draggable
 * components.
 */
class DragLayer extends React.Component {
  static propTypes = {
    /**
     * Provided by DragGroupItem via drag context.
     * Contains details needed to render an item preview
     */
    item: PropTypes.shape({
      children: PropTypes.node,
      dimensions: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
      }),
    }),
    /**
     * Provided by
     * Offset values for the position of the dragged preview
     * item
     */
    clientOffset: PropTypes.object,

    /**
     * Override the presentational component which renders the full-screen
     * overlay
     */
    Overlay: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * Override the presentational component which positions and sizes
     * the preview element
     */
    PreviewContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    item: null,
    clientOffset: null,
    Overlay: styles.Overlay,
    PreviewContainer: styles.DragItemPreviewContainer,
  };

  static styles = styles;

  renderPreviewContent = () => {
    const { item } = this.props;

    return (
      item.children &&
      React.Children.map(
        item.children,
        child =>
          child
            ? React.cloneElement(child, { wrapDragHandle: identity })
            : null,
      )
    );
  };

  render() {
    const {
      item,
      clientOffset,
      Overlay,
      PreviewContainer,
      Cutout,
      ...rest
    } = this.props;

    if (!item || !clientOffset) {
      return <Overlay {...rest} />;
    }

    const previewPositionStyles = {
      transform: `translate(${clientOffset.x}px, ${clientOffset.y}px)`,
      width: item.dimensions ? item.dimensions.width + 'px' : '0px',
      height: item.dimensions ? item.dimensions.height + 'px' : '0px',
    };

    return (
      <DragContext.Provider value={{ wrapDragHandle: identity }}>
        <Overlay {...rest}>
          <div style={previewPositionStyles}>
            <PreviewContainer>{this.renderPreviewContent()}</PreviewContainer>
          </div>
        </Overlay>
      </DragContext.Provider>
    );
  }
}

const collect = monitor => ({
  item: monitor.getItem(),
  clientOffset: monitor.getClientOffset(),
});

export default LibDragLayer(collect)(DragLayer);
