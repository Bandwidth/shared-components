import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import dedent from 'dedent';
import { themeGet } from 'extensions';

const Breadcrumbs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: ${themeGet('spacing.large')};
  padding-right: ${themeGet('spacing.large')};

  & > ${Breadcrumb}:not(:last-child) {
    margin-right: 18px;
    position: relative;

    &::after {
      position: absolute;
      right: -12px;
      bottom: 0;
      content: '›';
    }
  }
`;

Breadcrumbs.propTypes = {
  children: props => {
    if (!props.children) return;
    const invalidChildren = props.children.filter(
      child => child.type.displayName !== Breadcrumb.displayName,
    );
    if (invalidChildren.length > 0) {
      const child = invalidChildren[0];
      const childName = child.type.displayName || child.type.name || child.type;
      return new Error(dedent`Invalid child component for Breadcrumbs: ${childName}.  Only ${
        Breadcrumb.displayName
      } \
        components may be nested within Breadcrumbs.`);
    }
  },
};

Breadcrumbs.Breadcrumb = Breadcrumb;

/**
 * @component
 * @visibleName Breadcrumb.Group
 */
export default Breadcrumbs;
