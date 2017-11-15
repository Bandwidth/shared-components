import Icon from 'components/Icon';
import styled from 'styled-components';
import get from 'extensions/themeGet';

const AccordionArrow = styled(Icon)`
  color: ${get('colors.gray.default')};
  margin: auto 1em auto auto;
  transform: ${({ isExpanded }) => isExpanded ? 'rotate(90deg)' : 'rotate(0)'};
  transition: 0.2s all ease;
  font-weight: 100;

  &:after {
    padding-top: 0;
    padding-bottom: 0;
    font-size: 1.5em;
  }
`

AccordionArrow.Small = AccordionArrow.extend`
  color: ${get('colors.text.default')};

  &:after {
    font-size: 1em;
  }
`;

export default AccordionArrow;
