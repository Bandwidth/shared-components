import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollBox from '../../behaviors/ScrollBox';
import theme from '../../theme';
import { DefaultVariant } from 'react-studs';

const select = theme
  .register('Modal', ({ colors, shadows, fonts, spacing }) => ({
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
    title: {
      background: colors.grayMedium,
      color: colors.black,
      fontFamily: fonts.brand,
      fontWeight: 600,
      fontSize: '0.9em',
      textTransform: 'uppercase',
      padding: '0.95em 1em 0.95em 1.5em',
    },
    actionContent: {
      borderColor: colors.borderLight,
      borderWidth: '1px',
      borderStyle: 'solid',
      padding: `${spacing.large} 0`,
      margin: `0 ${spacing.large}`,
    },
    contentPadding: spacing.large,
  }))
  .addVariant('wide', {
    width: '100%',
  })
  .createSelector();
const titleSelect = (val) => select('title.' + val);
const actionSelect = (val) => select('actionContent.' + val);

const Blocker = theme.connect(styled.div`
  background: ${select('overlayBackground')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 100000;
`);

// content flex is `0 1 auto`: it won't grow beyond the content size, but can shrink if the window is too small
// to show everything.
const Content = theme.connect(styled.div`
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
  box-shadow: ${select('boxShadow')};
  position: relative;
`);

const InnerContent = theme.connect(styled.div`
  overflow-y: auto;
  padding: ${select('contentPadding')};
`);

const Title = theme.connect(styled.h3`
  display: block;
  margin: 0;
  background: ${titleSelect('background')};
  color: ${titleSelect('color')};
  padding: ${titleSelect('padding')};
  font-family: ${titleSelect('fontFamily')};
  font-size: ${titleSelect('fontSize')};
  font-weight: ${titleSelect('fontWeight')};
  text-transform: ${titleSelect('textTransform')};
`);

const ActionContent = theme.connect(styled.div`
  position: relative;
  padding: ${actionSelect('padding')};
  margin: ${actionSelect('margin')};

  &::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    border-top-width: ${actionSelect('borderWidth')};
    border-top-style: ${actionSelect('borderStyle')};
    border-top-color: ${actionSelect('borderColor')};
  }
`);

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
    const { id, className, onBlockerClicked, title, children, actionContent } = this.props;
    return (
      <Blocker onClick={onBlockerClicked}>
        <Content
          onClick={this.handleModalClicked}
          id={id}
          className={className}
        >
          {title ? <Title>{title}</Title> : null}
          <InnerContent>
            <DefaultVariant>
              <div>
                {children}
              </div>
            </DefaultVariant>
          </InnerContent>
          {actionContent &&
            <ActionContent>{actionContent}</ActionContent>
          }
        </Content>
      </Blocker>
    );
  }
}

Modal.Wide = theme.variant('wide')(Modal);

export default Modal;
