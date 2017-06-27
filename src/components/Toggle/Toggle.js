import PropTypes from 'prop-types';
import styled from 'styled-components';

const HEIGHT = '24px';
const WIDTH = '48px';

export const HiddenInput = styled.input`
  margin: -9999px;

  &:focus + label::before {
    box-shadow: ${({ theme }) => theme.shadows.focusOutline};
  }
`;

const Toggle = styled.label`
  cursor: pointer;
  position: relative;
  top: 50%;
  padding: ${({ theme }) => `${theme.padding.extraSmall} 0 ${theme.padding.extraSmall} ${theme.padding.extraLarge}`};
  float: left;
  user-select: none;
  transition: all 0.2s ease;
  line-height: ${HEIGHT};
  font-family: ${({ theme }) => theme.fonts.brand};
  font-weight: 300;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.grayMed};

  &::before {
    content: '';
    background: ${({ theme, active }) => active ? theme.colors.secondary : theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${HEIGHT};
    width: ${WIDTH};
    height: ${HEIGHT};
    cursor: pointer;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }

  &::after {
    content: '';
    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${HEIGHT};
    width: ${HEIGHT};
    height: ${HEIGHT};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ active }) => active ? HEIGHT : 0};
    display: block;
    transition: all 0.2s ease;
  }

  &:hover::before,
  &:hover::after {
    border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  }
  &:hover::before {
    background: ${({ theme, active }) => active ? theme.colors.primaryDark : theme.colors.white};
  }

  &:disabled::before, &:disabled::after {
    border: 2px solid ${({ theme }) => theme.colors.disabled};
    background: ${({ theme }) => theme.colors.disabled};
  }
`;

Toggle.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Toggle.defaultProps = {
  className: null,
  id: null,
};

Toggle.usage = `
A simple toggle input. The default export is the label to use.

Also exports \`HiddenInput\`, which is the actual <input> element.

It's probably easier to use \`fields/ToggleField\`, which assembles these for you.

\`\`\`
<HiddenInput value={true} id="a" />
<Toggle for="a" />
\`\`\`
`;

Toggle.Input = HiddenInput;
export default Toggle;
