import ExternalTextAnchor from './ExternalTextAnchor';
import Link from './DomSafeLink';
import { defaultProps } from 'recompose';

const InternalTextAnchor = defaultProps({ as: Link })(ExternalTextAnchor);

InternalTextAnchor.Negative = defaultProps({ as: Link })(
  ExternalTextAnchor.Negative,
);

InternalTextAnchor.Positive = defaultProps({ as: Link })(
  ExternalTextAnchor.Positive,
);

InternalTextAnchor.Dark = defaultProps({ as: Link })(ExternalTextAnchor.Dark);

InternalTextAnchor.Inverted = defaultProps({ as: Link })(
  ExternalTextAnchor.Inverted,
);

export default InternalTextAnchor;
