import get from 'extensions/themeGet';
import styled from 'styled-components';

export default styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  color: var(--colors-primary-default);
  font-size: 18px;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  & > * {
    margin-right: 8px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;
