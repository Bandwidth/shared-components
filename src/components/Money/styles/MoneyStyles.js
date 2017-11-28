import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.span`
  color: ${props => {
    if (props.value > 0) {
      return get('colors.positive.default')(props);
    } else if (props.value < 0) {
      return get('colors.negative.default')(props);
    }

    return 'inherit';
  }};
`;
