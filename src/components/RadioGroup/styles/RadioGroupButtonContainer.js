import styled from 'styled-components';

export default styled.div`
  flex: 1 1 auto;
  position: relative;

  &:first-of-type > label {
    border-radius: 3px 0 0 3px;
  }

  &:first-of-type > label::after {
    border-radius: 0 0 0 3px;
  }

  &:last-of-type > label {
    border-radius: 0 3px 3px 0;
  }

  &:last-of-type > label::after {
    border-radius: 0 0 3px 0;
  }

  &:not(:first-of-type) > label {
    border-left: 0;
  }
`;
