import PropTypes from 'prop-types';
import styled from 'styled-components';

const NewBadge = styled.span`
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

NewBadge.usage = `
NewBadge lets a user quickly find new items that were just created by a previous action. Drop it on any item which just appeared on the page to easily inform the user of changes.
`;

export default NewBadge;
