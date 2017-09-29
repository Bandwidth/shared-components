import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollBox from '../../behaviors/ScrollBox';
import theme from '../../theme';

const select = theme
  .register('Modal', ({ colors, shadows, fonts }) => ({
    overlayBackground: colors.shadow,
    background: colors.white,
    width: 'auto',
    maxWidth: '70%',
    minWidth: '20%',
    minHeight: '0',
    maxHeight: '70vh',
    distanceFromTop: '180px',
    borderRadius: '5px',
    boxShadow: shadows.long,
    titleBackground: colors.grayLight,
    titleColor: colors.black,
    titleFont: fonts.brand,
    titleFontWeight: 600,
    titleFontSize: '0.9em',
    titleTextTransform: 'uppercase',
    titlePadding: '0.95em 1em 0.95em 1.5em',
  }))
  .createSelector();

const Blocker = styled.div`
  background: ${select('overlayBackground')};
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
  background: ${select('background')};
  width: ${select('width')};
  max-width: ${select('maxWidth')};
  min-width: ${select('minWidth')};
  flex: 0 1 auto;
  min-height: ${select('minHeight')};
  max-height: ${select('maxHeight')};
  margin: ${select('distanceFromTop')} auto auto auto;
  display: flex;
  flex-direction: column;
  border-radius: ${select('borderRadius')};
  box-shadow: ${select('shadow')};
  position: relative;
`;

const Title = styled.h3`
  display: block;
  margin: 0;
  background: ${select('titleBackground')};
  color: ${select('titleColor')};
  padding: ${select('titlePadding')};
  font-family: ${select('titleFontFamily')};
  font-size: ${select('titleFontSize')};
  font-weight: ${select('titleFontWeight')};
  text-transform: ${select('titleTextTransform')};
`;

const ActionContent = styled.div`
  position: relative;
  &::before {
    position: absolute;
    content: '';
    left: ${({ theme }) => theme.padding.large};
    right: ${({ theme }) => theme.padding.large};
    border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  }
`;

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
  };

  static defaultProps = {
    title: null,
    naturalWidth: 'auto',
    onBlockerClicked: () => null,
    className: null,
    id: null,
    actionContent: null,
  };

  handleModalClicked = (event) => {
    // prevents click event bubbling to blocker and triggering blockerclicked callback
    event.stopPropagation();
  };

  render() {
    const { id, className, onBlockerClicked, naturalWidth, title, children, actionContent } = this.props;
    return (
      <Blocker onClick={onBlockerClicked}>
        <Content
          naturalWidth={naturalWidth}
          onClick={this.handleModalClicked}
          id={id}
          className={className}
        >
          {title ? <Title>{title}</Title> : null}
          <ScrollBox>
            {children}
          </ScrollBox>
          <ActionContent>{actionContent}</ActionContent>
        </Content>
      </Blocker>
    );
  }
}

export default Modal;
