import React from 'react';
import PropTypes from 'prop-types';
import ModalActionContent from './styles/ModalActionContent';
import ModalBlocker from './styles/ModalBlocker';
import ModalContent from './styles/ModalContent';
import ModalTitle from './styles/ModalTitle';
import ModalWindow from './styles/ModalWindow';
import ModalCloseIcon from './styles/ModalCloseIcon';
import ButtonContainer from './styles/ButtonContainer';

/**
 * Unlike traditional modal dialogs, Modal doesn't include functionality for closing or opening.
 * It's recommended that you render Modal as a state in your application or
 * as a route in your React application with React Router.
 *
 * Provides `title` prop for adding a title, and `onBlockerClicked` if you want to hook the click
 * event on the shadow 'blocker' element which covers the page.
 *
 * You can also use the `actionContent` prop to pass in stuff to render which will be fixed to the
 * bottom of the modal. The rest of the content will scroll as it gets too large, but this content
 * will continue to be visible at the bottom. Use this for things like close buttons or confirm buttons,
 * which should always be visible.
 */
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
     * @deprecated
     * Handles click events on the backdrop, deprecated in favor of onClose
     */
    onBlockerClicked: PropTypes.func,
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
    ActionContent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the full-screen blocker behind the modal
     */
    Blocker: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the content inside the modal window
     */
    Content: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the title at the top of the modal
     */
    Title: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the window container of the modal
     */
    Window: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render the close icon in the right-top corner of the modal
     */
    CloseIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * Align action buttons
     */
    alignButtons: PropTypes.oneOf(['right', 'left', 'center']),
    /**
     * Space between buttons
     */
    spaceBetweenButtons: PropTypes.oneOf([
      'xs',
      'extraSmall',
      'sm',
      'small',
      'md',
      'medium',
      'lg',
      'large',
      'xl',
      'extraLarge',
    ]),
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
    CloseIcon: ModalCloseIcon,
    alignButtons: 'right',
    spaceBetweenButtons: 'sm',
  };

  handleModalClicked = event => {
    // prevents click event bubbling to blocker and triggering blockerclicked callback
    event.stopPropagation();
  };

  renderTitle = () => {
    const { title, Title } = this.props;
    if (!title) return null;
    return <Title>{title}</Title>;
  };

  renderCloseIcon = () => {
    const { CloseIcon, onClose } = this.props;
    if (!onClose) return null;
    return <CloseIcon onClick={onClose} />;
  };

  renderActions = () => {
    const {
      actionContent,
      ActionContent,
      alignButtons,
      spaceBetweenButtons,
    } = this.props;

    return (
      actionContent && (
        <ActionContent>
          <ButtonContainer align={alignButtons} spacing={spaceBetweenButtons}>
            {actionContent}
          </ButtonContainer>
        </ActionContent>
      )
    );
  };

  render() {
    const {
      id,
      className,
      onClose,
      onBlockerClicked,
      children,
      Blocker,
      Content,
      Window,
    } = this.props;

    return (
      <Blocker onClick={onClose || onBlockerClicked}>
        <Window onClick={this.handleModalClicked} id={id} className={className}>
          {this.renderTitle()}
          {this.renderCloseIcon()}
          <Content>{children}</Content>
          {this.renderActions()}
        </Window>
      </Blocker>
    );
  }
}

export default Modal;
