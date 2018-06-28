import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ModalActionContent from './styles/ModalActionContent';
import ModalBlocker from './styles/ModalBlocker';
import ModalContent from './styles/ModalContent';
import ModalTitle from './styles/ModalTitle';
import ModalWindow from './styles/ModalWindow';
import Anchor from 'components/Anchor';

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
     * Handles click events on the backdrop behind the modal or on the X in the title bar.
     */
    onClose: PropTypes.func,
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

  renderTitle = () => {
    const { title, onClose, Title } = this.props;
    if (!title) return null;
    return (
      <Title>
        {title}
        <Anchor icon="delete2" onClick={onClose} />
      </Title>
    );
  };

  render() {
    const {
      id,
      className,
      onClose,
      children,
      actionContent,
      Blocker,
      Content,
      Window,
      ActionContent,
    } = this.props;

    return (
      <Blocker onClick={onClose}>
        <Window onClick={this.handleModalClicked} id={id} className={className}>
          {this.renderTitle()}
          <Content>{children}</Content>
          {actionContent && <ActionContent>{actionContent}</ActionContent>}
        </Window>
      </Blocker>
    );
  }
}

export default Modal;
