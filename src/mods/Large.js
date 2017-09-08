import React from 'react';
import PropTypes from 'prop-types';

class Large extends React.Component {
  static childContextTypes = {
    mods: PropTypes.shape({
      large: PropTypes.bool,
    }),
  };

  getChildContext() {
    return { mods: { large: true } };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default Large;
