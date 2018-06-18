import styled from 'styled-components';

export default styled.div`
  flex: 1 1 auto;
  position: relative;

  &:first-of-type > label {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-of-type > label {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &:not(.disabled) + & > label {
    border-left: 0;
  }

  &.disabled:not(:last-of-type) > label {
    border-right: 0;
  }
`;
