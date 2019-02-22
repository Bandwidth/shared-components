import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon';
import * as styles from './styles';
import DragContext from './DragContext';

interface DragContainer {
  /**
   * Should dragging be enabled or not?
   */
  canDrag: boolean;
  /**
   * Pass in custom controls for the list item.
   */
  controls: React.ReactNode;
  /**
   * Content to render inside the container itself
   */
  children: React.ReactNode;
  /**
   * Replaces the component used to render the outer container
   */
  Container: any;
  /**
   * Replaces the component used to render the child container
   */
  ChildContainer: any;
  /**
   * Replaces the component which renders the controls icons
   */
  IconGroup: any;
}

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
 * This is a prebuilt example container that can be used with [DragList](#!/DragList)
 * or [DragGroup](#!/DragGroup). It features a drag handle and a section that can have
 * controls for the item - just set `controls` to a react node and attach handlers for
 * the click events as needed.
 */
class DragContainer extends React.PureComponent<DragContainer> {
  static Context = DragContext;

  static defaultProps = {
    canDrag: true,
    controls: DefaultControls,
    Container: styles.Container,
    ChildContainer: styles.ChildContainer,
    IconGroup: styles.IconGroup,
  };

  static styles = styles;

  renderContents = ({ isDragging, wrapDragHandle }) => {
    const {
      canDrag,
      controls,
      children,
      Container,
      ChildContainer,
      IconGroup,
      ...rest
    } = this.props;

    return (
      <Container isDragging={isDragging} {...rest}>
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
