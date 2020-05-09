import React from 'react';
import styled from 'styled-components';


const RadioOption = styled.input`
  opacity: 0;
  width: 0;
  margin: 0;
  :checked + label {
    box-shadow: inset 0px -3px rgb(219,1,1);;
  }
`;

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
`;


const GameVersion = ({ labelName, value }) => {
  return (
    <Label>
      <strong>{labelName}</strong>
      <br />
      {value}
      <RadioOption type="radio" value='$100m' />
    </Label>
  );
};

export default GameVersion;
