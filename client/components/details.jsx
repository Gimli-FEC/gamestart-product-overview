import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ratings from './ratings.jsx';
import Version from './version.jsx';
import Button from './button.jsx';

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  text-align: left;
  margin-bottom: .5rem;
`;

const Publisher = styled.span`
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
  font-family: sans-serif;
  font-size: .75rem;
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

const StockDetails = styled.div`
  color: rgb(50, 157, 115);
`;

const Hr = styled.hr`
  border: 1px solid rgb(242, 244, 247);
`;

const Details = ({ title, publisher, EsrbSrc, EsrbCat, priceNew, priceUsed }) => {

  return (
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
        <Ratings />
      </Row>
      <Row>
        <Version priceNew={priceNew} priceUsed={priceUsed} />
      </Row>
      <Row>
        <FontAwesomeIcon icon="map-marker-alt" />
        Available at a store near you!
      </Row>
      <Row>
        <FontAwesomeIcon icon="truck" /><span><strong> FREE NO HURRY SHIPPING $35+</strong></span>
      </Row>
      <Row>
        <Button text='Add to cart' />
      </Row>
      <Row>
        IN STOCK Component Coming Soon
      </Row>
      <Hr />
      <Row>
        <Col size={1}>
          <FontAwesomeIcon icon="list-ul" color="rgb(219,1,1)" />
          ADD TO WISHLIST
        </Col>
        <Col size={1}>
          <FontAwesomeIcon icon="retweet" color="rgb(219,1,1)" />
          SEE TRADE VALUE
        </Col>
      </Row>
    </Grid>
  );
};


Details.propTypes = {
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  EsrbSrc: PropTypes.string.isRequired,
  EsrbCat: PropTypes.string.isRequired,
  priceNew: PropTypes.number.isRequired,
  priceUsed: PropTypes.number.isRequired,
};

export default Details;
