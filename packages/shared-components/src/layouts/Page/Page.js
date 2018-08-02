import PropTypes from 'prop-types';
import styled from 'styled-components';

const Page = styled.article.withConfig({ displayName: 'Page' })`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  min-height: 0;

  & > *:last-child {
    flex: 1 1 auto;
  }
`;

Page.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

Page.defaultProps = {
  id: null,
  className: null,
};

/**
 * @component
 */
export default Page;
