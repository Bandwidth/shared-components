import styled, {css} from 'styled-components';

export default styled.div`
  flex: 1 1 auto;
  
    ${({vertical}) => {
  if (vertical) {
    return css`
  margin-bottom: -1px;  
    
  &:first-child {
  border-radius: 3px 0 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 0 3px;
    margin-bottom: 0;
  }`;
  }
  return css`  
  margin-right: -1px;
  
  &:first-child {
  border-radius: 3px 0 0 0;
  }
  
  &:last-child {
    border-radius: 0 3px 0 0;    
    margin-right: 0;
  }`;
}}

  display: flex;
  flex-direction: column;
  align-content: flex-start;
  opacity: ${({active}) => active ? 1 : 0.5};
  padding: ${({theme}) => theme.tabs.padding};
  cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};
  background: ${({theme, disabled}) => (disabled) ? theme.colors.disabled : theme.tabs.bg};
  color: ${({theme}) => theme.tabs.fg};
  transition: opacity 0.2s ease, border-color 0.2s ease;

  ${({disabled}) => {
  if (!disabled) {
    return css`  
      &:hover {
      border-color: ${({theme, active}) => active ? theme.tabs.border : theme.colors.primary};
      border-${({vertical}) => vertical ? 'right' : 'bottom'}-color: ${({theme, active}) => active ? theme.tabs.bg : theme.tabs.border};
      opacity: 1;
      z-index: 1;
      }`;
  }
}}
  
  border: ${({theme}) => theme.tabs.border};
  border-${({vertical}) => vertical ? 'right' : 'bottom'}-color: ${({active, theme}) => active ? theme.tabs.bg : theme.tabs.border};
  position: relative;
    ${({vertical}) => {
  if (vertical) {
    return css` 
    width: calc(100% + 1px);
  `;
  }
}
  } ` ;
