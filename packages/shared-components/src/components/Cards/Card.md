#### **Single Card** ####

Card components may be used anywhere on the page as a stand-alone component.

For example:
```jsx harmony
//You can import a local image as such:
//import myImage from 'images/myImage.png';

<Card>
  <Card.Header image={'http://dev.bandwidth.com/design-system/source/images/blue.png'} title="My Card" />
  <Card.Section>
    <p>Cards may have a CardHeader with an image and/or title which dictate how the top of the card will look.</p>
  </Card.Section>
  <Card.Section>
    <p>Cards may also have multiple CardSections, which are visually separated within each Card.</p>
  </Card.Section>
</Card>
```
 
#### **Grouping multiple Cards** ####
For convenience, Cards may be grouped together.  A CardGroup will take all available horizontal space, and will
distribute Cards evenly within the CardGroup.  Since the CardGroup itself is a flex box, you may override the flex
property of any individual Card to customize how Cards are spaced within a CardGroup.   
```jsx harmony
<Card.Group>
  <Card>
    <Card.Header image={'http://dev.bandwidth.com/design-system/source/images/blue.png'} title="My Card" />
    <Card.Section>
      <p>CardHeaders may have an image and/or title which dictate how the top of the card will look.</p>
    </Card.Section>
    <Card.Section>
      <p>Cards may also have multiple CardSections, which are visually separated within each Card.</p>
    </Card.Section>
  </Card>
  <Card>
    <Card.Section>
      <p>Cards may contain any HTML elements or React components.</p>
    </Card.Section>
    <Card.Section>
      <p>CardHeaders are entirely optional within a card.  Omitting one causes the card to not have a header.</p>
    </Card.Section>
  </Card>
</Card.Group>
```
Additionally, Cards may be in a Connected CardGroup.  Such Cards will have no spacing between them, and will be visually
connected.

```jsx harmony
<Card.Group.Connected>
  <Card>
    <Card.Header image={'http://dev.bandwidth.com/design-system/source/images/blue.png'} title="First of many" />
    <Card.Section>
      <p>These cards will be connected visually</p>
    </Card.Section>
  </Card>
  <Card>
    <Card.Header image={'http://dev.bandwidth.com/design-system/source/images/blue.png'} title="Another card" />
    <Card.Section>
      <p>There will be no space between these three cards</p>
    </Card.Section>
  </Card>
  <Card>
    <Card.Section>
      <p>This last card doesn't have a header image or title</p>
    </Card.Section>
  </Card>
</Card.Group.Connected>
```
