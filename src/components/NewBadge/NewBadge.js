import PropTypes from 'prop-types';
import get from 'extensions/themeGet';
import Badge from '../../components/Badge';

const NewBadge = Badge.New;

NewBadge.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

NewBadge.defaultProps = {
  className: "scl-new-badge",
  id: null,
};

/**
 * @component
 */
export default NewBadge;
