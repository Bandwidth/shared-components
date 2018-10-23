import SectionTitle from 'components/SectionTitle';
import get from 'extensions/themeGet';
import styled from 'styled-components';

export default styled(SectionTitle)`
  width: auto;
  margin: 0 -${get('spacing.large')} ${get('spacing.small')} -${get(
      'spacing.large',
    )};
`;
