import styled from 'styled-components';
import get from 'extensions/themeGet';

const InputRevealPasswordContainer = styled.div`
  position: relative;
  width: 100%;

  & > *:last-child {
    position: absolute;
    right: ${get('spacing.medium')};
    top: 30%;
    z-index: 10;
  }

  input[type='password'],
  input[type='text'] {
    padding-right: ${get('spacing.extraLarge')};
    padding-left: ${get('spacing.medium')};
  }
`;

InputRevealPasswordContainer.Small = styled(InputRevealPasswordContainer)`
  input[type='password'],
  input[type='text'] {
    padding: ${get('spacing.small')} ${get('spacing.extraLarge')}
      ${get('spacing.small')} ${get('spacing.small')} !important;
  }
`;

export default InputRevealPasswordContainer;
