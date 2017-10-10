import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Heading';
import Anchor from '../Anchor';
import BaseIcon from '../Icon';
import theme from '../../theme';

const select = theme
  .register('TableControls', ({ spacing }) => ({
    margin: `0 0 ${spacing.medium} 0`,
    controlsMargin: `0 0 ${spacing.small} 0`,
    controlSpacing: spacing.medium,
  }))
  .createSelector();

const Container = theme.connect(styled.div`
  margin: ${select('margin')};
`);

const ControlsRow = theme.connect(styled.div`
  display: flex;
  flex-direction: row;
  margin: ${select('controlsMargin')};

  & > h1 {
    flex: 1;
    margin: 0;
    line-height: 1;
  }

  & > div {
    flex: 0 0 auto;
    & > a {
      margin-left: ${select('controlSpacing')};
    }
  }
`);

theme.registerVariant('Icon', 'tableControls', {
  size: '21px',
});

const Icon = theme.variant('tableControls', true)(BaseIcon);

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
      onSearch
    } = this.props;

    if (!title && !enableAdd && !enableDelete && !enableSearch && !children) {
      return null;
    }

    return (
      <Container>
        <ControlsRow id={id} className={className}>
          <Header>{title}</Header>
          <div>
            {
              enableAdd ?
                <Anchor onClick={onAdd} type="icon"><Icon name="plusMath" /></Anchor> :
                null
            }
            {
              enableSearch ?
                <Anchor onClick={onSearch} type="icon"><Icon name="search" /></Anchor> :
                null
            }
            {
              enableDelete ?
                <Anchor onClick={onDelete} type="icon"><Icon name="trash" /></Anchor> :
                null
            }
          </div>
        </ControlsRow>
        {children}
      </Container>
    )
  }
}

export default TableControls;
