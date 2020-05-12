import React from 'react';
import styled from 'styled-components';

const AddToCart = styled.button`
  font-size: .75rem;
  border-radius: 6px;
  border: none;
  text-transform: uppercase;
  display: inline-block;
  background: linear-gradient(0deg, #f94f3d, #da362c);
  :hover {
    background: linear-gradient(180deg, #f94f3d, #da362c);
  }
  background-color: rgb(218, 41, 28);
  color: white;
  height: 35px;
  flex-grow: 1;
`;

const Button = ({ text }) => (
  <AddToCart>{text}</AddToCart>
);

export default Button;
