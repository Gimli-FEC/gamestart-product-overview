import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainImage from './mainImage.jsx';

const SmallPic = styled.img`
  width: 66px;
  heigth: 66px;
  :hover {
    border-bottom: 3px solid red;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Grid = styled.div`

`;

const Row = styled.div`
  display: flex;
  margin-top: 0px;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  margin-right: 20px;
  margin-top: 0px;
`;


class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      picCollection: [],
    };
    this.changePic = this.changePic.bind(this);
  }

  // componentDidMount() {
  //   const { images } = this.props;
  //   this.setState({active: images[0].url});
  // }

  changePic(e) {
    // set main state to index position of id
    //e.preventDefault();
    console.log(e);
    this.setState({ active: e });
  }

  render() {
    const { images } = this.props;
    const { active } = this.state;

    let display = '';
    if (active) {
      display = <MainImage url={active} />;
    } else if (images.length > 0) {
      display = <MainImage url={images[0].url} />;
    }


    return (
      <Grid>
        <Row>
          <Col size={1}>
            <Ul>
              {images.map((pic, index) => <li key={pic.id} onClick={() => this.changePic(pic.url)} ><SmallPic src={pic.url} alt={index + 1} /></li>)}
            </Ul>
          </Col>
          <Col size={4}>
            {display}
          </Col>
        </Row>
      </Grid>
    );
  }
}

ImageList.propTypes = {
  images: PropTypes.array
};


export default ImageList;
