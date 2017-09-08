import field from './flowField';
import Checkbox from '../../../components/Checkbox';
import sharedComponent from '../../../sharedComponent';

const FlowCheckbox = field(Checkbox);

export default sharedComponent()(FlowCheckbox);
