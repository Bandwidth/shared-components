import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer as LibDragLayer } from 'react-dnd';
import DragItemPreviewContainer from './styles/DragItemPreviewContainer';
import DragLayerOverlay from './styles/DragLayerOverlay';

class DragLayer extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    clientOffset: PropTypes.object,
    Overlay: PropTypes.func,
    PreviewContainer: PropTypes.func,
  };

  static defaultProps = {
    item: null,
    clientOffset: null,
    Overlay: DragLayerOverlay,
    PreviewContainer: DragItemPreviewContainer,
  };

  renderPreviewContent = () => {
    const { item } = this.props;
    return React.cloneElement(item.children, {
      // providing a no-op handle wrapper so the handle is still rendered
      wrapDragHandle: handle => handle,
    });
  };

  render() {
    const { item, clientOffset, Overlay, PreviewContainer } = this.props;

    if (!item || !clientOffset) {
      return <Overlay />;
    }

    const previewPositionStyles = {
      transform: `translate(${clientOffset.x}px, ${clientOffset.y}px)`,
      width: item.dimensions.width + 'px',
      height: item.dimensions.height + 'px',
    };

    return (
      <Overlay>
        <div style={previewPositionStyles}>
          <PreviewContainer>{this.renderPreviewContent()}</PreviewContainer>
        </div>
      </Overlay>
    );
  }
}

const collect = monitor => ({
  item: monitor.getItem(),
  clientOffset: monitor.getClientOffset(),
});

export default LibDragLayer(collect)(DragLayer);
