import React from 'react';
import PropTypes from 'prop-types';
import DefaultStyleRoot from './styles/StyleRoot';
import withDragDropContext from './withDragDropContext';
import DefaultDragLayer from '../DragLayer';
import ReactDOM from 'react-dom';
import irisTheme from 'themes/irisTheme';
import * as styles from './styles';
import { Foreground } from 'behaviors';

/**
 * Including this provider at the root of your app will define some global styling,
 * and set up needed contexts for interactions like drag and drop. It also allows
 * you to control the theme programmatically or apply a different theme at a
 * particular level.
 */
class BandwidthProvider extends React.PureComponent {
  static propTypes = {
    /**
     *  A custom theme; pass one of the themes from `themes/` or pass in your own JSON!
     */
    customTheme: PropTypes.object,
    /**
     * The DOM element to attach the drag layer. By default, attaches it to this component
     */
    dragLayerPortal: PropTypes.object,
    /**
     * The DOM element to provide to all Foreground components to render into. Skip this
     * prop and we will generate one for you inside BandwidthProvider
     */
    foregroundLayerPortal: PropTypes.any,
    /**
     * Should the global style be skipped. Defaults to false.
     */
    skipGlobalStyle: PropTypes.bool,
    /**
     * Custom StyleRoot component
     */
    StyleRoot: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * Custom drag layer component
     */
    DragLayer: PropTypes.func,
    /**
     * Any stuff you want to render in your app
     */
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    customTheme: irisTheme,
    dragLayerPortal: null,
    StyleRoot: styles.StyleRoot,
    DragLayer: DefaultDragLayer,
    skipGlobalStyle: false,
  };

  static styles = styles;

  render() {
    const {
      StyleRoot,
      DragLayer,
      dragLayerPortal,
      customTheme,
      skipGlobalStyle,
      children,
      foregroundLayerPortal,
    } = this.props;
    return (
      <React.Fragment>
        <StyleRoot className="styleroot">
          <Foreground.Provider element={foregroundLayerPortal}>
            {children}
          </Foreground.Provider>
          {dragLayerPortal ? (
            ReactDOM.createPortal(<DragLayer />, dragLayerPortal)
          ) : (
            <DragLayer />
          )}
        </StyleRoot>
        {skipGlobalStyle || <styles.GlobalStyle theme={customTheme} />}
      </React.Fragment>
    );
  }
}

export default withDragDropContext(BandwidthProvider);
