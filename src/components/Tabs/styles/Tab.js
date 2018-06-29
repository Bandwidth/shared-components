import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import TabList from './TabList';
import TabContainer from './TabContainer';

const verticalStyles = css`
  border-bottom-color: var(--colors-border-medium);
  border-right-color: ${props =>
    props.active
      ? 'var(--colors-background-default)'
      : 'var(--colors-border-medium)'};

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
              ? 'var(--colors-border-medium)'
              : 'var(--colors-primary-default)'};
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
      ? 'var(--colors-background-disabled)'
      : 'var(--colors-background-default)'};

  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;

  transition: opacity 0.2s ease, border-color 0.2s ease;

  border-width: var(--thicknesses-normal);
  border-style: solid;
  border-color: var(--colors-border-medium);

  border-bottom-color: ${props =>
    props.active
      ? 'var(--colors-background-default)'
      : 'var(--colors-border-medium)'};

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
              ? 'var(--colors-border-medium)'
              : 'var(--colors-primary-default)'};
          opacity: 1;
          z-index: 1;
        }
      `;
    }
  }}

  ${TabList}:not(${TabList.Vertical}) > & {
    flex: 1 0 0;
  }

  ${TabList.Vertical} > &, ${TabContainer.Vertical} > ${TabList} > & {
    ${verticalStyles};
  }
`;

Tab.Vertical = styled(Tab)`
  ${verticalStyles};
`;

/**
 * @component
 */
export default Tab;
