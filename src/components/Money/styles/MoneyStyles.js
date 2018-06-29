import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.span`
  color: ${props => {
    if (props.value > 0) {
      return 'var(--colors-positive-default)';
    } else if (props.value < 0) {
      return 'var(--colors-negative-default)';
    }

    return 'inherit';
  }};
`;
