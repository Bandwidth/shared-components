import field from './flowField';
import TextArea from '../../../components/TextArea';

const FlowTextArea = field(TextArea);

FlowTextArea.usage = `
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
`;

export default FlowTextArea;
