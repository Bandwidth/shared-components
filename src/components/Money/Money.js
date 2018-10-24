import React from 'react';
import PropTypes from 'prop-types';
import formatMoney from '../../extensions/formatMoney';
import MoneyStyles from './styles/MoneyStyles';

class Money extends React.Component {
  static propTypes = {
    /**
     * The monetary value to show.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /**
     * Whether or not to show a +/- sign before the amount (defaults true)
     */
    showSign: PropTypes.bool,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * A component to render the text itself. Will be passed a `value` Number prop.
     */
    Styles: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  static defaultProps = {
    showSign: true,
    className: null,
    id: null,
    value: 0,
    Styles: MoneyStyles,
  };

  getSign() {
    const { value } = this.props;
    return value >= 0 ? '+' : '-';
  }

  render() {
    const { value, showSign, id, className, Styles } = this.props;
    return (
      <Styles value={value} id={id} className={className}>
        {showSign ? this.getSign(value) : null}
        {/* sign is already present, so remove it from the formatted number */}$
        {formatMoney(value).replace('-', '')}
      </Styles>
    );
  }
}

export default Money;
