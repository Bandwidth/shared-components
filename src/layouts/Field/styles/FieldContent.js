import styled from 'styled-components';
import { themeGet } from 'extensions';

const FieldContent = styled.div`
  display: flex;
  flex-direction: column;

  /* the height of a standard Input; this is an aesthetic requirement */
  min-height: ${props => (props.short ? 'auto' : '53px')};

  justify-self: ${props => props.verticalAlign || 'flex-start'};

  & + .field-help-text {
    margin-top: ${themeGet('spacing.extraSmall')};
  }

  & > * {
    margin: ${props => {
      switch (props.align) {
        case 'left':
          return 'auto auto auto 0';
        case 'right':
          return 'auto 0 auto auto';
        default:
          return 'auto 0 auto 0';
      }
    }};
  }
`;

export default FieldContent;
