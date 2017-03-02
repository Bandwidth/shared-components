import styled from 'styled-components';

export default styled.form`
  padding: ${({ theme }) => theme.form.padding};
  background: ${({ theme }) => theme.form.bg};
  color: ${({ theme }) => theme.form.fg};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > div, & > input {
    width: 100%;
  }
`;
