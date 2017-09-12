import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const PageImpl = styled.article.withConfig({ displayName: 'Page' })`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  & > *:last-child {
    flex: 1 1 auto;
  }
`;

export const Page = ({ children, ...rest }) => (
  <PageImpl {...rest}>{children}</PageImpl>
);

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

export default sharedComponent()(Page);
