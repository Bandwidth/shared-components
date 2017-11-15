import ExternalIconAnchor from './ExternalIconAnchor';
import { Link } from 'react-router-dom';

const InternalIconAnchor = ExternalIconAnchor.withComponent(Link);

InternalIconAnchor.Danger = ExternalIconAnchor.Danger.withComponent(Link);

export default InternalIconAnchor;
