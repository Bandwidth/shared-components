import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H1 from '../H';
import TableControlsContainer from './styles/TableControlsContainer';
import TableControlsRow from './styles/TableControlsRow';
import TableControlsIcons from './styles/TableControlsIcons';
import DefaultAnchor from 'components/Anchor';

class TableControls extends React.Component {
  static propTypes = {
    /**
     * Show a delete button.
     */
    enableDelete: PropTypes.bool,
    /**
     * Show an add button.
     */
    enableAdd: PropTypes.bool,
    /**
     * Show a search button.
     */
    enableSearch: PropTypes.bool,
    /**
     * A title to give for the table (optional).
     */
    title: PropTypes.string,
    /**
     * Any other things you'd like to render below the title and the main controls.
     */
    children: PropTypes.node,
    /**
     * Called when the user clicks the delete button.
     */
    onDelete: PropTypes.func,
    /**
     * Called when the user clicks the add button.
     */
    onAdd: PropTypes.func,
    /**
     * Called when the user clicks the search button.
     */
    onSearch: PropTypes.func,
    /**
     * Adds a class name to the container element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the container element.
     */
    id: PropTypes.string,
    /**
     * A component to render the containing element
     */
    Container: PropTypes.func,
    /**
     * A component to render the controls row, including header and icons
     */
    ControlsRow: PropTypes.func,
    /**
     * A component to render the container for icons. Mainly controls font size.
     */
    ControlsIcons: PropTypes.func,
    /**
     * A component to render an Anchor, defaults to library Anchor
     */
    Anchor: PropTypes.func,
  };

  static defaultProps = {
    enableDelete: false,
    enableAdd: false,
    enableSearch: false,
    title: null,
    children: null,
    onDelete: () => null,
    onAdd: () => null,
    onSearch: () => null,
    className: null,
    id: null,
    Container: TableControlsContainer,
    ControlsRow: TableControlsRow,
    ControlsIcons: TableControlsIcons,
    Anchor: DefaultAnchor,
  };

  render() {
    const {
      title,
      enableDelete,
      enableAdd,
      enableSearch,
      children,
      onDelete,
      onAdd,
      id,
      className,
      onSearch,
      Container,
      ControlsRow,
      ControlsIcons,
      Anchor,
    } = this.props;

    if (!title && !enableAdd && !enableDelete && !enableSearch && !children) {
      return null;
    }

    return (
      <Container>
        <ControlsRow id={id} className={className}>
          <H1>{title}</H1>
          <ControlsIcons>
            {enableAdd ? <Anchor onClick={onAdd} icon="plusMath" /> : null}
            {enableSearch ? <Anchor onClick={onSearch} icon="search" /> : null}
            {enableDelete ? <Anchor onClick={onDelete} icon="delete3" /> : null}
          </ControlsIcons>
        </ControlsRow>
        {children}
      </Container>
    );
  }
}

export default TableControls;
