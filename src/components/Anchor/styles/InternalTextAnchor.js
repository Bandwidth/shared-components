import ExternalTextAnchor from './ExternalTextAnchor';
import { Link } from 'react-router-dom';

const InternalTextAnchor = ExternalTextAnchor.withComponent(Link);

InternalTextAnchor.Danger = ExternalTextAnchor.Danger.withComponent(Link);

export default InternalTextAnchor;
