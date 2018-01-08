import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import dedent from 'dedent';

const Breadcrumbs = styled.div`
  & > ${Breadcrumb}:not(:last-child)::after {
    content: '\00a0 \00a0 ›\00a0 \00a0';
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

export default Breadcrumbs;
