import React from 'react';
import PropTypes from 'prop-types';

class Small extends React.Component {
  static childContextTypes = {
    mods: PropTypes.shape({
      small: PropTypes.bool,
    }),
  };

  getChildContext() {
    return { mods: { small: true } };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default Small;
