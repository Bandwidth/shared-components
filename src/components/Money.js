import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatMoney from '../extensions/formatMoney';

const Figure = styled.span`
  color: ${({ positive, theme }) => positive ? theme.colors.positiveText : theme.colors.negativeText };
`;

class Money extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    showSign: PropTypes.bool,
  };

  static defaultProps = {
    showSign: true,
  };

  getSign() {
    const { value } = this.props;
    return value >= 0 ? '+' : '-';
  }

  render() {
    const { value, showSign } = this.props;
    return (
      <Figure positive={value >= 0}>
        {showSign ? this.getSign(value) : null}
        ${formatMoney(value)}
      </Figure>
    );
  }
}

Money.usage = `
# Money

The Money component renders a monetary value with a color and sign to indicate positive or negative. It formats decimal values and adds a $ to the beginning, so just pass in the raw number/string value for \`value\`. Use the \`showSign\` prop to turn off the plus/minus sign.

\`\`\`
<Money value="0.33224" />
\`\`\`
`;

export default Money;
