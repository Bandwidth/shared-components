import React from 'react';

class Compact extends React.Component {
  getChildContext() {
    return { mods: { compact: true } };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default Compact;
