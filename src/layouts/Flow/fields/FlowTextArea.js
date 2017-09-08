import field from './flowField';
import TextArea from '../../../components/TextArea';
import sharedComponent from '../../../sharedComponent';

const FlowTextArea = field(TextArea);

export default sharedComponent(`
A prebuilt \`Flow.Item\` with a \`TextArea\` component inside, designed for use with Redux Form.

\`\`\`
<Flow.Row>
  <Field
    component={Flow.fields.TextArea}
    name="foo"
    label="Type a story here"
  />
</Flow.Row>
\`\`\`
`)(FlowTextArea);
