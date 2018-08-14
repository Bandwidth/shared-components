import ExternalTextAnchor from './ExternalTextAnchor';
import Link from './DomSafeLink';

const InternalTextAnchor = ExternalTextAnchor.withComponent(Link);

InternalTextAnchor.Negative = ExternalTextAnchor.Negative.withComponent(Link);

InternalTextAnchor.Positive = ExternalTextAnchor.Positive.withComponent(Link);

InternalTextAnchor.Dark = ExternalTextAnchor.Dark.withComponent(Link);

InternalTextAnchor.Inverted = ExternalTextAnchor.Inverted.withComponent(Link);

export default InternalTextAnchor;
