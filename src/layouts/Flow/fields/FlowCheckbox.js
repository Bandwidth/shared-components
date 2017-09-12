import field from './flowField';
import Checkbox from '../../../components/Checkbox';

const FlowCheckbox = field(Checkbox);

FlowCheckbox.usage = `
A prebuilt \`Flow.Item\` with a \`Checkbox\` component inside, designed for use with Redux Form.

\`\`\`
<Flow.Row>
  <Field
    component={Flow.fields.Checkbox}
    name="foo"
    description="Is foo?"
  />
</Flow.Row>
\`\`\`
`;

export default FlowCheckbox;
