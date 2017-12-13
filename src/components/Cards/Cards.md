`Cards` are styled containers for any kind of content.  `Cards` is a grouping for `Card` elements, and are separate by default.
`Card` components may be connected if they are nested in a `Cards.Connected` component. 

Example:
```jsx harmony
import myImage from 'images/myImage.png';

<Cards>
  <Card image={myImage} title="My Card">
    <CardSection>
      <p>Cards may have an image and/or title which dictate how the top of the card will look.</p>
    </CardSection>
    <CardSection>
      <p>Cards may also have multiple CardSections, which are visually separated within each Card.</p>
    </CardSection>
  </Card>
  <Card>
    <CardSection>
      <p>Cards may contain any HTML elements or React components.</p>
    </CardSection>
    <CardSection>
      <p>If a card does not have a title or image, no header will be displayed</p>
    </CardSection>
  </Card>
</Cards>
```
```jsx harmony
<Cards.Connected>
  <Card image={myImage} title="First of many">
    <CardSection>
      <p>These cards will be connected visually</p>
    </CardSection>
  </Card>
  <Card image={myImage} title="Another connected card">
    <CardSection>
      <p>There will be no space between these three cards</p>
    </CardSection>
  </Card>
  <Card>
    <CardSection>
      <p>This last card doesn't have a header image or title</p>
    </CardSection>
  </Card>
</Cards.Connected>
```
