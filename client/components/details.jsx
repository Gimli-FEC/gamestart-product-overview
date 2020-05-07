import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin-bottom: 20px;
`;

const Details = ({ title, publisher, EsrbSrc, EsrbCat }) => (
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
        Stars Here
      </Col>
      <Col size={1}>
        Rating
      </Col>
      <Col size={1}>
        NumofReviews
      </Col>
      <Col size={2} />
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
