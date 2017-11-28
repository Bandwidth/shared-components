import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Tab from './Tab';

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
        text-align: left;
      `;
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
      margin-right: -1.5px;
    `;
  }};
`;

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

  renderTabs = (children, { onTabSelected, selectedTabIndex, vertical }) =>
    React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      // rendering Tab
      return React.cloneElement(child, {
        vertical,
        onClick: child.props.disabled ? null : () => onTabSelected(index),
        active: index === selectedTabIndex,
      });
    });

  render() {
    const tabs = this.renderTabs(this.props.children, {
      onTabSelected: this.props.onTabSelected,
      selectedTabIndex: this.props.selectedTabIndex,
      vertical: this.props.vertical,
    });
    return <TabsDiv vertical={this.props.vertical}>{tabs}</TabsDiv>;
  }
}

Tabs.Tab = Tab;
