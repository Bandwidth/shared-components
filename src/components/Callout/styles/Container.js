import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const HelpCalloutContainer = styled.div`
  /* reset text styles */

  color: ${themeGet('colors.text.default')};
  font-style: normal;
  font-size: ${themeGet('fontSizes.default')};

  background-color: ${themeGet('colors.background.default')};
  border: 1px solid ${themeGet('colors.border.medium')};
  border-radius: 4px;
  overflow-y: auto;
  box-shadow: ${themeGet('shadows.short')};
  z-index: 100000;
  padding: ${themeGet('spacing.medium')};
  pointer-events: none;
  max-width: ${({ maxWidth }) =>
    typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth};

  &[data-placement*='top'] {
    margin-bottom: 6px;
  }
  &[data-placement*='bottom'] {
    margin-top: 6px;
  }
  &[data-placement*='right'] {
    margin-left: 6px;
  }
  &[data-placement*='left'] {
    margin-right: 6px;
  }
`;

export default HelpCalloutContainer;
