import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';
import MainImage from './mainImage.jsx';

const Thumbnail = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  width: 66px;
  height: 66px;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  :hover {
    box-shadow: inset 0px -3px red;
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
  :hover {
    color: red;
  }
`;

const ActivePic = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  width: 66px;
  height: 66px;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  box-shadow: inset 0px -3px red;
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
    $.get(`/images/${id}`)
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
                return <Thumbnail src={pic.url} onClick={() => this.changePic(pic.url)} key={pic.id} style={{ boxShadow: 'inset 0px -3px red' }} />;
              }
              return <Thumbnail src={pic.url} onClick={() => this.changePic(pic.url)} key={pic.id} />;
            })}
            <ThumbnailEnd>SEE MORE<p />{String.fromCharCode(9660)}</ThumbnailEnd>
          </Col>
          <Col size={5}>
            <MainImage url={active} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

ImageSelector.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ImageSelector;
