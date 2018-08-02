import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';
import DefaultContainer from './styles/Container';
import DefaultChildContainer from './styles/ChildContainer';
import DefaultIconGroup from './styles/IconGroup';
import DragContext from './DragContext';

const DragHandle = styled(Icon)`
  &:hover:not(:active) {
    cursor: pointer;
  }
`;

const DefaultControls = (
  <React.Fragment>
    <Icon name="settings" />
    <Icon name="delete3" />
  </React.Fragment>
);

/**
 * This is a prebuilt example container that can be used with [DragList](/#!/DragList)
 * or [DragGroup](/#!/DragGroup). It features a drag handle and a section that can have
 * controls for the item - just set `controls` to a react node and attach handlers for
 * the click events as needed.
 */
class DragContainer extends React.PureComponent {
  static Context = DragContext;

  static propTypes = {
    /**
     * Should dragging be enabled or not?
     */
    canDrag: PropTypes.bool,
    /**
     * Pass in custom controls for the list item.
     */
    controls: PropTypes.node,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    canDrag: true,
    controls: DefaultControls,
    Container: DefaultContainer,
    ChildContainer: DefaultChildContainer,
    IconGroup: DefaultIconGroup,
  };

  renderContents = ({ isDragging, wrapDragHandle }) => {
    const {
      canDrag,
      controls,
      children,
      Container,
      ChildContainer,
      IconGroup,
    } = this.props;

    return (
      <Container isDragging={isDragging}>
        <ChildContainer isDragging={isDragging}>{children}</ChildContainer>
        <IconGroup isDragging={isDragging}>
          {controls}
          {/* Using wrapDragHandle to indicate which element is the handle */}
          {canDrag &&
            wrapDragHandle &&
            wrapDragHandle(<DragHandle name="moveGrabber" />)}
        </IconGroup>
      </Container>
    );
  };

  render() {
    return <DragContext.Consumer>{this.renderContents}</DragContext.Consumer>;
  }
}

export default DragContainer;
