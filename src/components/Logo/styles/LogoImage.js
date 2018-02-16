import styled from 'styled-components';

const LogoImage = styled.img`
  width: 26px;
  height: 30px;
  margin: auto;
`;

LogoImage.Small = styled(LogoImage)`
  width: 13px;
  height: 15px;
`;

LogoImage.Large = styled(LogoImage)`
  width: 52px;
  height: 60px;
`;

export default LogoImage;
