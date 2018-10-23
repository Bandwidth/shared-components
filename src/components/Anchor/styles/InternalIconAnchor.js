import ExternalIconAnchor from './ExternalIconAnchor';
import Link from './DomSafeLink';
import { defaultProps } from 'recompose';

const InternalIconAnchor = defaultProps({ as: Link })(ExternalIconAnchor);

InternalIconAnchor.Negative = defaultProps({ as: Link })(
  ExternalIconAnchor.Negative,
);

InternalIconAnchor.Positive = defaultProps({ as: Link })(
  ExternalIconAnchor.Positive,
);

InternalIconAnchor.Dark = defaultProps({ as: Link })(ExternalIconAnchor.Dark);

InternalIconAnchor.Inverted = defaultProps({ as: Link })(
  ExternalIconAnchor.Inverted,
);

export default InternalIconAnchor;
