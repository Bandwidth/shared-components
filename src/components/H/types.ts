import { SpacingProps } from '../../extensions/userSpacing';
import { StyledComponentClass } from 'styled-components';

export interface HeaderProps extends SpacingProps {}

export type StyledHeader = StyledComponentClass<
  React.ClassAttributes<HTMLHeadingElement> &
    React.HTMLAttributes<HTMLHeadingElement> &
    HeaderProps,
  any
>;
