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
  className: null,
  id: null,
};

Badge.New = styled(Badge)`
  content: 'NEW:';
  color: ${get('colors.primary.default')};
  &::after {
    content: 'NEW:';
  }

`;

Badge.Voice = styled(Badge)`
  background: ${get('colors.graphics-1')};
  color: ${get('colors.text.inverted')};

  &::after {
    content: 'VOICE';
  }
`;

Badge.Messaging = styled(Badge)`
  background: ${get('colors.positive.border')};
  color: ${get('colors.positive.dark')};

  &::after {
    content: 'MESSAGING';
  }
`;

Badge.Mms = styled(Badge)`
  background: ${get('colors.positive.border')};
  color: ${get('colors.positive.dark')};

  &::after {
    content: 'MMS';
  }
`;

Badge.Sms = styled(Badge)`
  background: ${get('colors.positive.border')};
  color: ${get('colors.positive.dark')};

  &::after {
    content: 'SMS';
  }
`;

Badge.Emergency = styled(Badge)`
  background: ${get('colors.accents-1-default')};
  color: ${get('colors.text.inverted')};

  &::after {
    content: 'EMERGENCY';
  }
`;

Badge.NineOneOne = styled(Badge)`
  background: ${get('colors.accents-1-default')};
  color: ${get('colors.text.inverted')};

  &::after {
    content: '911';
  }
`;

Badge.Sos = styled(Badge)`
  background: ${get('colors.accents-1-default')};
  color: ${get('colors.text.inverted')};

  &::after {
    content: 'SOS';
  }
`;

Badge.Lidb = styled(Badge)`
  background: #651f45;
  color: ${get('colors.text.inverted')};

  &::after {
    content: 'LIDB';
  }
`;

Badge.Cnam = styled(Badge)`
  background: #651f45;
  color: ${get('colors.text.inverted')};

  &::after {
    content: 'CNAM';
  }
`;

Badge.Dl = styled(Badge)`
  background: #651f45;
  color: ${get('colors.text.inverted')};

  &::after {
    content: 'DL';
  }
`;

Badge.Da = styled(Badge)`
  background: #651f45;
  color: ${get('colors.text.inverted')};

  &::after {
    content: 'DA';
  }
`;

Badge.Protected = styled(Badge)`
  background: #651f45;
  color: ${get('colors.text.inverted')};

  &::after {
    content: 'PROTECTED';
  }
`;

Badge.CallFwd = styled(Badge)`
  background: #651f45;
  color: ${get('colors.text.inverted')};

  &::after {
    content: 'CALL FWD';
  }
`;

Badge.Assigned = styled(Badge)`
  background: ${get('colors.primary.default')};
  color: ${get('colors.text.inverted')};

  &::after {
    content: 'ASSIGNED';
  }
`;

Badge.Unassigned = styled(Badge)`
  background: ${get('colors.gray.disabled')};
  color: ${get('colors.text.disabled')};

  &::after {
    content: 'UNASSIGNED';
  }
`;

Badge.Unassigned = styled(Badge)`
  background: ${get('colors.gray.disabled')};
  color: ${get('colors.text.disabled')};

  &::after {
    content: 'UNASSIGNED';
  }
`;

/**
 * @component
 */
export default Badge;
