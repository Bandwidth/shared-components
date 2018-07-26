This section is intended to show you how the developers of the Bandwidth Shared Component Library use the library to build layouts. We aim to highlight certain design principles which we recommend you to follow if you are creating a Bandwidth application.

## 1/3 & 2/3 Split Layout

```jsx
const irisTheme = require('theme/irisTheme');

const NavBar = () => (
  <Navigation>
    <Anchor to="/">
      <Navigation.Title>
        Bandwidth App
      </Navigation.Title>
    </Anchor>
    <Navigation.ItemListStack>
      <Navigation.ItemList.Small>
        <Anchor newTab to="https://bandwidth.com">
          <Navigation.Item>
            Why Bandwidth
          </Navigation.Item>
        </Anchor>
        <Anchor newTab to="https://dev.bandwidth.com">
          <Navigation.Item>
            Docs for Developers
          </Navigation.Item>
        </Anchor>
        <Anchor to="/login">
          <Navigation.Item>
            Login
          </Navigation.Item>
        </Anchor>
      </Navigation.ItemList.Small>
      <Navigation.ItemList>
        <Anchor to="/services" exact>
          <Navigation.Item>
            Services
          </Navigation.Item>
        </Anchor>
        <Anchor to="/useCases">
          <Navigation.Item>
            Use Cases
          </Navigation.Item>
        </Anchor>
        <Anchor to="/pricing">
          <Navigation.Item>
            Pricing
          </Navigation.Item>
        </Anchor>
        <Anchor to="/trial">
          <Navigation.Item>
            Try for Free
          </Navigation.Item>
        </Anchor>
      </Navigation.ItemList>
    </Navigation.ItemListStack>
  </Navigation>
);

const OneThird = () => (
  <div style={{
    background: irisTheme.colors.positive.border,
    padding: '2vw',
    backgroundClip: 'content-box',
    height: '400px',
  }}>
    <p style={{
      color: 'white',
      fontSize: '100px',
      fontWeight: 'bold',
      textAlign: 'center',
    }}>
      1/3
    </p>
  </div>
);

const TwoThirds = () => (
  <div style={{
    background: irisTheme.colors.negative.border,
    padding: '2vw',
    backgroundClip: 'content-box',
    height: '400px',
  }}>
    <p style={{
      color: 'white',
      fontSize: '100px',
      fontWeight: 'bold',
      textAlign: 'center',
    }}>
      2/3
    </p>
  </div>
);

// html which gets rendered above
<div>
  <NavBar/>
  <SidebarLayout>
    <OneThird/>
    <TwoThirds/>
  </SidebarLayout>
</div>
```
In this library we allow you to create a 1/3 & 2/3 view easily via the [SidebarLayout](/#!/SidebarLayout) component. This view is recommended when you want to split primary and secondary content. Your webpage should flow from left-to-right. In this particular view, the page should be designed such that the user would ideally interact with or look at the 1/3 component on the left before interacting with the content on the right.


## Sidebar List Layout
```jsx
const React = require('react');

const NavBar = () => (
  <Navigation>
    <Anchor to="/">
      <Navigation.Title>
        Bandwidth App
      </Navigation.Title>
    </Anchor>
    <Navigation.ItemListStack>
      <Navigation.ItemList.Small>
        <Anchor newTab to="https://bandwidth.com">
          <Navigation.Item>
            Why Bandwidth
          </Navigation.Item>
        </Anchor>
        <Anchor newTab to="https://dev.bandwidth.com">
          <Navigation.Item>
            Docs for Developers
          </Navigation.Item>
        </Anchor>
        <Anchor to="/login">
          <Navigation.Item>
            Login
          </Navigation.Item>
        </Anchor>
      </Navigation.ItemList.Small>
      <Navigation.ItemList>
        <Anchor to="/services" exact>
          <Navigation.Item>
            Services
          </Navigation.Item>
        </Anchor>
        <Anchor to="/useCases">
          <Navigation.Item>
            Use Cases
          </Navigation.Item>
        </Anchor>
        <Anchor to="/pricing">
          <Navigation.Item>
            Pricing
          </Navigation.Item>
        </Anchor>
        <Anchor to="/trial">
          <Navigation.Item>
            Try for Free
          </Navigation.Item>
        </Anchor>
      </Navigation.ItemList>
    </Navigation.ItemListStack>
  </Navigation>
);

class SidebarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItemId: 1 }
  }

  handleClick(id) {
    this.setState({ activeItemId: id });
  }

  render() {
    return ( 
      <SidebarList>
        <SidebarList.Item Label={()=>(<H1 spacing={{ vertical: 'md' }} >Group Title</H1>)} />
        <Anchor active={this.state.activeItemId === 1} onClick={()=>(this.handleClick(1))}>
          <SidebarList.Item label="One" />
        </Anchor>
        <Anchor active={this.state.activeItemId === 2} onClick={()=>(this.handleClick(2))}>
          <SidebarList.Item label="Two" details="Details" />
        </Anchor>
        <Anchor active={this.state.activeItemId === 3} onClick={()=>(this.handleClick(3))}>
          <SidebarList.Item label="Three" />
        </Anchor>
        <Anchor active={this.state.activeItemId === 4} onClick={()=>(this.handleClick(4))}>
          <SidebarList.Item label="Four" />
        </Anchor>
        <Anchor active={this.state.activeItemId === 5} onClick={()=>(this.handleClick(5))}>
          <SidebarList.Item label="Five" />
        </Anchor>
      </SidebarList>
    );
  }
}

// html which gets rendered above
<div>
  <NavBar />
  <SidebarLayout>
    <SidebarContent/>
    <div/>
  </SidebarLayout>
</div>
```
In certain situations, it makes sense to display a list items of the same type in the sidebar. Above is an implementation of this using the [SidebarLayout](/#!/SidebarLayout) and [SidebarList](/#!/SidebarList) components. When an item is clicked, the content on the right is updated to display information relevant to that item. This layout follows 1/3 & 2/3 layout rule described above.

## The Anchor Solar System

```jsx
<Spacing>
  <Horizontal spacing='md' style={{alignItems: 'center'}}>
    <H2>Phone Numbers</H2>
    <Anchor icon="viewMore">
      View all
    </Anchor>
    <Anchor icon="msExcel">
      Export
    </Anchor>
    <Anchor icon="copy">
      Copy to clipboard
    </Anchor>
  </Horizontal>
</Spacing>
```
```jsx
<Spacing>
  <div style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>
    <div style={{float: 'right', marginRight:'0', marginLeft: 'auto'}}>
      <Anchor icon="copy">
        Copy to clipboard
      </Anchor>
    </div>
    <div style={{float: 'right', marginRight:'0', marginLeft: '20px'}}>
      <Anchor icon="msExcel">
        Export
      </Anchor>
    </div>
    <div style={{float: 'right', marginRight:'0', marginLeft: '20px'}}>
      <Anchor icon="viewMore">
        View all
      </Anchor>
    </div>
    <Button style={{float: 'right', marginRight:'0', marginLeft: '20px'}}>Primary Medium</Button>
  </div>
</Spacing>
```
Toolbar anchors —usually represented by an icon and uppercase text that’s not underlined- act as actions for a given set of functionality. They generally appear next to a heading, but sometimes may appear next to a submit button depending on the context. Since pages can be subdivided into layout panes, sections, or blocks of content, it can be unclear where in the hierarchy to place these actions.

As much as possible, actions should gravitate to the largest or highest content grouping that makes sense for those actions (“gravitate”, “solar system”… see what we did there). The order of sibling toolbar anchors also follows this idea of 'graviation'. The most utilized anchors should be closest to the heading / button which they are 'orbiting'. In the example above, the order of importance / most utilized is "View All" -> "Export" -> "Copy to Clipboard"

Clicking a toolbar anchor should disable any other sibling anchors. This should be represented by turning the link and icon grey (#666) and setting both to 0.5 opacity. When that function is complete or cancelled, all anchors should transition back to their previous color (likely #008db1) and opacity (1).

