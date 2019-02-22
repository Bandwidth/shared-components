import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer as LibDragLayer } from 'react-dnd';
import * as styles from './styles';
import { DragContext } from 'components/DragContainer';
import identity from 'lodash.identity';

interface DragLayerProps {
  /**
   * Provided by DragGroupItem via drag context.
   * Contains details needed to render an item preview
   */
  item: {
    children: React.ReactNode;
    dimensions: {
      width: number;
      height: number;
    };
  };
  /**
   * Provided by
   * Offset values for the position of the dragged preview
   * item
   */
  clientOffset: { x: number; y: number };

  /**
   * Override the presentational component which renders the full-screen
   * overlay
   */
  Overlay: any;
  /**
   * Override the presentational component which positions and sizes
   * the preview element
   */
  PreviewContainer: any;
  Cutout: any;
}

/**
 * Renders a generic layer for drawing dragged items from draggable
 * components.
 */
class DragLayer extends React.Component<DragLayerProps> {
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
      React.Children.map(item.children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { wrapDragHandle: identity } as any)
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
      <DragContext.Provider value={{ wrapDragHandle: identity } as any}>
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
