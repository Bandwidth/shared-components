import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Div = styled.div`
  flex: 1 1 auto;
  
    ${({vertical}) => {
  if (vertical) return css`
  margin-bottom: -1px;  
    
  &:first-of-type > label {
  border-radius: 3px 0 0 0;
  }
  
  &:last-of-type > label {
    border-radius: 0 0 0 3px;
  }
  
  &:last-of-type {
      margin-bottom: 0;
    }`
  else return css`  
  margin-right: -1px;
  
  &:first-of-type > label {
  border-radius: 3px 0 0 0;
  }
  
  &:last-of-type > label {
    border-radius: 0 3px 0 0;    
  }`}}`;

const TabContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  opacity: ${({ active }) => active ? 1 : 0.5};
  padding: ${({ theme }) => theme.tabs.padding};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  background: ${({ theme, disabled }) => (disabled) ? theme.colors.disabled : theme.tabs.bg};
  color: ${({ theme }) => theme.tabs.fg};
  transition: opacity 0.2s ease, border-color 0.2s ease;

  ${({disabled}) => {
  if (!disabled) return css`  
      &:hover {
      border-color: ${({theme, active}) => active ? theme.tabs.border : theme.colors.primary};
      border-${({vertical}) => vertical ? 'right' : 'bottom' }-color: ${({theme, active}) => active ? theme.tabs.bg : theme.tabs.border};
      opacity: 1;
      z-index: 1;
      }`;
  }}
  
  border: ${({ theme }) => theme.tabs.border};
  border-${({vertical}) => vertical ? 'right' : 'bottom' }-color: ${({ active, theme }) => active ? theme.tabs.bg : theme.tabs.border};
  height: 100%;
  position: relative;
    ${({vertical}) => {
  if (vertical) return css` 
    width: calc(100% + 1px);
  `}}`;

export default class Tab extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let selected = {};
    selected[this.props.namespace] = this.props.displayName;
    this.props.handleSelect(selected);

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {isActive, displayName, disabled, vertical} = this.props;

    return (this.props.displayContentOnly) ?
      (
      <div
        hidden = {!isActive}>
        {this.props.children}
      </div>
    ) : (
      <Div vertical={vertical}>
        <TabContainer
          onClick={(disabled) ? null : this.handleClick}
          vertical={vertical}
          active={isActive}
          disabled={disabled}>
            {displayName}
        </TabContainer>
      </Div>
    );
  }
}

Tab.defaultValues = {
  disabled: false,
  vertical: false,
};

Tab.propTypes = {
  displayName: PropTypes.string,
  isActive: PropTypes.bool,
  handleSelect: PropTypes.func,
  namespace: PropTypes.string,
  displayContentOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  vertical: PropTypes.bool,
};
