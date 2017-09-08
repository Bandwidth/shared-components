import field from './flowField';
import Toggle from '../../../components/Toggle';
import sharedComponent from '../../../sharedComponent';

const FlowToggle = field(Toggle);

export default sharedComponent(`
A prebuilt \`Flow.Item\` with a \`Toggle\` component inside, designed for use with Redux Form.

\`\`\`
<Flow.Row>
  <Field
    component={Flow.fields.Toggle}
    name="foo"
    label="Toggle on/off"
  />
</Flow.Row>
\`\`\`
`)(FlowToggle);
