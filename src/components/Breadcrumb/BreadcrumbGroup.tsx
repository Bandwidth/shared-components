import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import { themeGet } from 'extensions';
/**
 * @visibleName Breadcrumb.Group
 */
const BreadcrumbGroup = styled.div`
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

export default BreadcrumbGroup;
