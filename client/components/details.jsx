import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatingStars from './ratings.jsx';
import GameVersion from './newOrUsed.jsx';

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  text-align: left;
  margin-bottom: .5rem;
`;

const Publisher = styled.span`
  font-family: sans-serif;
  font-size: .5rem;
  text-align: left;
`;

const EsrbPic = styled.img`
  height: 53px;
  width: 38px;
  margin-top: 15px;
`;

const Grid = styled.div`
  margin-left: 75px;
`;

const Row = styled.div`
  display: flex;
  margin-botton: 15px;
  padding-bottom: 10px;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin-bottom: 20px;
`;

const Details = ({ title, publisher, EsrbSrc, EsrbCat, rating }) => (
  <Grid>
    <Row>
      <Col size={3}>
        <Row>
          <Title>{title}</Title>
        </Row>
        <Row>
          <Publisher>{publisher}</Publisher>
        </Row>
      </Col>
      <Col size={1}>
        <EsrbPic src={EsrbSrc} alt={EsrbCat} />
      </Col>
    </Row>
    <Row>
      <Col size={1}>
        <RatingStars rating={rating} />
      </Col>
      <Col size={1}>
        {rating}
      </Col>
      <Col size={1}>
        NumofReviews(TBD)
      </Col>
      <Col size={2} />
    </Row>
      <Row>
        <GameVersion labelName={"New"} value={"$$$$$$$$"}/>
        <GameVersion labelName={"Used"} value={"$$$"}/>
      </Row>
      <Row>
        <FontAwesomeIcon icon="map-marker-alt" />Available at a store near you!
      </Row>
      <Row>
        <FontAwesomeIcon icon="truck" /><span><strong> FREE NO HURRY SHIPPING $35+</strong></span>
      </Row>
      <Row>
        <Col size={1}>
          ProtectionPlanSelect
        </Col>
        <Col size={1}>
          Plan Details (link)
        </Col>
      </Row>
      <Row>
        Add To Cart (Button) Component
      </Row>
      <Row>
        IN STOCK Comonent
      </Row>
      <Row>
        <Col size={1}>
        <FontAwesomeIcon icon="list-ul" color="rgb(219,1,1)" /> ADD TO WISHLIST
        </Col>
        <Col size={1}>
          <FontAwesomeIcon icon="retweet" color="rgb(219,1,1)" /> SEE TRADE VALUE
        </Col>
      </Row>
  </Grid>
);


Details.propTypes = {
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  EsrbSrc: PropTypes.string.isRequired,
  EsrbCat: PropTypes.string.isRequired,
};

export default Details;
