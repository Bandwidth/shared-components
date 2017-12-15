import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: bold;

  margin-left: ${get('spacing.small')};

  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  border-color: ${get('colors.border.medium')};
  border-radius: 3px;

  padding: 0 ${get('spacing.small')};
  background: ${get('colors.background.default')};
  text-transform: uppercase;
`;
