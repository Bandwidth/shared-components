import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';
import styled from 'styled-components';
import Item from './BulkSelectItem';

const select = theme.register('BulkSelect', (values) => ({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: values.colors.gray.border,
  background: values.colors.gray.light,
  padding: values.spacing.medium,
  itemsPerRow: 5,
  itemSpacing: '5px',
  flowDirection: 'row',
  divider: {
    margin: `0 0 ${values.spacing.medium} 0`,
    color: values.colors.text.default,
    textTransform: 'uppercase',
    fontWeight: 300,
    fontFamily: values.fonts.brand,
    textPadding: `0 1em 0 1em`,
    borderColor: values.colors.gray.border,
    borderWidth: '1px',
    borderStyle: 'solid',
  },
})).createSelector();

const BackgroundContainer = theme.connect(styled.div`
  border-width: ${select('borderWidth')};
  border-color: ${select('borderColor')};
  border-style: ${select('borderStyle')};
  background: ${select('background')};
  padding: ${select('padding')};
  overflow-y: auto;
`);

const Items = theme.connect(styled.div`
  display: flex;
  flex-direction: ${select('flowDirection')};
  flex-wrap: wrap;

  & > div {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc((1 / ${select('itemsPerRow')} - ${select('itemSpacing')}));
  }
`);

const Divider = theme.connect(styled.div`
  display: flex;
  flex-direction: row;
  margin: ${select('divider.margin')};

  & > h3 {
    color: ${select('divider.color')};
    margin: 0;
    margin-top: 3px;
    padding: ${select('divider.textPadding')};
    font-family: ${select('divider.fontFamily')};
    font-weight: ${select('divider.fontWeight')};
    flex: 0 0 auto;
    text-transform: ${select('divider.textTransform')};
  }

  & > span {
    border-top-width: ${select('divider.borderWidth')};
    border-top-style: ${select('divider.borderStyle')};
    border-top-color: ${select('divider.borderColor')};
    flex: 1;
    margin: auto;
  }
`);

class BulkSelect extends React.Component {
  static propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        selected: PropTypes.bool.isRequired,
        data: PropTypes.any.isRequired,
      })).isRequired,
    })),
    renderItem: PropTypes.func.isRequired,
    computeItemKey: PropTypes.func,
    onItemSelected: PropTypes.func.isRequired,
    onItemDeselected: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sections: [],
    computeItemKey: (item) => item.get ? item.get('id') : item.id || JSON.stringify(item),
  };

  createItemClickHandler = (item) => () => {
    if (item.selected) {
      this.props.onItemDeselected(item.data);
    } else {
      this.props.onItemSelected(item.data);
    }
  };

  renderSection = (section) => (
    <div key={section.title || 'all'}>
      {section.title &&
        <Divider>
          <h3>{section.title}</h3>
          <span />
        </Divider>
      }
      <Items>
        {section.items.map((item) => (
          <Item
            key={this.props.computeItemKey(item.data)}
            active={item.active}
            onClick={this.createItemClickHandler(item)}
          >
            {this.props.renderItem(item.data, item.selected)}
          </Item>
        ))}
      </Items>
    </div>
  );

  render() {
    return (
      <BackgroundContainer>
        {this.props.sections.map(this.renderSection)}
      </BackgroundContainer>
    );
  }
}

BulkSelect.Item = Item;

export default BulkSelect;
