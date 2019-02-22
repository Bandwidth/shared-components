import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

interface ModalProps {
  /**
   * Content to render in the modal.
   */
  children: React.ReactNode;
  /**
   * An optional title for the top of the modal.
   */
  title: string;
  /**
   * Handles click events on the backdrop behind the modal or on the X in the title bar.
   */
  onClose?: () => void;
  /**
   * @deprecated
   * Handles click events on the backdrop, deprecated in favor of onClose
   */
  onBlockerClicked?: () => void;
  /**
   * Adds a class name to the modal window element.
   */
  className: string;
  /**
   * Adds an id to the modal window element.
   */
  id: string;
  /**
   * Content to render in a fixed position at the bottom of the modal - meant for action buttons, like close.
   */
  actionContent: React.ReactNode;
  /**
   * A component to render the action content area
   */
  ActionContent: any;
  /**
   * A component to render the full-screen blocker behind the modal
   */
  Blocker: any;
  /**
   * A component to render the content inside the modal window
   */
  Content: any;
  /**
   * A component to render the title at the top of the modal
   */
  Title: any;
  /**
   * A component to render the window container of the modal
   */
  Window: any;
  /**
   * A component to render the close icon in the right-top corner of the modal
   */
  CloseIcon: any;
  /**
   * A component to render the alignment container around action buttons
   */
  ButtonContainer: any;
  /**
   * Align action buttons
   */
  alignButtons: 'right' | 'left' | 'center';
  /**
   * Space between buttons
   */
  spaceBetweenButtons:
    | 'xs'
    | 'extraSmall'
    | 'sm'
    | 'small'
    | 'md'
    | 'medium'
    | 'lg'
    | 'large'
    | 'xl'
    | 'extraLarge';
}

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
class Modal extends React.Component<ModalProps> {
  static defaultProps = {
    title: null,
    onBlockerClicked: () => null,
    className: null,
    id: null,
    actionContent: null,
    ActionContent: styles.ActionContent,
    Blocker: styles.Blocker,
    Content: styles.Content,
    Title: styles.Title,
    Window: styles.Window,
    CloseIcon: styles.CloseIcon,
    ButtonContainer: styles.ButtonContainer,
    alignButtons: 'right',
    spaceBetweenButtons: 'sm',
  };

  static styles = styles;

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
      ButtonContainer,
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
      Title,
      ButtonContainer,
      ActionContent,
      ...rest
    } = this.props;

    return (
      <Blocker onClick={onClose || onBlockerClicked}>
        <Window
          onClick={this.handleModalClicked}
          id={id}
          className={className}
          {...rest}
        >
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
