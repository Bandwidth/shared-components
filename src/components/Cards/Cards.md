`Cards` are styled containers for any kind of content.  `Cards` is a grouping for `Card` elements, and are separate by default.
`Card` components may be connected if they are nested in a `Cards.Connected` component. 

Example:
```jsx harmony
//You can import a local image as such:
//import myImage from 'images/myImage.png';

<Cards>
  <Cards.Card image={'http://dev.bandwidth.com/design-system/source/images/blue.png'} title="My Card">
    <Cards.Card.Section>
      <p>Cards may have an image and/or title which dictate how the top of the card will look.</p>
    </Cards.Card.Section>
    <Cards.Card.Section>
      <p>Cards may also have multiple CardSections, which are visually separated within each Card.</p>
    </Cards.Card.Section>
  </Cards.Card>
  <Cards.Card>
    <Cards.Card.Section>
      <p>Cards may contain any HTML elements or React components.</p>
    </Cards.Card.Section>
    <Cards.Card.Section>
      <p>If a card does not have a title or image, no header will be displayed</p>
    </Cards.Card.Section>
  </Cards.Card>
</Cards>
```
```jsx harmony
<Cards.Connected>
  <Cards.Card image={'http://dev.bandwidth.com/design-system/source/images/blue.png'} title="First of many">
    <Cards.Card.Section>
      <p>These cards will be connected visually</p>
    </Cards.Card.Section>
  </Cards.Card>
  <Cards.Card image={'http://dev.bandwidth.com/design-system/source/images/blue.png'} title="Another connected card">
    <Cards.Card.Section>
      <p>There will be no space between these three cards</p>
    </Cards.Card.Section>
  </Cards.Card>
  <Cards.Card>
    <Cards.Card.Section>
      <p>This last card doesn't have a header image or title</p>
    </Cards.Card.Section>
  </Cards.Card>
</Cards.Connected>
```
