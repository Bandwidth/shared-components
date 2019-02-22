import Accordion from './Accordion';
import defaultProps from 'extensions/defaultProps';

export default defaultProps({
  Border: Accordion.styles.Border,
  Arrow: (Accordion.styles.Arrow as any).Small,
  Label: (Accordion.styles.Label as any).Small,
  labelSpacing: '20px',
})(Accordion);
