import React from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

const Grid = styled.div`
  position: relative;
`;

const ItemWrapper = styled.div`
  position: absolute;
  transition: all 0.2s ease;
`;

export default class FluidGridList extends React.Component {
  static propTypes = {
    margins: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.shape({
        top: React.PropTypes.number,
        right: React.PropTypes.number,
        bottom: React.PropTypes.number,
        left: React.PropTypes.number,
      }),
    ]),

    limitColumns: React.PropTypes.number,
    children: React.PropTypes.node.isRequired,
  };

  static defaultProps = {
    margins: 8,
    limitColumns: Number.MAX_SAFE_INTEGER,
  };

  componentDidMount() {
    this.updateLayout();
    window.addEventListener('resize', debounce(this.updateLayout, 100));
  }

  componentDidUpdate() {
    this.updateLayout();
    // add transition after update, not initial render,
    // so that we don't get an ugly transition in from nothing
    this._grid.style.transition = 'height 0.2s ease';
  }

  wrappedChildren = () => {
    const { children } = this.props;
    this._items = [];

    return React.Children.map(children, (child, idx) => (
      <ItemWrapper
        key={idx}
        innerRef={(el) => { this._items[idx] = el; }}
      >
        {child}
      </ItemWrapper>
    ));
  };

  updateLayout = () => {
    const { limitColumns } = this.props;
    const items = this._items;
    const grid = this._grid;
    const gridWidth = grid.clientWidth;
    let yOffset = 0;
    let xOffset = 0;
    let tallestRowItem = 0;
    let currentColumn = 0;
    let lastRowHeight = 0;
    items.forEach((element, idx) => {
      const claimedXSpace = this.marginFor('left') +
        element.offsetWidth + this.marginFor('right');
      const claimedYSpace = this.marginFor('top') +
        element.offsetHeight + this.marginFor('bottom');

      tallestRowItem = Math.max(claimedYSpace, tallestRowItem);
      // what's the difference, you ask? this one doesn't get reset, so we can use it
      // outside of the loop
      lastRowHeight = tallestRowItem;

      let x = xOffset + this.marginFor('left');
      let y = yOffset + this.marginFor('top');
      if (xOffset + claimedXSpace > gridWidth || (currentColumn >= limitColumns)) {
        // edge case: when the box is not wide enough for one column,
        // don't move the first item down, just let it overflow.
        if (!(claimedXSpace < gridWidth && idx === 0)) {
          // new row
          y = yOffset + tallestRowItem + this.marginFor('top');
        }
        x = this.marginFor('left');
        // reset some things
        xOffset = 0;
        yOffset += tallestRowItem;
        tallestRowItem = 0;
        currentColumn = 0;
      }

      element.style.top = `${y}px`; // eslint-disable-line no-param-reassign
      element.style.left = `${x}px`; // eslint-disable-line no-param-reassign

      xOffset += claimedXSpace;
      currentColumn++; // eslint-disable-line no-plusplus
    });

    grid.style.height = `${yOffset + lastRowHeight}px`;
  };

  marginFor = (side) => {
    const { margins } = this.props;
    if (typeof margins === 'number') {
      return margins;
    }
    return margins[side];
  };

  render() {
    return (
      <Grid innerRef={(el) => { this._grid = el; }}>
        {this.wrappedChildren()}
      </Grid>
    );
  }
}
