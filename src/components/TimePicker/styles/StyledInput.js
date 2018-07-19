import styled from 'styled-components';
import Input from 'components/Input';

export default styled(Input.Small)`
  max-width: 52px;
  &::-webkit-datetime-edit-ampm-field,
  &::-webkit-clear-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;
