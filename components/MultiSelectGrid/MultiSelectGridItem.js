import React from 'react';
import PropTypes from 'prop-types';
import childrenWithProps from '../../extensions/childrenWithProps';

export default class MultiSelectGridItem extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    pendingToggle: PropTypes.bool,
    innerRef: PropTypes.func,
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
