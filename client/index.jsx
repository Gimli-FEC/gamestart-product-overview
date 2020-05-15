import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'normalize.css';
import styled, { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faListUl, faMapMarkerAlt, faChevronDown, faRetweet, faTruck } from '@fortawesome/free-solid-svg-icons';

import Details from './components/details.jsx';
import ImageSelector from './components/imgSelector.jsx';
import url from './components/apiUrl.js';


library.add(faListUl, faMapMarkerAlt, faChevronDown, faRetweet, faTruck);

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  body {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    line-height: 1.2;
  }
`;

const Grid = styled.div`
  width: 60%;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: space-around;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin-right: 10px;
`;




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: null,
      publisher: null,
      contentRating: null,
      priceNew: null,
      priceUsed: null,
      currentStockNew: null,
      currentStockUsed: null,
      esrbCategory: null,
      esrbImage: null,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    const params = (new URL(window.location)).searchParams;
    // eslint-disable-next-line radix
    const id = parseInt(params.get('id'), 10);

    $.get(`${url}/${id}`)
      .done((data) => {
        console.log(data);
        this.setState({
          id: data.info.id,
          title: data.info.title,
          publisher: data.info.publisher,
          contentRating: data.info.content_rating,
          priceNew: data.info.priceNew,
          priceUsed: data.info.priceUsed,
          currentStockNew: data.info.currentStockNew,
          currentStockUsed: data.info.currentStockUsed,
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
      priceNew,
      priceUsed,
      currentStockNew,
      currentStockUsed,
      esrbCategory,
      esrbImage,
    } = this.state;

    return (
      <Grid>
        <Row>
          <Col size={1}>
            <ImageSelector />
          </Col>
          <Col size={1}>
            <Details
              title={title}
              publisher={publisher}
              EsrbSrc={esrbImage}
              EsrbCat={esrbCategory}
              priceNew={priceNew}
              priceUsed={priceUsed} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('Overview'));
