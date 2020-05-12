import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Label = styled.label`
  display: inline-block;
  font-size: .7rem;
  text-align: center;
  width: 100px;
  padding: 10px 20px;
  ${({ isSelected }) => isSelected === true && css`
    box-shadow: inset 0px -3px rgb(218, 41, 28);
    background-color: white;
  `}

  input {
    visibility: hidden;
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
  ${({ isSelected }) => isSelected === true && css`
    background-color: white;
  `}
`;

const RadioContainer = styled.div`
  display: flex;
`;

const Version = ({ priceNew, priceUsed }) => {

  const [selected, setSelected] = useState();
  const values = [priceNew, priceUsed];
  const labelNames = ['new', 'pre-owned'];

  return (
    <RadioContainer>
      {values.map((item, index) => (
        <LabelContainer isSelected={item === selected}>
          <Icon>
            <FontAwesomeIcon icon="map-marker-alt" />
          </Icon>
          <Label isSelected={item === selected}>
            <strong>{labelNames[index]}</strong>
            <br />
            <ValueDiv>${item}</ValueDiv>
            <input type="radio" name="version" value={item} onChange={() => setSelected(item)} />
          </Label>
        </LabelContainer>
      ))}
    </RadioContainer>
  );
};

export default Version;
