import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import theme from '../../theme';
import styled from 'styled-components';
import BulkSelectItem from './styles/BulkSelectItem';
import BulkSelectBorder from './styles/BulkSelectBorder';
import BulkSelectDivider from './styles/BulkSelectDivider';
import BulkSelectItemContainer from './styles/BulkSelectItemContainer';

class BulkSelect extends React.Component {
  static propTypes = {
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            selected: PropTypes.bool.isRequired,
            data: PropTypes.any.isRequired,
          }),
        ).isRequired,
      }),
    ),
    /**
     * DEPRECATED: see renderItemContents
     */
    renderItem: PropTypes.func,
    /**
     * Renders the node inside an item. Passed (item, isSelected).
     */
    renderItemContents: PropTypes.func,
    /**
     * Should return a unique key for an item
     */
    computeItemKey: PropTypes.func,
    onItemSelected: PropTypes.func,
    onItemDeselected: PropTypes.func,
    /**
     * A component to render an item. Receives 'selected' prop.
     */
    Item: PropTypes.func,
    /**
     * A component to render the border box around the BulkSelect
     */
    Border: PropTypes.func,
    /**
     * A component to render the divider between sections
     */
    Divider: PropTypes.func,
    /**
     * A component to render the element that contains items
     */
    ItemContainer: PropTypes.func,
  };

  static defaultProps = {
    sections: [],
    computeItemKey: item =>
      item.get ? item.get('id') : item.id || JSON.stringify(item),
    onItemSelected: () => null,
    onItemDeselected: () => null,
    Item: BulkSelectItem,
    Border: BulkSelectBorder,
    Divider: BulkSelectDivider,
    ItemContainer: BulkSelectItemContainer,
  };

  createItemClickHandler = item => () => {
    if (item.selected) {
      this.props.onItemDeselected(item.data);
    } else {
      this.props.onItemSelected(item.data);
    }
  };

  renderSection = section => {
    const {
      Divider,
      Item,
      ItemContainer,
      computeItemKey,
      renderItem,
      renderItemContents,
    } = this.props;

    const resolvedRenderItemContents = renderItemContents || renderItem;

    return (
      <div key={section.title || 'all'}>
        {section.title && (
          <Divider>
            <h3>{section.title}</h3>
            <span />
          </Divider>
        )}
        <ItemContainer>
          {section.items.map(item => (
            <Item
              key={computeItemKey(item.data)}
              selected={item.selected}
              disabled={item.disabled}
              onClick={this.createItemClickHandler(item)}
            >
              {resolvedRenderItemContents(item.data, item.selected)}
            </Item>
          ))}
        </ItemContainer>
      </div>
    );
  };

  render() {
    const { sections, Border } = this.props;

    return <Border>{sections.map(this.renderSection)}</Border>;
  }
}

BulkSelect.Small = withProps({ ItemContainer: BulkSelectItemContainer.Small })(
  BulkSelect,
);

BulkSelect.Colorful = withProps({ Item: BulkSelectItem.Colorful })(BulkSelect);

export default BulkSelect;
