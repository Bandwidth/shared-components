import field from './flowField';
import Input from '../../../components/Input';
import sharedComponent from '../../../sharedComponent';

const FlowInput = field(Input);

export default sharedComponent()(FlowInput);
