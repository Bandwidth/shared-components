import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import BandwidthThemeProvider from '../BandwidthThemeProvider';
import DefaultStyleRoot from './styles/StyleRoot';
import withDragDropContext from './withDragDropContext';
import DefaultDragLayer from '../DragLayer';
import './styles/global'; // injects a global stylesheet

class BandwidthProvider extends React.PureComponent {
  static propTypes = {
    StyleRoot: PropTypes.func,
    ThemeProvider: PropTypes.func,
    DragLayer: PropTypes.func,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    StyleRoot: DefaultStyleRoot,
    ThemeProvider: BandwidthThemeProvider,
    DragLayer: DefaultDragLayer,
  };

  render() {
    const { StyleRoot, ThemeProvider, DragLayer, children } = this.props;
    return (
      <ThemeProvider>
        <StyleRoot>
          {children}
          <DragLayer />
        </StyleRoot>
      </ThemeProvider>
    );
  }
}

export default withDragDropContext(BandwidthProvider);
