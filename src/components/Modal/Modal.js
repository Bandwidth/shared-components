import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ModalActionContent from './styles/ModalActionContent';
import ModalBlocker from './styles/ModalBlocker';
import ModalContent from './styles/ModalContent';
import ModalTitle from './styles/ModalTitle';
import ModalWindow from './styles/ModalWindow';

class Modal extends React.Component {
  static propTypes = {
    /**
     * Content to render in the modal.
     */
    children: PropTypes.node.isRequired,
    /**
     * An optional title for the top of the modal.
     */
    title: PropTypes.string,
    /**
     * Handles click events on the backdrop behind the modal. Use this to close it if desired.
     */
    onBlockerClicked: PropTypes.func,
    /**
     * Sets a natural CSS width for the modal window. Defaults to 'auto'.
     */
    naturalWidth: PropTypes.string,
    /**
     * Adds a class name to the modal window element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the modal window element.
     */
    id: PropTypes.string,
    /**
     * Content to render in a fixed position at the bottom of the modal - meant for action buttons, like close.
     */
    actionContent: PropTypes.node,
    /**
     * A component to render the action content area
     */
    ActionContent: PropTypes.func,
    /**
     * A component to render the full-screen blocker behind the modal
     */
    Blocker: PropTypes.func,
    /**
     * A component to render the content inside the modal window
     */
    Content: PropTypes.func,
    /**
     * A component to render the title at the top of the modal
     */
    Title: PropTypes.func,
    /**
     * A component to render the window container of the modal
     */
    Window: PropTypes.func,
  };

  static defaultProps = {
    title: null,
    onBlockerClicked: () => null,
    className: null,
    id: null,
    actionContent: null,
    ActionContent: ModalActionContent,
    Blocker: ModalBlocker,
    Content: ModalContent,
    Title: ModalTitle,
    Window: ModalWindow,
  };

  handleModalClicked = event => {
    // prevents click event bubbling to blocker and triggering blockerclicked callback
    event.stopPropagation();
  };

  render() {
    const {
      id,
      className,
      onBlockerClicked,
      title,
      children,
      actionContent,
      Blocker,
      Content,
      Window,
      ActionContent,
      Title,
    } = this.props;

    return (
      <Blocker onClick={onBlockerClicked}>
        <Window onClick={this.handleModalClicked} id={id} className={className}>
          {title ? <Title>{title}</Title> : null}
          <Content>{children}</Content>
          {actionContent && <ActionContent>{actionContent}</ActionContent>}
        </Window>
      </Blocker>
    );
  }
}

export default Modal;
