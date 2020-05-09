import React from 'react';
import styled from 'styled-components';
// import modal here

const Container = styled.div`
  display: inline;
  unicode-bidi: bidi-override;
  position: absolute;
  font-size: 15px
  resize: none;
`;

const TopStars = styled.div`
  width: ${(props) => props.percent}%;
  color: rgb(219,1,1);
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  display: block;
  overflow: hidden;
`;

const BottomStars = styled.div`
  padding: 0;
  color: grey;
  z-index: 0;
  display: block;
`;

const RatingStars = ({ rating }) => {
  const percent = (rating / 5) * 100;

  return (
    <Container /*onMouseEnter={}*/>
      <TopStars percent={percent}>⭑⭑⭑⭑⭑</TopStars>
      <BottomStars>⭑⭑⭑⭑⭑</BottomStars>
    </Container>
  );
};

export default RatingStars;
