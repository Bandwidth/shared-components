import Accordion from './Accordion';
import SmallAccordion from './SmallAccordion';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(Accordion, {
  Small: SmallAccordion,
});
