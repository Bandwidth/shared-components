import field from './flowField';
import Input from '../../../components/Input';

const FlowInput = field(Input);

FlowInput.usage = `
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
`;

export default FlowInput;
