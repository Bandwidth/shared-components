import styled from 'styled-components';

export default styled.div`
  padding: ${({ theme }) => theme.card.listPadding};

  & > div {
    margin: 0;
  }
`;