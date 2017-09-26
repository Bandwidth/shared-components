import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatMoney from '../../extensions/formatMoney';

const Figure = styled.span`
  color: ${({ positive, theme }) => positive ? theme.colors.positiveText : theme.colors.negativeText };
`;

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
  };

  static defaultProps = {
    showSign: true,
    className: null,
    id: null,
    value: 0,
  };

  getSign() {
    const { value } = this.props;
    return value >= 0 ? '+' : '-';
  }

  render() {
    const { value, showSign, id, className } = this.props;
    return (
      <Figure positive={value >= 0} id={id} className={className}>
        {showSign ? this.getSign(value) : null}
        {/* sign is already present, so remove it from the formatted number */}
        ${formatMoney(value).replace('-', '')}
      </Figure>
    );
  }
}

export default Money;
