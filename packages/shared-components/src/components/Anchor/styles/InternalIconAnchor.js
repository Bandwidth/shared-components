import ExternalIconAnchor from './ExternalIconAnchor';
import Link from './DomSafeLink';

const InternalIconAnchor = ExternalIconAnchor.withComponent(Link);

InternalIconAnchor.Negative = ExternalIconAnchor.Negative.withComponent(Link);

InternalIconAnchor.Positive = ExternalIconAnchor.Positive.withComponent(Link);

InternalIconAnchor.Dark = ExternalIconAnchor.Dark.withComponent(Link);

InternalIconAnchor.Inverted = ExternalIconAnchor.Inverted.withComponent(Link);

export default InternalIconAnchor;
