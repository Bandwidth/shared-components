import field from './flowField';
import Select from '../../../components/Select';
import sharedComponent from '../../../sharedComponent';

const FlowSelect = field(Select);

export default sharedComponent(`
A prebuilt \`Flow.Item\` with a \`Select\` component inside, designed for use with Redux Form.

\`\`\`
<Flow.Row>
  <Field
    component={Flow.fields.Select}
    options={['foo', 'bar', 'baz']}
    renderOption={(option) => option.name}
    allowNone={false}
    name="foo"
    label="Select one"
    required
  />
</Flow.Row>
\`\`\`
`)(FlowSelect);
