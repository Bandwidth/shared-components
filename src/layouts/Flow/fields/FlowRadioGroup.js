import field from './flowField';
import RadioGroup from '../../../components/RadioGroup';

const FlowRadioGroup = field(RadioGroup);

FlowRadioGroup.usage = `
A prebuilt \`Flow.Item\` with a \`RadioGroup\` component inside, designed for use with Redux Form.

\`\`\`
<Flow.Row>
  <Field
    component={Flow.fields.RadioGroup}
    options={['foo', 'bar', 'baz']}
    name="foo"
    label="Choose one"
  />
</Flow.Row>
\`\`\`
`;

export default FlowRadioGroup;
