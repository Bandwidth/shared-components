import styled from 'styled-components';

const SelectItem = styled.option.withConfig({ displayName: 'SelectItem' })`
  padding: ${({ theme }) => theme.selectItem.padding};
  border-bottom: ${({ theme }) => theme.selectItem.border};
  color: ${({ theme, active }) => active ? theme.selectItem.activeFG : theme.selectItem.fg};
  background: ${({ theme }) => theme.selectItem.bg};
  list-style-type: none;
  display: block;
  cursor: pointer;
`;

SelectItem.usage = `
# SelectItem

Not really meant to be used alone. Used in Select. I don't even know if it does anything.
`;

export default SelectItem;