import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import Tooltip from './ratingsTooltip.jsx';

const Container = styled.div`
  display: inline;
  position: absolute;
  resize: none;
`;

const TopStars = styled.div`
  width: ${(props) => props.percent}%;
  color: rgb(218, 41, 28);
  z-index: 1;
  position: absolute;
  display: block;
  overflow: hidden;
`;

const BottomStars = styled.div`
  color: grey;
  z-index: 0;
  display: block;
`;

const Row = styled.div`
  display: flex;
  justify-content: stretch;
  margin-bottom: 20px;
`;

const Col = styled.div`
  size: ${(props) => props.size};
`;

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      totalReviews: null,
      stars1: null,
      stars2: null,
      stars3: null,
      stars4: null,
      stars5: null,
    };

    // this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount() {
    const params = (new URL(window.location)).searchParams;
    // eslint-disable-next-line radix
    const id = parseInt(params.get('id'), 10);
    $.get(`/reviews/${id}`)
      .done((data) => {
        this.setState({
          rating: data.overallRating,
          totalReviews: data.totalReviews,
          stars1: data.stars1,
          stars2: data.stars2,
          stars3: data.stars3,
          stars4: data.stars4,
          stars5: data.stars5,
        });
      })
      .fail((err) => console.log(err));
  }

  render() {
    const { rating, totalReviews, stars1, stars2, stars3, stars4, stars5 } = this.state;
    const percent = (rating / 5) * 100;

    const message = `
      Rating: ${rating} out of 5\n
      (based on ${totalReviews} reviews)\n
      5⭑: ${Math.round((stars5 / totalReviews) * 100)}% \n
      4⭑: ${Math.round((stars4 / totalReviews) * 100)}% \n
      3⭑: ${Math.round((stars3 / totalReviews) * 100)}% \n
      2⭑: ${Math.round((stars2 / totalReviews) * 100)}% \n
      1⭑: ${Math.round((stars1 / totalReviews) * 100)}%
    `;

    return (
      <Row>
        <Col size={1}>
          <Container>
            <Tooltip message={message}>
              <TopStars percent={percent}>⭑⭑⭑⭑⭑</TopStars>
              <BottomStars>⭑⭑⭑⭑⭑</BottomStars>
            </Tooltip>
          </Container>
        </Col>
      </Row>
    );
  }
}


export default Ratings;
