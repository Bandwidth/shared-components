import field from './flowField';
import Toggle from '../../../components/Toggle';
import sharedComponent from '../../../sharedComponent';

const FlowToggle = field(Toggle);

export default sharedComponent()(FlowToggle);
