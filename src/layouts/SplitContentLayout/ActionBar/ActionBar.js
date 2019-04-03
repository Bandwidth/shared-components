import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { ACTION_BAR_HEIGHT } from '../constants';
import { Consumer } from '../Context';
import { ScrollShadow } from 'behaviors';
import PresenceNotifier from './PresenceNotifier';
import { CSSTransition } from 'react-transition-group';

/**
 * The Action Bar is a bar docked to the bottom right of the screen.
 * It aligns with the rightmost content area of the layout. It should
 * contain buttons, links, and other small controls. It also supports
 * an expanding full-screen popup area which can contain more complex
 * forms or controls.
 *
 * You can only have one ActionBar in any particular layout. This is a soft
 * limitation - we could change it - but from a design perspective, we
 * should not present the user with more than one set of possible actions
 * on a page.
 */
export default class ActionBar extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * Called with ({ expanded, toggleExpanded, barHeight })
     */
    renderExpandingContent: PropTypes.func,
    /**
     * Controls whether the action bar content area is expanded to fill the screen.
     */
    expanded: PropTypes.bool,
    /**
     * A component to override the one that renders the bar section
     */
    Bar: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /**
     * A component to override the one that renders the bottom content section
     */
    BottomContent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /**
     * A component to override the one that renders the control area section
     */
    ControlArea: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /**
     * A component to override the one that renders the expanding container section
     */
    ExpandingContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  };

  static defaultProps = {
    renderExpandingContent: null,
    Bar: styles.Bar,
    BottomContent: styles.BottomContent,
    ControlArea: styles.ControlArea,
    ExpandingContainer: styles.ExpandingContainer,
  };

  static styles = styles;

  state = {
    internalExpanded: !!this.props.expanded,
  };

  toggleExpanded = value =>
    this.setState(({ internalExpanded }) => ({
      internalExpanded: typeof value === 'boolean' ? value : !internalExpanded,
    }));

  getExpanded = () => {
    const {
      state: { internalExpanded },
      props: { expanded },
    } = this;
    return expanded === undefined ? internalExpanded : expanded;
  };

  renderChildren = () => {
    const {
      props: { children },
      toggleExpanded,
    } = this;

    const expanded = this.getExpanded();

    if (typeof children === 'function') {
      return children({
        toggleExpanded,
        expanded,
        barHeight: ACTION_BAR_HEIGHT,
      });
    }

    return children;
  };

  render() {
    const {
      props: {
        children,
        renderExpandingContent,
        Bar,
        BottomContent,
        ControlArea,
        ExpandingContainer,
      },
      toggleExpanded,
    } = this;

    const expanded = this.getExpanded();

    return (
      <Consumer>
        {layoutState =>
          layoutState.renderElement(
            'actionBar',
            <CSSTransition in={expanded} classNames="expand" timeout={200}>
              <Bar
                mainContentLocation={layoutState.mainContentLocation}
                secondaryContentPresent={layoutState.secondaryContentPresent}
                actionBarLocation={layoutState.actionBarLocation}
              >
                <PresenceNotifier
                  updateActionBarPresence={layoutState.updateActionBarPresence}
                />
                {renderExpandingContent && (
                  <ExpandingContainer className="action-bar-expanding-container">
                    {renderExpandingContent({
                      expanded,
                      toggleExpanded,
                      barHeight: ACTION_BAR_HEIGHT,
                    })}
                  </ExpandingContainer>
                )}
                <BottomContent
                  expanded={expanded}
                  className="action-bar-bottom-content"
                >
                  <ControlArea>{this.renderChildren()}</ControlArea>
                </BottomContent>
                <ScrollShadow.ConnectedShadow outer disabled={expanded} />
              </Bar>
            </CSSTransition>,
          )
        }
      </Consumer>
    );
  }
}
