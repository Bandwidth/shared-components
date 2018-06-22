import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import BandwidthThemeProvider from '../BandwidthThemeProvider';
import DefaultStyleRoot from './styles/StyleRoot';
import withDragDropContext from './withDragDropContext';
import DefaultDragLayer from '../DragLayer';
import ReactDOM from 'react-dom';
import irisTheme from 'theme/irisTheme';
import './styles/global'; // injects a global stylesheet

class BandwidthProvider extends React.PureComponent {
  static propTypes = {
    StyleRoot: PropTypes.func,
    ThemeProvider: PropTypes.func,
    DragLayer: PropTypes.func,
    customTheme: PropTypes.object,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    StyleRoot: DefaultStyleRoot,
    ThemeProvider: BandwidthThemeProvider,
    DragLayer: DefaultDragLayer,
    customTheme: irisTheme,
    dragLayerPortal: null,
  };

  render() {
    const {
      StyleRoot,
      ThemeProvider,
      DragLayer,
      dragLayerPortal,
      customTheme,
      children,
    } = this.props;
    return (
      <ThemeProvider theme={customTheme}>
        <StyleRoot customTheme={customTheme}>
          {children}
          {dragLayerPortal ? (
            ReactDOM.createPortal(<DragLayer />, dragLayerPortal)
          ) : (
            <DragLayer />
          )}
        </StyleRoot>
      </ThemeProvider>
    );
  }
}

export default withDragDropContext(BandwidthProvider);
