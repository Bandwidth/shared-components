import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Div = styled.div`
  ${({vertical}) => {
  if (vertical) return css`  
    width: 100%;
    display: table;
  `}}`;

const TabsDiv = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  ${({vertical}) => {
  if (vertical) return css`  
    width: 25%;
    display: table-cell;
    margin-bottom: -1px;
    text-align: left;`
  else return css`  
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex: 1 1 auto;
    text-align: center;
    margin-bottom: -1px;
    min-height: 53px;
    text-align: center;`}}`
  ;

const ContentDiv = styled.div`

  border: ${({ theme }) => theme.tabs.border};
  padding: ${({ theme }) => theme.tabs.padding};
  
  ${({vertical}) => {
  if (vertical) return css`  
    border-radius: 0 3px 3px 0;
    width: 75%;
    display: table-cell;
    vertical-align: top;`
  else return css`  
    border-radius: 0 0 3px 3px;
    min-height: 53px;
    margin-right: -1px;
    clear: both;
    `}}`;

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
    selectedTab: PropTypes.string,
    /**
     * The tab selected by default, otherwise nothing is selected
     */
    defaultTab: PropTypes.string,
    /**
     * Enable vertical tab layout
     */
    vertical: PropTypes.bool,
  };

  constructor() {
    super();

    this.state = {
      selectedTab: null,
    };

  }

  handleSelect= (selected) => {
    this.setState({
      selectedTab: selected[this.props.name],
    });
  };

  renderTabs (children,
                  {handleSelect, selectedTab, name, vertical}){
    if (typeof children !== 'object') {
      return children;
    }

    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      //rendering Tabs
      if (child.props && child.props.displayName) {
        return React.cloneElement(child, {
          handleSelect,
          isActive: child.props.displayName === selectedTab,
          namespace: name,
          vertical: vertical,
        });
      }
    });
  };

  renderContent (children, selectedTab, vertical){
    if (typeof children !== 'object') {
      return children;
    }

    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      //rendering Tabs
      if (child.props && child.props.displayName) {
        return React.cloneElement(child, {
          isActive: child.props.displayName === selectedTab,
          displayContentOnly: true,
          vertical: vertical,
        });
      }
    });
  };

  render() {

    const handleSelect = this.props.handleSelect || this.handleSelect;
    const selectedTab = this.props.selectedTab || this.state.selectedTab || this.props.defaultTab;

    const tabs = this.renderTabs(this.props.children, { handleSelect, selectedTab, name: this.props.name, vertical: this.props.vertical});
    const content = this.renderContent(this.props.children, selectedTab, this.props.vertical);

    return (<Div vertical={this.props.vertical}>
      <TabsDiv vertical={this.props.vertical}>{tabs}</TabsDiv>
      <ContentDiv vertical={this.props.vertical}>{content}</ContentDiv>
    </Div>);
  }
}

Tabs.defaultProps = {
  defaultTab: null,
  vertical: false,
};

Tabs.usage = `
Tabs renders horizontal or vertical layout depending on \`vertical\` value. It can update it's own state or be a controlled component by specifying \`selectedTab\` and \`handleSelect\` props.

\`\`\`
<Tabs
    name='Bandwidth tabs'
    defaultTab="TAB 1"
>
    <Tab displayName="TAB 1">
        Tab 1 content
    </Tab>
    <Tab displayName="TAB 2">Tab 2 Content</Tab>
    <Tab displayName="TAB 3" disabled>Tab 3 Content</Tab>
    <Tab displayName="SUPER DUPER LONG TAB NUMBER 4">
        Tab 4 content
    </Tab>
</Tabs>
<br/>
<Tabs
    name='Bandwidth vertical tabs'
    defaultTab="TAB 1"
    vertical
>
    <Tab displayName="TAB 1">
        Tab 1 content
    </Tab>
    <Tab displayName="TAB 2">Tab 2 Content</Tab>
    <Tab displayName="TAB 3" disabled>Tab 3 Content</Tab>
    <Tab displayName="SUPER DUPER LONG TAB NUMBER 4">
        Tab 4 content
    </Tab>
</Tabs>
\`\`\`
`;


