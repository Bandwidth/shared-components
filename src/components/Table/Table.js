import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';

import BlobTable from 'skeletons/BlobTable';
import Loader from 'components/Loader';
import ScrollShadow from 'behaviors/ScrollShadow';

import RowDetails from './TableRowDetails';
import Header from './TableHeader';

import * as styles from './styles';

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
    /**
     * A component to render the table element
     */
    Styles: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component to render any content that overlays the table itself
     */
    Overlay: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component that wraps the whole table as a scroll context
     */
    ScrollContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**
     * A component that renders a <tbody>
     */
    Body: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    loading: false,
    className: null,
    id: null,
    headers: null,
    wrapBody: true,
    Styles: styles.TableStyles,
    Overlay: styles.Overlay,
    ScrollContainer: styles.ScrollContainer,
    Body: styles.Body,
  };

  static styles = styles;

  render() {
    const {
      className,
      id,
      children,
      loading,
      headers,
      wrapBody,
      Styles,
      Overlay,
      Body,
      ScrollContainer,
      ...rest
    } = this.props;
    return (
      <ScrollShadow horizontal ScrollContainer={ScrollContainer} {...rest}>
        <Styles cellPadding={0} cellSpacing={0} className={className} id={id}>
          <thead>{headers}</thead>
          {wrapBody ? <Body>{children}</Body> : children}
        </Styles>
        {loading && (
          <Overlay>
            <Loader />
          </Overlay>
        )}
      </ScrollShadow>
    );
  }
}

Table.Row = styles.Row;
Table.Header = Header;
Table.Cell = styles.Cell;
Table.RowDetails = RowDetails;
Table.Skeleton = BlobTable;
Table.Body = styles.Body;

Table.Small = withProps({
  Styles: styles.TableStyles.Small,
})(Table);
Table.Small.Skeleton = BlobTable.Small;

export default Table;
