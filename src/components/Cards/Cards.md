`Cards` are styled containers for any kind of content.  `Cards` is a grouping for `Card` elements, and are separate by default.
`Card` components may be connected if they are nested in a `Cards.Connected` component. 

Example:
```jsx harmony
import myImage from 'images/myImage.png';

<Cards>
  <Cards.Card image={myImage} title="My Card">
    <Cards.Card.Section>
      <p>Cards may have an image and/or title which dictate how the top of the card will look.</p>
    </Cards.Card.Section>
    <Cards.Card.Section>
      <p>Cards may also have multiple CardSections, which are visually separated within each Card.</p>
    </Cards.Card.Section>
  </Cards.Card>
  <Cards.Card>
    <Cards.Card.CardSection>
      <p>Cards may contain any HTML elements or React components.</p>
    </Cards.Card.CardSection>
    <Cards.Card.CardSection>
      <p>If a card does not have a title or image, no header will be displayed</p>
    </Cards.Card.CardSection>
  </Cards.Card>
</Cards>
```
```jsx harmony
<Cards.Connected>
  <Cards.Card image={myImage} title="First of many">
    <Cards.Card.CardSection>
      <p>These cards will be connected visually</p>
    </Cards.Card.CardSection>
  </Cards.Card>
  <Cards.Card image={myImage} title="Another connected card">
    <Cards.Card.CardSection>
      <p>There will be no space between these three cards</p>
    </Cards.Card.CardSection>
  </Cards.Card>
  <Cards.Card>
    <Cards.Card.CardSection>
      <p>This last card doesn't have a header image or title</p>
    </Cards.Card.CardSection>
  </Cards.Card>
</Cards.Connected>
```
