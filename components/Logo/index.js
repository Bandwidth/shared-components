import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const Img = styled.img`
  width: 26px;
  height: 30px;
  margin: auto;
`;

const Logo = function () {
  return <Img src={logo} />;
}

Logo.usage = `
# Logo

Renders the company logo! At a size of about 30px. This isn't the most versatile component yet.

Bandwidth and the BW logo are trademarks of Bandwidth.com, Inc.  Bandwidth reserves all rights to these trademarks, as well as any others that may be included from time to time.
`;

export default Logo;
