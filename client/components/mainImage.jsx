import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainContainer = styled.div`
  width: 600px;
  height: 600px;
  background-image: url('${(props) => props.src}');
  background-size: 150% 150%;
  background-repeat: no-repeat;
  :hover img {
    opacity: 0;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  pointer-events: none;
`;

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundPosition: '0% 0%',
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const newX = ((e.pageX - left) / width) * 100;
    const newY = ((e.pageY - top) / height) * 100;
    this.setState({ backgroundPosition: `${newX}% ${newY}%` });
  }

  render() {
    const { url } = this.props;
    const { backgroundPosition } = this.state;

    return (
      <MainContainer onMouseMove={this.handleMouseMove} src={url} style={{ backgroundPosition: `${backgroundPosition}` }}>
        <Image src={url} />
      </MainContainer>
    );
  }
}

MainImage.defaultProps = {
  url: 'https://hrr45-fec.s3.us-east-2.amazonaws.com/assets/white-placeholder.png',
};


MainImage.propTypes = {
  url: PropTypes.string,
};

export default MainImage;
