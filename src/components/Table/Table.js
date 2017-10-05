import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

import Loader from '../Loader';

import Cell from './TableCell';
import Header from './TableHeader';
import Row from './TableRow';
import Controls from './TableControls';
import Simple from './SimpleTable';
import RowDetails from './TableRowDetails';
import Wrap from './TableWrap';
import TableBody from './TableBody';

const select = theme
  .register('Table', ({ colors }) => ({
    overlayBackground: colors.whiteShadow,
    fontSize: '1em',
  }))
  .addVariant('small', { fontSize: '0.8em' })
  .createSelector();

const BaseTable = styled.table`
  min-width: 100%;
  border-collapse: collapse;
  font-size: ${select('fontSize')};

  & > tbody, & > thead {
    background: transparent;
  }
`;

const Overlay = theme.connect(styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${select('overlayBackground')};
  display: flex;

  & > div {
    margin: auto;
  }
`);

class Table extends React.Component {
  static propTypes = {
    /**
     * Render the rows of the Table within its children.
     */
    children: PropTypes.node.isRequired,
    /**
     * Render headers for the columns with this property.
     */
    headers: PropTypes.node,
    /**
     * Renders a loading spinner over the table body.
     */
    loading: PropTypes.bool,
    /**
     * Adds a class name to the table element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the table element.
     */
    id: PropTypes.string,
    /**
     * Whether to wrap the passed children in a <Table.Body>. Defaults true.
     */
    wrapBody: PropTypes.bool,
  };

  static defaultProps = {
    loading: false,
    className: null,
    id: null,
    headers: null,
    wrapBody: true,
  };

  render() {
    const { children, headers, loading, className, id, wrapBody } = this.props;
    return (
      <Wrap>
        <BaseTable
          cellPadding={0}
          cellSpacing={0}
          className={className}
          id={id}
        >
          <thead>
            {headers}
          </thead>
          {wrapBody?
            <TableBody>
              {children}
            </TableBody> :
            children
          }
        </BaseTable>
        {loading &&
          <Overlay><Loader /></Overlay>
        }
      </Wrap>
    );
  }
}

Table.Row = Row;
Table.Header = Header;
Table.Cell = Cell;
Table.Controls = Controls;
Table.Simple = Simple;
Table.RowDetails = RowDetails;
Table.Wrap = Wrap;
Table.Body = TableBody;

Table.Small = theme.variant('small')(Table);

export default Table;
