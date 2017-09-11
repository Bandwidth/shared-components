import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollBox from '../../behaviors/ScrollBox';
import sharedComponent from '../../sharedComponent';

const Blocker = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 100000;
`;

// content flex is `0 1 auto`: it won't grow beyond the content size, but can shrink if the window is too small
// to show everything.
const Content = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: ${({ naturalWidth }) => naturalWidth};
  max-width: 70vw;
  min-width: 20vw;
  height: auto;
  min-height: 0;
  max-height: 70vh;
  margin: 180px auto auto auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.overlay};
  position: relative;
`;

const Title = styled.h3`
  display: block;
  margin: 0;
  background: ${({ theme }) => theme.colors.borderLight};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.95em 1em 0.95em 1.5em;
  font-family: ${({ theme }) => theme.fonts.brand};
  font-size: 0.9em;
  font-weight: 600;
  text-transform: uppercase;
`;

export class Modal extends React.Component {
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
  };

  static defaultProps = {
    title: null,
    naturalWidth: 'auto',
    onBlockerClicked: () => null,
    className: null,
    id: null,
    actionContent: null,
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
      naturalWidth,
      title,
      children,
      actionContent,
    } = this.props;
    return (
      <Blocker onClick={onBlockerClicked}>
        <Content
          naturalWidth={naturalWidth}
          onClick={this.handleModalClicked}
          id={id}
          className={className}
        >
          {title ? <Title>{title}</Title> : null}
          <ScrollBox>{children}</ScrollBox>
          {actionContent}
        </Content>
      </Blocker>
    );
  }
}

export default sharedComponent({ Blocker, Content, Title })(Modal);
