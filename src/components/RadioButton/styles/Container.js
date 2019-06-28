import styled from 'styled-components';

export default styled.div`
  flex: 1 1 auto;
  position: relative;
  display: inline-block;

  &:first-of-type > label {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-of-type > label {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:not(.disabled) + & > label {
    border-left: 0;
  }

  &.disabled:not(:last-of-type) > label {
    border-right: 0;
  }
`;
