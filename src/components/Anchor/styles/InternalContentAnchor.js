import ExternalContentAnchor from './ExternalContentAnchor';
import Link from './DomSafeLink';
import { defaultProps } from 'recompose';

export default defaultProps({ as: Link })(ExternalContentAnchor);
