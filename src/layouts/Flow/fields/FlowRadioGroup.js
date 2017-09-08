import field from './flowField';
import RadioGroup from '../../../components/RadioGroup';
import sharedComponent from '../../../sharedComponent';

const FlowRadioGroup = field(RadioGroup);

export default sharedComponent(`
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
`)(FlowRadioGroup);
