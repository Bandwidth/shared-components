import styled from 'styled-components';

const LogoImage = styled.img`
  width: 26px;
  height: 30px;
  margin: auto;
`;

LogoImage.Small = LogoImage.extend`
  width: 13px;
  height: 15px;
`;

LogoImage.Large = LogoImage.extend`
  width: 52px;
  height: 60px;
`;

export default LogoImage;
