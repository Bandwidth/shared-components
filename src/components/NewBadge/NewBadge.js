import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const NewBadgeImpl = styled.span`
  display: inline-block;

  &::after {
    content: 'New:';
    text-transform: uppercase;
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 0.85em;
    margin-right: 1em;
  }
`;

const NewBadge = ({ children, ...rest }) => (
  <NewBadgeImpl {...rest}>{children}</NewBadgeImpl>
);

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
  className: null,
  id: null,
};

export default sharedComponent()(NewBadge);
