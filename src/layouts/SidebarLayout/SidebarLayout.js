import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('SidebarLayout', ({ colors }) => ({
    contentBackground: colors.gray.light,
    borderColor: colors.gray.borderLight,
    borderWidth: '1px',
  }))
  .createSelector();

const SidebarLayout = theme.connect(styled.div.withConfig({ displayName: 'SidebarLayout' })`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 0;
  padding: 0;

  & > *:first-child {
    flex: 3;
  }

  & > *:last-child {
    flex: 6;
    background: ${select('contentBackground')};
    border-left-width: ${select('borderWidth')};
    border-left-style: solid;
    border-left-color: ${select('borderColor')};
    margin-left: -1px;
  }
`);

SidebarLayout.propTypes = {
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

SidebarLayout.defaultProps = {
  id: null,
  className: null,
};

SidebarLayout.usage = `
# SidebarLayout

Does some simple stuff with flexbox to layout two columns. Assumes that it only has two children. We could extend this with media queries at some point to make it more useful.

\`\`\`
<SidebarLayout>
  <ASidebar/>
  <SomeContent/>
</SidebarLayout>
\`\`\`
`;

export default SidebarLayout;
