import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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
    const id = parseInt(params.get('id'));

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


    return (
      <div>
        <h1>
          You are looking at product
          {id}
        </h1>
        <p />
        <img src={esrbImage} alt={esrbCategory} />
        {images.map((url, index) => <img src={url} alt={index + 1} />)}
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
