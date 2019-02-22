import * as React from 'react';
import withDragDropContext from './withDragDropContext';
import DefaultDragLayer from '../DragLayer';
import ReactDOM from 'react-dom';
import irisTheme from 'themes/irisTheme';
import * as styles from './styles';
import { Foreground } from 'behaviors';

interface BandwidthProviderProps {
  /**
   *  A custom theme; pass one of the themes from `themes/` or pass in your own JSON!
   */
  customTheme?: any;
  /**
   * The DOM element to attach the drag layer. By default, attaches it to this component
   */
  dragLayerPortal?: Element;
  /**
   * The DOM element to provide to all Foreground components to render into. Skip this
   * prop and we will generate one for you inside BandwidthProvider
   */
  foregroundLayerPortal?: any;
  /**
   * Should the global style be skipped. Defaults to false.
   */
  skipGlobalStyle?: boolean;
  /**
   * Custom StyleRoot component
   */
  StyleRoot?: any;
  /**
   * Custom drag layer component
   */
  DragLayer?: React.ComponentClass;
  /**
   * Any stuff you want to render in your app
   */
  children: React.ReactNode;
}

/**
 * Including this provider at the root of your app will define some global styling,
 * and set up needed contexts for interactions like drag and drop. It also allows
 * you to control the theme programmatically or apply a different theme at a
 * particular level.
 */
class BandwidthProvider extends React.PureComponent<BandwidthProviderProps> {
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
          {DragLayer &&
            (dragLayerPortal ? (
              ReactDOM.createPortal(<DragLayer />, dragLayerPortal)
            ) : (
              <DragLayer />
            ))}
        </StyleRoot>
        {skipGlobalStyle || <styles.GlobalStyle theme={customTheme} />}
      </React.Fragment>
    );
  }
}

export default withDragDropContext(BandwidthProvider) as React.ComponentClass<
  BandwidthProviderProps
> & { styles: any };
