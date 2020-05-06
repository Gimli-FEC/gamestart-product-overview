import React from 'react';
import styled from 'styled-components';

const MainImg = styled.img`
  width: 600px;
  heigth: 600px;
`;

const MainImage = ({ specialUrl }) => (
  <MainImg src={ specialUrl } alt="I'm the big one!" />
);

export default MainImage;