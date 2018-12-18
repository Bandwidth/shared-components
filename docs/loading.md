### NOTE: Skeletons are currently in a prerelease state.

Loading states can utilize skeletons to display a rough outline of the page before real useful content appears. Skeletons are plain components that can be rendered in place of other components during the initial loading process. Many components can be invoked using .Skeleton to use a built-in skeleton component. We also expose the basic building blocks to create your own skeletons for components. Some basic rules:

- Skeletons should only be shown during the initial loading process, and only if the loading process is relatively quick.
- Skeletons should ideally be shown for components that will always be shown. Since skeletons indicate content, it can create a bad experience if they display and are replaced by empty space.

```js noeditor
var lorem = require('lorem-ipsum');

class SkeletonPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  toggleLoading() {
    this.setState(({ loading }) => ({ loading: !loading }));
  }

  render() {
    const { name, description, render, renderLoading } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <H2>
          <Horizontal alignItems="center">
            <span>{name}</span>
            <Button.Small onClick={() => this.toggleLoading()}>
              {loading ? 'Switch to loaded' : 'Switch to loading'}
            </Button.Small>
          </Horizontal>
        </H2>
        <P>{description}</P>
        {loading ? renderLoading() : render()}
      </div>
    );
  }
}

<React.Fragment>
  <SkeletonPreview
    name="Paragraph"
    render={() => <P>{lorem({ count: 10 })}</P>}
    renderLoading={() => <P.Skeleton />}
  />
  <Spacing />
  <SkeletonPreview
    name="Table"
    description="Table skeletons are useful for displaying table contents with a variable number of rows."
    render={() => (
      <Table
        headers={
          <Table.Row>
            <Table.Header>One</Table.Header>
            <Table.Header>Two</Table.Header>
            <Table.Header sortable>Three</Table.Header>
          </Table.Row>
        }
      >
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Foo</Table.Cell>
          <Table.Cell>Bar</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>Foo</Table.Cell>
          <Table.Cell>Bar</Table.Cell>
        </Table.Row>
      </Table>
    )}
    renderLoading={() => <Table.Skeleton rows={2} />}
  />
  <Spacing />
  <SkeletonPreview
    name="Fields"
    description="Field skeletons take advantage of the built-in layouting of the library to control what blocks are visible and where they are positioned."
    render={() => (
      <Field.Group>
        <Field label="Sample">
          <Input placeholder="Content" />
        </Field>
        <Field
          required
          label="Required:"
          helpCallout="Even more help"
          alignContentVertically="center"
        >
          <Toggle description="Required with help" />
        </Field>
        <Field columnSpan={2} label="Wide" helpText="A wide field">
          <Input placeholder="Content" />
        </Field>
      </Field.Group>
    )}
    renderLoading={() => (
      <Field.Group.Skeleton>
        <Field.Skeleton label="Sample">
          <Input.Skeleton placeholder="Content" />
        </Field.Skeleton>
        <Field.Skeleton
          required
          label="Required:"
          helpCallout="Even more help"
          alignContentVertically="center"
        >
          <Toggle.Skeleton description="Required with help" />
        </Field.Skeleton>
        <Field.Skeleton columnSpan={2} label="Wide" helpText="A wide field">
          <Input.Skeleton placeholder="Content" />
        </Field.Skeleton>
      </Field.Group.Skeleton>
    )}
  />
</React.Fragment>;
```
