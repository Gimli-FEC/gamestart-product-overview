import React from 'react';
import styled from 'styled-components';

const MainImg = styled.img`
  vertical-align: baseline;
  width: 600px;
  heigth: 600px;
  margin-top: 15px;
`;

const MainImage = ({url}) => (
  <MainImg src={url} alt="I'm the big one!" />
);

export default MainImage;