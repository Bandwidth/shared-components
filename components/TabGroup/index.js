// TODO: complete and migrate to style guide
import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  background: ${({ theme }) => theme.tab.bg};
  color: ${({ theme }) => theme.tab.fg};
  font-size: ${({ theme }) => theme.tab.fontSize};
  margin-bottom: ${({ theme }) => theme.tab.marginBottom};

  & > * {
    margin: ${({ theme }) => theme.tab.margin};
  }

  & > *:last-of-type {
    margin: 0;
    padding-right: 0;
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }
`;
