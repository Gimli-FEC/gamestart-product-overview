import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainImage from './mainImage.jsx';
import url from './apiUrl.js';


const Thumbnail = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  width: 66px;
  height: 66px;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  :hover {
    box-shadow: inset 0px -3px rgb(218, 41, 28);
  }
`;

const Grid = styled.div`

`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  text-align: center;
  margin-right: 10px;
`;

const ThumbnailEnd = styled.div`
  margin-top: 10px;
  font-size: .7rem;
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  :hover {
    color: rgb(218, 41, 28);
  }
`;

class ImageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      images: [],
    };
    this.changePic = this.changePic.bind(this);
  }

  componentDidMount() {
    const params = (new URL(window.location)).searchParams;
    // eslint-disable-next-line radix
    const id = parseInt(params.get('id'), 10);
    $.get(`${url}/images/${id}`)
      .done((data) => {
        this.setState({ active: data[0].url, images: data });
      })
      .fail((err) => console.log(err));
  }

  changePic(e) {
    this.setState({ active: e });
  }

  render() {
    const { active, images } = this.state;

    return (
      <Grid>
        <Row>
          <Col size={.75}>
            {images.map((pic) => {
              if (pic.url === active) {
                return <Thumbnail src={pic.url} onClick={() => this.changePic(pic.url)} key={pic.id} style={{ boxShadow: 'inset 0px -3px rgb(218, 41, 28)' }} />;
              }
              return <Thumbnail src={pic.url} onClick={() => this.changePic(pic.url)} key={pic.id} />;
            })}
            <ThumbnailEnd>
              SEE MORE
              <FontAwesomeIcon icon="chevron-down" color='rgb(218, 41, 28)'/>
            </ThumbnailEnd>
          </Col>
          <Col size={5}>
            <MainImage url={active} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ImageSelector;
