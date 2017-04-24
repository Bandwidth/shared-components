import styled from 'styled-components';

export default styled.form`
  padding: ${({ theme }) => theme.form.padding};
  background: 'transparent';
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > div, & > input {
    width: 100%;
  }
`.withConfig({

});
