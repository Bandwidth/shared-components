import React from 'react';
import { debounce, xor } from 'lodash';
import styled from 'styled-components';
import GridItem from './MultiSelectGridItem';
import SelectBox from './SelectBox';

// TODO: update this to use CSS grid when it's ready
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  user-select: none;
  position: relative;
  cursor: crosshair;
`;

const boxContains = (containingBox, candidateBox, percentTolerance = 0) => {
  const xTolerance = percentTolerance * 0.01 * candidateBox.width;
  const yTolerance = percentTolerance * 0.01 * candidateBox.height;
  return (
    candidateBox.left + xTolerance >= containingBox.left &&
    candidateBox.right - xTolerance <= containingBox.right &&
    candidateBox.top + yTolerance >= containingBox.top &&
    candidateBox.bottom - yTolerance <= containingBox.bottom
  );
};

export default class MultiSelectGrid extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    onSelectionChanged: React.PropTypes.func,
    percentTolerance: React.PropTypes.number,
  };

  static defaultProps = {
    children: null,
    percentTolerance: 25,
    onSelectionChanged: () => {}, // no-op
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndexes: [],
      pendingSelectedIndexes: [],
      selectBox: {
        left: Number.MAX_SAFE_INTEGER,
        bottom: Number.MAX_SAFE_INTEGER,
        right: Number.MIN_SAFE_INTEGER,
        top: Number.MIN_SAFE_INTEGER,
      },
      isSelecting: false,
      selectStartLocation: {
        x: 0,
        y: 0,
      },
    };
  }

  wrappedChildren = () => {
    const { children } = this.props;
    const { selectedIndexes, pendingSelectedIndexes } = this.state;

    this._items = [];

    return React.Children.map(children, (child, idx) => (
      <GridItem
        key={idx}
        innerRef={(el) => { this._items[idx] = el; }}
        active={selectedIndexes.includes(idx)}
        pendingToggle={pendingSelectedIndexes.includes(idx)}
      >
        {child}
      </GridItem>
    ));
  };

  toggleIndividualItem = (idx) => {
    const { selectedIndexes } = this.state;
    this.setState({ selectedIndexes: xor(selectedIndexes, [idx]) });
  };

  calcElementsWithinBounds = (elements, bounds) => {
    const { percentTolerance } = this.props;

    return elements.reduce((result, element, idx) => {
      const box = element.getBoundingClientRect();
      // if selection contains item within tolerance, OR item contains whole selection
      if (boxContains(bounds, box, percentTolerance) || boxContains(box, bounds)) {
        result.push(idx);
      }
      return result;
    }, []);
  };

  handleMouseDown = (event) => {
    this.setState({
      selectStartLocation: {
        x: event.clientX,
        y: event.clientY,
      },
      isSelecting: true,
    });

    window.document.addEventListener('mousemove', this.handleMouseMove);
    window.document.addEventListener('mouseup', this.handleMouseUp);
  };

  handleMouseUp = (event) => {
    window.document.removeEventListener('mousemove', this.handleMouseMove);
    window.document.removeEventListener('mouseup', this.handleMouseUp);
    // calculate selected items, forcing a new pending selected items calculation first
    const selectBox = this.recalculateSelectionBox(event.clientX, event.clientY);
    const pendingSelectedIndexes = this.calcElementsWithinBounds(this._items, selectBox);
    const selectedIndexes = xor(pendingSelectedIndexes, this.state.selectedIndexes);

    this.setState({
      isSelecting: false,
      selectBox: {
        left: Number.MAX_SAFE_INTEGER,
        bottom: Number.MAX_SAFE_INTEGER,
        right: Number.MIN_SAFE_INTEGER,
        top: Number.MIN_SAFE_INTEGER,
      },
      selectedIndexes,
      pendingSelectedIndexes: [],
    });

    if (this.props.onSelectionChanged) {
      this.props.onSelectionChanged(selectedIndexes);
    }
  };

  handleMouseMove = (event) => {
    if (!this.state.isSelecting) {
      return;
    }
    // calc new min/max
    const selectBox = this.recalculateSelectionBox(event.clientX, event.clientY);
    this.setState({ selectBox });
  };

  recalculateSelectionBox = (mouseX, mouseY) => {
    const {
      selectStartLocation,
    } = this.state;

    const left = Math.min(mouseX, selectStartLocation.x);
    const top = Math.min(mouseY, selectStartLocation.y);
    const bottom = Math.max(mouseY, selectStartLocation.y);
    const right = Math.max(mouseX, selectStartLocation.x);
    return { left, right, top, bottom, x: left, y: top, width: Math.abs(right - left), height: Math.abs(bottom - top) };
  };

  recalculatePendingSelection = debounce(() => {
    const { _items } = this;
    const { selectBox } = this.state;
    const pendingSelectedIndexes = this.calcElementsWithinBounds(_items, selectBox);
    this.setState({ pendingSelectedIndexes });
  }, 100);

  boxToCSSPosition = (box) => {
    const gridBounds = this._grid.getBoundingClientRect();
    return {
      bottom: gridBounds.height - (box.bottom - gridBounds.top),
      left: box.left - gridBounds.left,
      top: box.top - gridBounds.top,
      right: gridBounds.width - (box.right - gridBounds.left),
    };
  };

  render() {
    const { isSelecting, selectBox } = this.state;

    return (
      <Grid
        onMouseDownCapture={this.handleMouseDown}
        innerRef={(el) => { this._grid = el; }}
      >
        {this.wrappedChildren()}
        {isSelecting ? <SelectBox style={this.boxToCSSPosition(selectBox)} /> : null}
      </Grid>
    );
  }
}
