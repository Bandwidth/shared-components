import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';
import { defaultProps } from 'recompose';

const GridDiv = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: ${({ gridGap }) => gridGap};
  grid-template-columns: ${({ columns, minSize, maxSize }) =>
    `repeat(${columns}, minmax(${minSize}, ${maxSize}))`};
  & > * {
    grid-column: 1 span;
  }
`;

class Grid extends React.PureComponent {
  static propTypes = {
    /**
     * The number of columns to use in the grid. Alternatively, provide "auto-fill"
     * or "auto-fit" to fit rows. See CSS grid for more details.
     */
    columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Minimum column size.
     */
    minSize: PropTypes.string,
    /**
     * Maximum column size. Usually does not need to be set.
     */
    maxSize: PropTypes.string,
    /**
     * Gap size between grid items both horizontally and vertically.
     */
    gridGap: PropTypes.string,
  };

  static defaultProps = {
    minSize: 'min-content',
    maxSize: '1fr',
    gridGap: 'var(--spacing-medium)',
    columns: 'auto-fit',
  };
  render() {
    const { props: { columns, minSize, maxSize, gridGap, children } } = this;
    return (
      <GridDiv
        columns={columns}
        minSize={minSize}
        maxSize={maxSize}
        gridGap={gridGap}
      >
        {children}
      </GridDiv>
    );
  }
}

Grid.Small = defaultProps({
  gridGap: 'var(--spacing-extra-small)',
  minSize: '30px',
})(Grid);

export default Grid;
