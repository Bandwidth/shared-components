import field from './flowField';
import RadioGroup from '../../../components/RadioGroup';
import sharedComponent from '../../../sharedComponent';

const FlowRadioGroup = field(RadioGroup);

export default sharedComponent()(FlowRadioGroup);
