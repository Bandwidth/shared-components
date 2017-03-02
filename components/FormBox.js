import styled from 'styled-components';

export default styled.div`
  background: ${({ theme }) => theme.form.bg};
  border: ${({ theme }) => theme.form.border};
  padding: 2em;
  margin: 2em auto auto auto;
  max-width: 70vw;
  width: 100%;
`;
