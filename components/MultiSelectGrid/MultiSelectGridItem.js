import React from 'react';
import styled from 'styled-components';
import childrenWithProps from '../extensions/childrenWithProps';

export default class MultiSelectGridItem extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    pendingToggle: React.PropTypes.bool,
    innerRef: React.PropTypes.func,
  };

  render() {
    const { children, active, pendingToggle, innerRef, onClick } = this.props;
    return (
      <div
        ref={this.props.innerRef}
        >
        {childrenWithProps(this.props, { active, pendingToggle })}
      </div>
    );
  }
}
