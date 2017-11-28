import SectionTitle from 'components/SectionTitle';
import get from 'extensions/themeGet';

export default SectionTitle.extend`
  margin: 0 -${get('spacing.large')} ${get('spacing.small')} -${get(
      'spacing.large',
    )};
`;
