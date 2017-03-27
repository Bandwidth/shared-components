import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const Img = styled.img`
  width: 26px;
  height: 30px;
  margin: auto;
`;

export default function () {
  return <Img src={logo} />;
}
