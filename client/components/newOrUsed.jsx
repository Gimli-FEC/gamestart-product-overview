import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Label = styled.label`
  display: inline-block;
  font-size: .7rem;
  text-align: center;
  width: 100px;
  padding: 10px 20px;

  :hover {
    box-shadow: inset 0px -3px rgb(218, 41, 28);
  }

  input {
    visibility: hidden;
    :checked + ${Label} {
      box-shadow: inset 0px -3px rgb(218, 41, 28);
    }
  }
`;

const ValueDiv = styled.div`
  font-size: 1rem;
  padding-top: 10px;
  font-weight: 700;
`;

const Icon = styled.div`
  position: relative;
  font-size: .5rem;
  margin-right: 0;
`;

const LabelContainer = styled.div`
  display: inline-block;
  background-color: rgb(246,246,246);
  border: 1px solid rgb(217,217,217);
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const GameVersion = ({ labelName, value }) => {

  if (value) {
    return (
      <LabelContainer>
        <Icon>
          <FontAwesomeIcon icon="map-marker-alt" />
        </Icon>
        <Label>
          <strong>{labelName}</strong>
          <br />
          <ValueDiv>${value}</ValueDiv>
          <input type="radio" name={labelName} value={value} />
        </Label>
      </LabelContainer>
    );
  } else {
    return ( <div></div> )
  }
};

GameVersion.defaultProps = {
  value: '',
};

export default GameVersion;
