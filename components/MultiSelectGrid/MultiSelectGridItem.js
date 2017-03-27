import React from 'react';
import childrenWithProps from '../../extensions/childrenWithProps';

export default class MultiSelectGridItem extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    pendingToggle: React.PropTypes.bool,
    innerRef: React.PropTypes.func,
  };

  static defaultProps = {
    active: false,
    pendingToggle: false,
    innerRef: undefined,
  };

  render() {
    const { active, pendingToggle, innerRef } = this.props;
    return (
      <div ref={innerRef}>
        {childrenWithProps(this.props, { active, pendingToggle })}
      </div>
    );
  }
}
