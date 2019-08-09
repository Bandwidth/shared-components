import styled from 'styled-components';
import get from 'extensions/themeGet';

const SectionTitle =  styled.h3`
  background: ${get('colors.gray.mediumLight')};
  color: ${get('colors.text.default')};
  display: block;
  padding: ${get('spacing.extraSmall')} ${get('spacing.large')};
  margin: 0;
  font-size: 1.0em;
  font-weight: 600;
  line-height: 0.8;
  text-transform: uppercase;
  width: 100%;
`;

SectionTitle.defaultProps = {
  className: "scl-section-title"
}

export default SectionTitle;