import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import DefaultStyleRoot from './styles/StyleRoot';
import withDragDropContext from './withDragDropContext';
import DefaultDragLayer from '../DragLayer';
import ReactDOM from 'react-dom';
import irisTheme from 'theme/irisTheme';
import './styles/global'; // injects a global stylesheet

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
     * Custom StyleRoot component
     */
    StyleRoot: PropTypes.func,
    /**
     * Custom drag layer component
     */
    DragLayer: PropTypes.func,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    customTheme: irisTheme,
    dragLayerPortal: null,
    StyleRoot: DefaultStyleRoot,
    DragLayer: DefaultDragLayer,
  };

  render() {
    const {
      StyleRoot,
      DragLayer,
      dragLayerPortal,
      customTheme,
      children,
    } = this.props;
    return (
      <StyleRoot customTheme={customTheme}>
        {children}
        {dragLayerPortal ? (
          ReactDOM.createPortal(<DragLayer />, dragLayerPortal)
        ) : (
          <DragLayer />
        )}
      </StyleRoot>
    );
  }
}

export default withDragDropContext(BandwidthProvider);
