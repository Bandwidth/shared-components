import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import BandwidthThemeProvider from '../BandwidthThemeProvider';
import DefaultStyleRoot from './styles/StyleRoot';
import withDragDropContext from './withDragDropContext';
import DefaultDragLayer from '../DragLayer';

const Provider = ({ StyleRoot, ThemeProvider, DragLayer, children }) => (
  <ThemeProvider>
    <StyleRoot>
      {children}
      <DragLayer />
    </StyleRoot>
  </ThemeProvider>
);

Provider.propTypes = {
  StyleRoot: PropTypes.func,
  ThemeProvider: PropTypes.func,
  DragLayer: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Provider.defaultProps = {
  StyleRoot: DefaultStyleRoot,
  ThemeProvider: BandwidthThemeProvider,
  DragLayer: DefaultDragLayer,
};

export default withDragDropContext(Provider);
