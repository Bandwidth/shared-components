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
    <Navigation.ItemList>
      <Anchor to="/about" exact>
        <Navigation.Item>
          About
        </Navigation.Item>
      </Anchor>
    </Navigation.ItemList>
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

```jsx
const NavBar = () => (
  <Navigation>
    <Anchor to="/">
      <Navigation.Title>
        Bandwidth App
      </Navigation.Title>
    </Anchor>
    <Navigation.ItemList>
      <Anchor to="/about" exact>
        <Navigation.Item>
          About
        </Navigation.Item>
      </Anchor>
    </Navigation.ItemList>
  </Navigation>
);

<div>
  <NavBar/>
  <SidebarLayout right>
    <div style={{height:'400px'}}/>
    <div style={{height:'400px'}}/>
  </SidebarLayout>
</div>
```
If you have supplemental information which should be viewed after looking after the main content, the sidebar should be placed on the right, as shown above.

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
    <Navigation.ItemList>
      <Anchor to="/about" exact>
        <Navigation.Item>
          About
        </Navigation.Item>
      </Anchor>
    </Navigation.ItemList>
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

## Content Layout

```jsx
const React = require('react');

const NavBar = () => (
  <Navigation>
    <Anchor to="/">
      <Navigation.Title>
        Bandwidth App
      </Navigation.Title>
    </Anchor>
    <Navigation.ItemList>
      <Anchor to="/about" exact>
        <Navigation.Item>
          About
        </Navigation.Item>
      </Anchor>
    </Navigation.ItemList>
  </Navigation>
);

const Section = (props) => (
  <div style={{
    width: '100%',
    paddingBottom: '30px',
    marginBottom: '30px',
  }}>
    {props.children}
  </div>
);

const Content = (props) => (
  <div style={{
    margin: '30px',
    maxWidth: '900px',
  }}>
    {props.children}
  </div>
);

<div>
  <NavBar />
  <Content>
    <Pane.Column>
      <Section>
        <H1 spacing='0'> H1 Page Title </H1>
      </Section>
      <Section>
        <H2 spacing={{bottom: 'sm'}}> H2 Section 1 </H2>
        <HelpText spacing={{bottom: 'lg'}}> Help text to explain the section </HelpText>
        <P spacing='0'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pellentesque dignissim enim sit amet venenatis urna. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Pretium quam vulputate dignissim suspendisse in. Facilisis magna etiam tempor orci. Volutpat diam ut venenatis tellus in. Augue mauris augue neque gravida in fermentum et sollicitudin. At lectus urna duis convallis. Nunc aliquet bibendum enim facilisis gravida neque. Morbi tincidunt ornare massa eget egestas purus viverra accumsan.
        </P>
      </Section>
      <Section>
        <H2 spacing={{bottom: 'sm'}} style={{display: 'inline-block'}}> H2 Section 2 </H2> <H3 spacing={{bottom: 'sm'}} style={{display: 'inline-block'}}> (H3 quantity) </H3>
        <HelpText spacing={{bottom: 'lg'}}> Help text to explain the section </HelpText>
        <H4> H4 Sub-Section 2.1 </H4>
        <P>
            Diam vulputate ut pharetra sit amet. Venenatis urna cursus eget nunc scelerisque viverra mauris. Enim nunc faucibus a pellentesque sit. Etiam sit amet nisl purus in mollis nunc. Odio ut sem nulla pharetra diam. Velit dignissim sodales ut eu. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Dui sapien eget mi proin sed libero enim sed. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Tincidunt lobortis feugiat vivamus at. Tortor posuere ac ut consequat semper viverra nam. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim ut sem viverra aliquet. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Leo vel orci porta non. Faucibus et molestie ac feugiat sed lectus. Volutpat blandit aliquam etiam erat velit scelerisque in. Nisl condimentum id venenatis a condimentum. 
        </P>
        <H4> H4 Sub-Section 2.2 </H4>
        <P>
        In nisl nisi scelerisque eu ultrices vitae. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Diam donec adipiscing tristique risus nec. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Viverra vitae congue eu consequat ac felis donec. Urna neque viverra justo nec ultrices. Cursus metus aliquam eleifend mi in nulla. Enim lobortis scelerisque fermentum dui faucibus in ornare. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Tortor at risus viverra adipiscing at.
        </P>
      </Section>
    </Pane.Column>
  </Content>
</div>
```
When designing the main content of a webpage, we recommend to follow these design rules:
H1's are generally only used once per page, for the title. H2's should be used for the title of all sections on the page. H3's are used to display supplemental information to the title, such as a value. H4's should be used for sub-section titles. Sections should be divided with a 1 pixel thick divider. 

If the main content is the only content on the page (there is no sidebar), the main content should not take up the full width of the available space. Generally the max-width value of the main content is set to 900px. This is to help maintain readability.

Above is an example of a well-designed webpage which makes use of the Shared Component Library. We provide it's specifications for your convenience.

Margin specifications:
  * Left:  30px
  * Top:  30px
  * Above and below dividers:  30px
  * Between H2 and HelpText:  10px
  * After paragraph:  30px
  * After H4 sub-section:  30px

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
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems:'center'}}>
    <div style={{marginRight:'0', marginLeft: '20px'}}>
      <Anchor icon="copy" >
        Copy to clipboard
      </Anchor>
    </div>
    <div style={{marginRight:'0', marginLeft: '20px'}}>
      <Anchor icon="msExcel" style={{marginRight:'0', marginLeft: '20px'}}>
        Export
      </Anchor>
    </div>
    <div style={{marginRight:'0', marginLeft: '20px'}}>
      <Anchor icon="viewMore" style={{marginRight:'0', marginLeft: '20px'}}>
        View all
      </Anchor>
    </div>
    <Button style={{marginRight:'0', marginLeft: '20px'}}>Primary Medium</Button>
  </div>
</Spacing>
```
Toolbar anchors —usually represented by an icon and uppercase text that’s not underlined- act as actions for a given set of functionality. They generally appear next to a heading, but sometimes may appear next to a submit button depending on the context. Since pages can be subdivided into layout panes, sections, or blocks of content, it can be unclear where in the hierarchy to place these actions.

As much as possible, actions should gravitate to the largest or highest content grouping that makes sense for those actions (“gravitate”, “solar system”… see what we did there). The order of sibling toolbar anchors also follows this idea of 'graviation'. The most utilized anchors should be closest to the heading / button which they are 'orbiting'. In the example above, the order of importance / most utilized is "View All" -> "Export" -> "Copy to Clipboard"

Clicking a toolbar anchor should disable any other sibling anchors. This should be represented by turning the link and icon grey (#666) and setting both to 0.5 opacity. When that function is complete or cancelled, all anchors should transition back to their previous color (likely #008db1) and opacity (1).

