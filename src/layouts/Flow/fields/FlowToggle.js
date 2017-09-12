import field from './flowField';
import Toggle from '../../../components/Toggle';

const FlowToggle = field(Toggle);

FlowToggle.usage = `
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
`;

export default FlowToggle;
