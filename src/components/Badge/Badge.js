import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const Badge = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 0.85em;
  margin: 0 1em 0 0;
  position: relative;
  border-radius: 5px;
  letter-spacing: .1em;
  line-height: 16px;
  padding: 2px 5px;
  text-transform: uppercase;
`;

Badge.propTypes = {
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

Badge.defaultProps = {
  className: "scl-badge",
  id: null,
};

Badge.New = styled(Badge)`
  color: ${get('colors.primary.default')};
  &::after {
    content: 'NEW:';
  }

`;

Badge.Primary = styled(Badge)`
  background: ${get('colors.primary.default')};
  color: ${get('colors.text.inverted')};
`;

Badge.Accent0 = styled(Badge)`
  background: ${get('colors.accents-0-default')};
  color: ${get('colors.text.inverted')};
`;

Badge.Accent1 = styled(Badge)`
  background: ${get('colors.accents-1-default')};
  color: ${get('colors.text.inverted')};
`;

Badge.Positive = styled(Badge)`
  background: ${get('colors.positive.border')};
  color: ${get('colors.positive.dark')};
`;

Badge.Disabled = styled(Badge)`
  background: ${get('colors.background.disabled')};
  color: ${get('colors.text.disabled')};
`;

Badge.Generic = styled(Badge)`
  background: #651f45;
  color: ${get('colors.text.inverted')};
`;


/**
 * @component
 */
export default Badge;
