import Button from './Button';
import SubmitButton from './SubmitButton';
import DangerButton from './DangerButton';
import LargeButton from './LargeButton';
import SmallButton from './SmallButton';
import SecondaryButton from './SecondaryButton';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(Button, {
  Danger: DangerButton,
  Large: LargeButton,
  Small: SmallButton,
  Submit: SubmitButton,
  Secondary: SecondaryButton,
});
