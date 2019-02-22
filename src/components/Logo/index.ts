import Logo from './Logo';
import PrimaryLogo from './PrimaryLogo';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(Logo, {
  Primary: PrimaryLogo,
});
