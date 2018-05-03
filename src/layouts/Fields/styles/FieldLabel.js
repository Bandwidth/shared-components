import styled from 'styled-components';
import Label from '../../../components/Label';

/**
 * Adjustments to the top and bottom margin of label so that it:
 * 1. Retains a 1.5 line-height so that wrapped label lines are spaced correctly
 * 2. The very top of the label from a layout perspective is its cap-height (the very top of a capital letter)
 * 3. The very bottom of a label (even if wrapped) is the baseline (the bottom of a lowercase letter, not
 *    including descenders)
 */
export default styled(Label)`
  margin-top: -0.25em;
  margin-bottom: -0.5em;
`;
