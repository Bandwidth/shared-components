import styled from 'styled-components';

const Gutter = styled.div`
  background: ${({ theme }) => theme.colors.gutter};
`;

Gutter.usage = `
# Gutter

A simple container box which sets the background color. That's it!
`;

export default Gutter;