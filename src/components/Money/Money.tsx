import * as React from 'react';
import PropTypes from 'prop-types';
import formatMoney from 'extensions/formatMoney';
import * as styles from './styles';

interface MoneyProps {
  /**
   * The monetary value to show.
   */
  value: string | number;
  /**
   * Whether or not to show a +/- sign before the amount (defaults true)
   */
  showSign: boolean;
  /**
   * A component to render the text itself. Will be passed a `value` Number prop.
   */
  Styles: any;
}

/**
 * The Money component renders a monetary value with a color and sign to indicate positive or negative.
 * It formats decimal values and adds a $ to the beginning, so just pass in the raw number/string value
 * for `value`. Use the `showSign` prop to turn off the plus/minus sign.
 */
class Money extends React.Component<
  React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> &
    MoneyProps
> {
  static defaultProps = {
    showSign: true,
    value: 0,
    Styles: styles.MoneyStyles,
  };

  static styles = styles;

  get sign() {
    const { value } = this.props;
    return value >= 0 ? '+' : '-';
  }

  render() {
    const { value, showSign, id, className, Styles, ...rest } = this.props;
    return (
      <Styles value={value} id={id} className={className} {...rest}>
        {showSign ? this.sign : null}
        {/* sign is already present, so remove it from the formatted number */}$
        {formatMoney(value).replace('-', '')}
      </Styles>
    );
  }
}

export default Money;
