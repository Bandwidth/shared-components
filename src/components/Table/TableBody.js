import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('TableBody', ({ colors }) => ({
    zebraLightStripeColor: 'transparent',
    zebraDarkStripeColor: colors.shadow.extraLight,
  }))
  .createSelector();

const TableBody = theme.connect(styled.tbody`
  & > tr {
    &:nth-child(odd) {
      background: ${
        (props) => props.zebraStripe && (props.startIndex % 2 === 0) ?
          select('zebraDarkStripeColor')(props) :
          select('zebraLightStripeColor')(props)
        };
    }

    &:nth-child(even) {
      background: ${
        (props) => props.zebraStripe ?
          ((props.startIndex % 2 === 0) ?
            select('zebraLightStripeColor')(props) :
            select('zebraDarkStripeColor')(props)
          ) :
          select('zebraLightStripeColor')(props)
        };
    }
  }
`);

TableBody.defaultProps = {
  zebraStripe: true,
  startIndex: 0,
};

export default TableBody;
