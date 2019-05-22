import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import * as styles from './styles';

const verticalStyles = css`
  border-bottom-color: ${get('colors.border.medium')};
  border-right-color: ${props =>
    props.active
      ? get('colors.background.default')(props)
      : get('colors.border.medium')(props)};

  &:last-child {
    border-radius: 0 0 0 3px;
    margin-bottom: 0;
  }

  ${({ disabled, active }) => {
    if (!disabled && !active) {
      return css`
        &:hover {
          border-bottom-color: ${props =>
            props.active
              ? get('colors.border.medium')(props)
              : get('colors.primary.default')(props)};
        }
      `;
    }
  }};
`;

const Tab = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  opacity: ${({ active }) => (active ? 1 : 0.5)};

  padding: 1em 1.4em;
  margin-right: -1px;
  margin-bottom: -1px;

  cursor: ${({ disabled, active }) =>
    disabled || active ? 'default' : 'pointer'};

  color: inherit;
  background: ${props =>
    props.disabled
      ? get('colors.background.disabled')(props)
      : get('colors.background.default')(props)};

  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;

  transition: opacity 0.2s ease, border-color 0.2s ease;

  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  border-color: ${get('colors.border.medium')};

  border-bottom-color: ${props =>
    props.active
      ? get('colors.background.default')(props)
      : get('colors.border.medium')(props)};

  &:first-child {
    border-radius: 3px 0 0 0;
  }

  &:last-child {
    border-radius: 0 3px 0 0;
    margin-right: 0;
  }

  ${({ disabled, active }) => {
    if (!disabled && !active) {
      return css`
        &:hover {
          border-color: ${props =>
            props.active
              ? get('colors.border.medium')(props)
              : get('colors.primary.default')(props)};
          opacity: 1;
          z-index: 1;
        }
      `;
    }
  }}

  ${styles.List.Vertical} > &, ${styles.Container.Vertical} > ${
  styles.List
} > & {
    ${verticalStyles};
  }
`;

Tab.Vertical = styled(Tab)`
  ${verticalStyles};
`;

Tab.Container = Tab.Vertical.Container = styles.Container;
Tab.Content = Tab.Vertical.Content = styles.Content;

Tab.styles = styles;

/**
 * @component
 */
export default Tab;
