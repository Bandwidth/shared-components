import React from 'react';
import PropTypes from 'prop-types';
import Column from './PaneColumn';
import Row from './PaneRow';
import Section from './PaneSection';
import { PaneStyles } from './styles';

/**
 * @deprecated Use SplitContentLayout
 */
class Pane extends React.Component {
  static propTypes = {
    /**
     * Contents of the pane.
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds an id to the pane.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the pane.
     */
    className: PropTypes.string,
    /**
     * A component to render the pane itself.
     */
    Styles: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    id: null,
    Styles: PaneStyles,
  };

  render() {
    const { title, children, className, id, Styles } = this.props;

    return (
      <Styles className={className} id={id}>
        {children}
      </Styles>
    );
  }
}

Pane.Column = Column;
Pane.Row = Row;
Pane.Section = Section;
export default Pane;
