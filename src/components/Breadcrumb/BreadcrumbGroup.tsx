import styled, { StyledComponentClass } from 'styled-components';
import Breadcrumb from './Breadcrumb';
import dedent from 'dedent';
import { themeGet } from 'extensions';

type StyledDiv = StyledComponentClass<
  React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>,
  any
>;

interface BreadcrumbGroup extends StyledDiv {
  Breadcrumb?: any;
}

/**
 * @visibleName Breadcrumb.Group
 */
const BreadcrumbGroup: BreadcrumbGroup = styled.div`
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

// BreadcrumbGroup.propTypes = {
//   children: props => {
//     if (!props.children) return;
//     const invalidChildren = props.children.filter(
//       child => child.type.displayName !== Breadcrumb.displayName,
//     );
//     if (invalidChildren.length > 0) {
//       const child = invalidChildren[0];
//       const childName = child.type.displayName || child.type.name || child.type;
//       return new Error(dedent`Invalid child component for BreadcrumbGroup: ${childName}.  Only ${
//         Breadcrumb.displayName
//       } \
//         components may be nested within BreadcrumbGroup.`);
//     }
//   },
// };

BreadcrumbGroup.Breadcrumb = Breadcrumb;

export default BreadcrumbGroup;
