import field from './flowField';
import FileLoader from '../../../components/FileLoader';
import sharedComponent from '../../../sharedComponent';

export const FlowFile = field(FileLoader);

export default sharedComponent()(FlowFile);
