import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Header';
import Anchor from '../Anchor';
import Icon from '../Icon';

const Buttons = styled.div``;

const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.padding.medium};
`;

const ControlsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.padding.small};

  & > ${Header.Styled} {
    flex: 1;
    margin: 0;
  }

  & > ${Buttons} {
    flex: 0 0 auto;
    & > a {
      margin-left: ${({ theme }) => theme.padding.medium};
    }
  }
`;

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

    if (!title && !enableAdd && !enableDelete && !children) {
      return null;
    }

    return (
      <Container>
        <ControlsRow id={id} className={className}>
          <Header>{title}</Header>
          <Buttons>
            {
              enableAdd ?
                <Anchor onClick={onAdd} type="icon"><Icon size="21px" name="plusMath" /></Anchor> :
                null
            }
            {
              enableSearch ?
                <Anchor onClick={onSearch} type="icon"><Icon size="21px" name="search" /></Anchor> :
                null
            }
            {
              enableDelete ?
                <Anchor onClick={onDelete} type="icon"><Icon size="21px" name="trash" /></Anchor> :
                null
            }
          </Buttons>
        </ControlsRow>
        {children}
      </Container>
    )
  }
}

TableControls.usage = `
Generally sits above a table. Standardized format of the table name and some common controls.

\`\`\`
<TableControls
  title="Sample Table"
  enableAdd
  enableDelete
  enableSearch
  onAdd={...}
  onDelete={...}
  onSearch={...}
>
  Some extra top row content
</TableControls>
\`\`\`
`;

export default TableControls;
