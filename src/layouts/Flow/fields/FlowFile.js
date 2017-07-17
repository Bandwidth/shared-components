import field from './flowField';
import FileLoader from '../../../components/FileLoader';

const FlowFile = field(FileLoader);

FlowFile.usage = `
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
`;

export default FlowFile;
