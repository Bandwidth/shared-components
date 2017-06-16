import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Header';
import Anchor from '../Anchor';
import Icon from '../Icon';

const Buttons = styled.div``;

const ControlsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.padding.medium};

  & > ${Header} {
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
    enableDelete: PropTypes.bool,
    enableAdd: PropTypes.bool,
    enableSearch: PropTypes.bool,

    title: PropTypes.string,

    children: PropTypes.node,

    onDelete: PropTypes.func,
    onAdd: PropTypes.func,
    onSearch: PropTypes.func,
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
  };

  render() {
    const { title, enableDelete, enableAdd, enableSearch, children, onDelete, onAdd } = this.props;

    if (!title && !enableAdd && !enableDelete && !children) {
      return null;
    }

    return (
      <ControlsRow>
        <Header>{title}</Header>
        {children}
        <Buttons>
          {
            enableAdd ?
              <Anchor onClick={onAdd} type="icon"><Icon size="21px" name="plusMath" /></Anchor> :
              null
          }
          {
            enableSearch ?
              <Anchor onClick={onSearch} type="icon"><Icon size="21px" name="plusMath" /></Anchor> :
              null
          }
          {
            enableDelete ?
              <Anchor onClick={onDelete} type="icon"><Icon size="21px" name="trash" /></Anchor> :
              null
          }
        </Buttons>
      </ControlsRow>
    )
  }
}

TableControls.usage = `
# TableControls

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
