import field from './flowField';
import Input from '../../../components/Input';
import sharedComponent from '../../../sharedComponent';

const FlowInput = field(Input);

export default sharedComponent(`
A prebuilt \`Flow.Item\` with an \`Input\` component inside, designed for use with Redux Form.

\`\`\`
<Flow.Row>
  <Field
    component={Flow.fields.Input}
    name="foo"
    label="Type your text here"
    required
  />
</Flow.Row>
\`\`\`
`)(FlowInput);
