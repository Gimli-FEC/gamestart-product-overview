import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Label = styled.label`
  display: inline-block;
  text-align: center;
  width: 100px;
  background-color: rgb(246,246,246);
  padding: 10px 20px;
  border: 1px solid rgb(217,217,217);
  :hover {
    box-shadow: inset 0px -3px rgb(219,1,1);
  }

  input {
    visibility: hidden;
    :checked + ${Label} {
      box-shadow: inset 0px -3px rgb(219,1,1);
    }
  }
`;

const GameVersion = ({ labelName, value }) => {
  return (
    <Label>
      <FontAwesomeIcon icon="map-marker-alt" />
      <strong>{labelName}</strong>
      <br />
      {value}
      <input type="radio" name={labelName} value={value} />
    </Label>
  );
};


export default GameVersion;
