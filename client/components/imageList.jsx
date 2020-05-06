import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainImage from './mainImage.jsx';

const SmallPic = styled.img`
  width: 66px;
  heigth: 66px;
`;

const Ul = styled.ul`
  list-style-type: none;
`;

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      underLine: '',
    };
    this.changePic = this.changePic.bind(this);
  }

  changePic(e) {
    // set main state to index position of id
    //e.preventDefault();
    console.log(e);
    this.setState({ active: e });
  }

  render() {
    const { images } = this.props;

    return (
      <>
      <div>
          <Ul>
            {images.map((pic, index) => <li key={pic.id} onClick={() => this.changePic(pic.url)} ><SmallPic src={pic.url} alt={index + 1} /></li>)}
          </Ul>
      </div>
      <div>
          <MainImage specialUrl={images}/>
      </div>
      </>
    );
  }
}

ImageList.propTypes = {
  images: PropTypes.array
};


export default ImageList;
