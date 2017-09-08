import field from './flowField';
import FileLoader from '../../../components/FileLoader';
import sharedComponent from '../../../sharedComponent';

const FlowFile = field(FileLoader);

export default sharedComponent(`
A prebuilt \`Flow.Item\` with a \`FileLoader\` component inside, designed for use with Redux Form.

\`\`\`
<Flow.Row>
  <Field
    component={Flow.fields.File}
    name="foo"
    label="Upload a file here"
  />
</Flow.Row>
\`\`\`
`)(FlowFile);
