import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'normalize.css';
import styled from 'styled-components';
import Details from './components/details.jsx';
import ImageList from './components/imageList.jsx';

const Grid = styled.div`
  width: 60%;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin-right: 25px;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: null,
      publisher: null,
      contentRating: null,
      userRating: null,
      priceNew: null,
      priceUsed: null,
      currentStockNew: null,
      currentStockUsed: null,
      images: [],
      esrbCategory: null,
      esrbImage: null,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    const params = (new URL(window.location)).searchParams;
    // eslint-disable-next-line radix
    const id = parseInt(params.get('id'), 10);

    $.get(`/${id}`)
      .done((data) => {
        console.log(data);
        this.setState({
          id: data.info.id,
          title: data.info.title,
          publisher: data.info.publisher,
          contentRating: data.info.content_rating,
          userRating: data.info.userRating,
          priceNew: data.info.priceNew,
          priceUsed: data.info.priceUsed,
          currentStockNew: data.info.currentStockNew,
          currentStockUsed: data.info.currentStockUsed,
          images: data.images,
          esrbCategory: data.esrb.name,
          esrbImage: data.esrb.url,
        });
      })
      .fail((err) => console.log(err));
  }

  render() {
    const {
      id,
      title,
      publisher,
      contentRating,
      userRating,
      priceNew,
      priceUsed,
      currentStockNew,
      currentStockUsed,
      images,
      esrbCategory,
      esrbImage,
    } = this.state;
    console.log(images);

    return (
      <Grid>
        <Row>
          <Col size={1}>
            <ImageList images={images} />
          </Col>
          <Col size={1}>
            <Details title={title} publisher={publisher} EsrbSrc={esrbImage} EsrbCat={esrbCategory} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
