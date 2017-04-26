import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.table.bg};
  border: ${({ theme }) => theme.table.border};
  border-radius: ${({ theme }) => theme.table.borderRadius};
  overflow-x: auto;
  position: relative;
  font-size: ${({ theme }) => theme.table.fontSize};
`;

const BaseTable = styled.table`
  min-width: 100%;
`;

const THead = styled.thead`
  background: ${({ theme }) => theme.table.bg};
`;

const TBody = styled.tbody`
  background: ${({ theme }) => theme.table.bg};
`;

export default class Table extends React.Component {
  static propTypes = {
    filter: PropTypes.node.isRequired,
    rows: PropTypes.node.isRequired,
    headers: PropTypes.node.isRequired,
    sorting: PropTypes.bool,
  };

  static defaultProps = {
    sorting: false,
  };

  render() {
    const { rows, filter, headers, sorting } = this.props;
    return (
      <Wrap>
        <BaseTable cellPadding={0} cellSpacing={0}>
          <THead>
            {headers}
          </THead>
          <TBody style={{ opacity: sorting ? '0.5' : '1' }}>
            {rows}
          </TBody>
        </BaseTable>
      </Wrap>
    );
  }
}