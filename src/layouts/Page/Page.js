import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

const Page = styled.article.withConfig({ displayName: 'Page' })`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

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

export default sharedComponent(`
# Page

Page just sets up some defaults for layout and sizing on an average page. Items arrange via flexbox vertically. The page will be 100% of the width of its container.

\`\`\`
<Page>
  <ScrollBox>
    <!-- content -->
  </ScrollBox>
</Page>
\`\`\`
`)(Page);
