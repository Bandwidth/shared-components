import React from 'react';
import PropTypes from 'prop-types';

class Compact extends React.Component {
  static childContextTypes = {
    mods: PropTypes.shape({
      compact: PropTypes.bool,
    }),
  };

  getChildContext() {
    return { mods: { compact: true } };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default Compact;
