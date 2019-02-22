import React from 'react';
import styled from 'styled-components';
import { defaultProps } from 'recompose';

interface GridProps {
  /**
   * The number of columns to use in the grid. Alternatively, provide "auto-fill"
   * or "auto-fit" to fit rows. See CSS grid for more details.
   */
  columns: string | number;
  /**
   * Minimum column size.
   */
  minSize: string;
  /**
   * Maximum column size. Usually does not need to be set.
   */
  maxSize: string;
  /**
   * Gap size between grid items both horizontally and vertically.
   */
  gridGap: string;
}

const GridDiv = styled.div<GridProps>`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: ${({ gridGap }) => gridGap};
  grid-template-columns: ${({ columns, minSize, maxSize }) =>
    `repeat(${columns}, minmax(${minSize}, ${maxSize}))`};
  & > * {
    grid-column: 1 span;
  }
`;

/**
 * `Grid` utilizes CSS grid to provide some basic grid functionality without needing to delve into CSS.
 * Typical usage will either provide `minSize` to set the minimum size of each column, which will then
 * be auto fit into rows and wrap, or will provide `columns` and allow the size of each column to automatically
 * be determined based on the available space.
 *
 * **NOTE:** If `columns` is unchanged or set to `'auto-fill'` or `'auto-fit'`, then `minSize` must be set.
 */
class Grid extends React.PureComponent<GridProps> {
  static defaultProps = {
    minSize: 'min-content',
    maxSize: '1fr',
    gridGap: 'var(--spacing-medium)',
    columns: 'auto-fit',
  };
  static Small = defaultProps({
    gridGap: 'var(--spacing-extra-small)',
    minSize: '30px',
  })(Grid);

  render() {
    const { children, ...rest } = this.props;
    return <GridDiv {...rest}>{children}</GridDiv>;
  }
}

Grid.Small = defaultProps({
  gridGap: 'var(--spacing-extra-small)',
  minSize: '30px',
})(Grid);

export default Grid;
