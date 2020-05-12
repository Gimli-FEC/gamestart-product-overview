import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
// import modal here

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

  // handleMouseOver() {
  //   // load modal
  // }

  render() {
    const { rating, totalReviews } = this.state;
    const percent = (rating / 5) * 100;

    return (
      <Row>
        <Col size={1}>
          <Container>
            <TopStars percent={percent}>⭑⭑⭑⭑⭑</TopStars>
            <BottomStars>⭑⭑⭑⭑⭑</BottomStars>
          </Container>
        </Col>
        {/* <Col size={1}>{rating}</Col>
        <Col size={1}>{totalReviews}</Col> */}
      </Row>
    );
  }
}


export default Ratings;
