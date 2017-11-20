import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TabsDiv = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  ${({ vertical }) => {
    if (vertical) {
      return css`  
    width: 25%;
    display: table-cell;
    margin-bottom: -1px;
    text-align: left;`;
    }
    return css`  
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex: 1 1 auto;
    text-align: center;
    margin-bottom: -1px;
    min-height: 53px;
    text-align: center;
    margin-right: -1.5px;`;
  }}`
  ;

const TabContainer = styled.div`
  flex: 1 1 auto;
  
    ${({ vertical }) => {
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
  } return css`  
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
  opacity: ${({ active }) => active ? 1 : 0.5};
  padding: ${({ theme }) => theme.tabs.padding};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  background: ${({ theme, disabled }) => (disabled) ? theme.colors.disabled : theme.tabs.bg};
  color: ${({ theme }) => theme.tabs.fg};
  transition: opacity 0.2s ease, border-color 0.2s ease;

  ${({ disabled }) => {
  if (!disabled) {
    return css`  
      &:hover {
      border-color: ${({ theme, active }) => active ? theme.tabs.border : theme.colors.primary};
      border-${({ vertical }) => vertical ? 'right' : 'bottom'}-color: ${({ theme, active }) => active ? theme.tabs.bg : theme.tabs.border};
      opacity: 1;
      z-index: 1;
      }`;
  }
}}
  
  border: ${({ theme }) => theme.tabs.border};
  border-${({ vertical }) => vertical ? 'right' : 'bottom'}-color: ${({ active, theme }) => active ? theme.tabs.bg : theme.tabs.border};
  position: relative;
    ${({ vertical }) => {
  if (vertical) {
    return css` 
    width: calc(100% + 1px);
  `;
  }
}
  } `;

export default class Tabs extends React.Component {

  static propTypes = {
    /**
     * Tab elements within container
     */
    children: PropTypes.node.isRequired,
    /**
     * Called when user selects the tab
     */
    onTabSelected: PropTypes.func,
    /**
     * The currently selected tab
     */
    selectedTabIndex: PropTypes.number,
    /**
     * Enable vertical tab layout
     */
    vertical: PropTypes.bool,
  };

  renderTabs = (children,
                { onTabSelected, selectedTabIndex, vertical }) => React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      // rendering Tab
      return (
        <TabContainer
          vertical={vertical}
          onClick={(child.props.disabled) ? null : () => onTabSelected(index)}
          active={index === selectedTabIndex}
          disabled={child.props.disabled}
        >
          {child.props.children}
        </TabContainer>
      );
    });

  render() {
    const tabs = this.renderTabs(this.props.children,
      { onTabSelected: this.props.onTabSelected,
        selectedTabIndex: this.props.selectedTabIndex,
        vertical: this.props.vertical,
      });
    return (
      <TabsDiv vertical={this.props.vertical}>{tabs}</TabsDiv>
    );
  }
}
