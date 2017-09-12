import field from './flowField';
import Select from '../../../components/Select';
import sharedComponent from '../../../sharedComponent';

const FlowSelect = field(Select);

export default sharedComponent()(FlowSelect);
