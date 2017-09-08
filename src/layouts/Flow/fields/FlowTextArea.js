import field from './flowField';
import TextArea from '../../../components/TextArea';
import sharedComponent from '../../../sharedComponent';

const FlowTextArea = field(TextArea);

export default sharedComponent()(FlowTextArea);
