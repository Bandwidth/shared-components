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
    text-align: center;`;
  }}`
  ;

export default class Tabs extends React.Component {

  static propTypes = {
    /**
     * Tab elements within container
     */
    children: PropTypes.node.isRequired,
    /**
     * The name of the tabs container
     */
    name: PropTypes.string,
    /**
     * Called when user selects the tab
     */
    handleSelect: PropTypes.func,
    /**
     * The currently selected tab
     */
    selectedTabIndex: PropTypes.number,
    /**
     * Enable vertical tab layout
     */
    vertical: PropTypes.bool,
  };

  renderTabs = (children, { handleSelect, selectedTabIndex, name, vertical }) => {
    if (typeof children !== 'object') {
      return children;
    }

    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      // rendering Tabs
      return React.cloneElement(child, {
        handleSelect,
        index,
        active: index === selectedTabIndex,
        namespace: name,
        vertical,
      });
    });
  };

  render() {
    const tabs = this.renderTabs(this.props.children,
      { handleSelect: this.props.handleSelect,
        selectedTabIndex: this.props.selectedTabIndex,
        name: this.props.name,
        vertical: this.props.vertical,
      });
    return (
      <TabsDiv vertical={this.props.vertical}>{tabs}</TabsDiv>
    );
  }
}

Tabs.defaultProps = {
  vertical: false,
};

Tabs.usage = `
Tabs renders horizontal or vertical layout depending on \`vertical\` value. 
It can be a controlled by specifying \`selectedTabIndex\` and \`handleSelect\` props.
\`handleSelect\` is the function of name and clicked tab index.
\`\`\`
<TabContainer vertical>
  <Tabs
    name={'Tab Section'}
    selectedTabIndex={0}
  >
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab disabled>Tab 3</Tab>
  </Tabs>
  <TabContent>
      Tab Content
  </TabContent>
</TabContainer>
\`\`\`
`;

