This section is intended to show you how the developers of the Bandwidth Shared Component Library use the library to build layouts. We aim to highlight certain design principles which we recommend you to follow if you are creating a Bandwidth application.

### Sections
  * Page Layouts
  * Content Layout
  * The Anchor Solar System
  * Data Presentation

## Page Layouts

This library contains a few layout components that can help create complex, interactive layouts for whole pages. You can find more documentation for these [here](/shared-components/layouts)

## Content Layout

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

* H1s are generally only used once per page, for the title.
* H2s should be used for the title of all sections on the page.
* H3s are used to display supplemental information to the title, such as a value.
* H4s should be used for sub-section titles.
* Sections should be divided with a 1 pixel thick divider.

If the main content is the only content on the page (there is no sidebar), the main content should not take up the full width of the available space. Generally the max-width value of the main content is set to 900px. This is to help maintain readability.

Above is an example of a well-designed webpage which makes use of the Shared Component Library. It makes use of the [Pane.Column](/#!/PaneColumn) component, which inserts a divider and adds spacing between each of its child elements. We provide the spacing specifications of this example for your convenience.

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
Toolbar anchors—usually represented by an icon and uppercase text that’s not underlined—act as actions for a given set of functionality. They generally appear next to a heading, but sometimes may appear next to a submit button depending on the context. Since pages can be subdivided into layout panes, sections, or blocks of content, it can be unclear where in the hierarchy to place these actions.

As much as possible, actions should gravitate to the largest or highest content grouping that makes sense for those actions (“gravitate”, “solar system”… see what we did there). The order of sibling toolbar anchors also follows this idea of 'graviation'. The most utilized anchors should be closest to the heading / button which they are 'orbiting'. In the example above, the order of importance / most utilized is "View All" -> "Export" -> "Copy to Clipboard"

Clicking a toolbar anchor should disable any other sibling anchors. This should be represented by turning the link and icon grey (#666) and setting both to 0.5 opacity. When that function is complete or cancelled, all anchors should transition back to their previous color (likely #008db1) and opacity (1).

## Data Presentation

When displaying input fields, you should aim to present information in a way that users can identify what is currently editable, what was editable, and what was system generated. Use the [Form](/#!/Form), [Flow](/#!/Flow), and [Input](/#!/Input) components to create forms with input fields.

```jsx

<Form>
  <Flow>
    <Flow.Row>
      <Flow.Item label="Name">
        <Input />
      </Flow.Item>
      <Flow.Item label="Email">
        <Input type="email" />
      </Flow.Item>
    </Flow.Row>
  </Flow>
</Form>
```

If the data was editable at a time but no longer is due to a change in order status, inputs and other form components should be disabled.
```jsx

<Form>
  <Flow>
    <Flow.Row>
      <Flow.Item label="Name">
        <Input disabled value="John Doe"/>
      </Flow.Item>
      <Flow.Item label="Email">
        <Input disabled type="email" value="john@doe.com" />
      </Flow.Item>
    </Flow.Row>
  </Flow>
</Form>
```


Otherwise, if it’s data that has been generated by the system or was never definable by the user, a label and plain text should be used.
```jsx

<div>
  <Label style={{display: "inline-block"}}>Date Joined</Label>
  :
  <span style={{paddingLeft: "5px"}}> August 2, 2018 at 4:58 PM -04:00 </span>
  <br/>
  <Label style={{display: "inline-block"}}>Phone Number</Label>
  :
  <span style={{paddingLeft: "5px"}}> (555) - 555 - 5555 </span>
</div>

```

In some cases, a large amount of data is editable and displaying a large form on a page that’s primarily meant to display data is not optimal. In these cases, content should be presented as plain text and grouped using headings (typically H4) with “Edit” toolbar combo anchors.
