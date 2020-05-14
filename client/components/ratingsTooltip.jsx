import React, { useState } from 'react';
import styled from 'styled-components';

const Popup = styled.span`
  position:relative;
`;

const Trigger = styled.span`
  display: inline-block;
`;

const Container = styled.div`
  border-radius: 3px;
  width: 200px;
  heigth: 200px;
  position: absolute;
  z-index:100;
  background-color: white;
  border: 1px solid black;
  top: 25px;
  left: 25px;
  transform: translateX(-50%);
  :after {
    content: '';
    width: 0px;
    heigth: 0px;
    position: absolute;
    border-right: 10px solid transparent;
    border-bottom: 10px solid black;
    border-left: 10px solid transparent;
    bottom: 100%;
    left: 50%;
    margin-left: -10px;
  }
`;

const Msg = styled.div`
  padding-left: 10px;
    :first-child {
      font-weight: 600;
    }
`;

const Tooltip = ({message, children}) => {

  const [isDisplayed, setDisplay] = useState(false);

  const hideTip = () => setDisplay(false);
  const showTip = () => setDisplay(true);

  let text = message.split('\n');

  return (
    <Popup onMouseLeave={hideTip} data-testid="ttcontainer">
      {isDisplayed && (<Container><Msg>{text.map((line) => <p>{line}</p>)}</Msg></Container>)}
      <Trigger onMouseOver={showTip} data-testid="tt">
        { children }
      </Trigger>
    </Popup>
  );
};

export default Tooltip;