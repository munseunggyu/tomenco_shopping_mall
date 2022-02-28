import React from 'react';
import styled from 'styled-components';

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index:20;
`;

const DialogBlock = styled.div`
  width: 230px;
  heigh:150px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-weight:700;
    font-size: 1.2rem;
    margin-bottom:20px;
    text-align:center;
  }
  button{
    text-align:center;
    width:100%;
    
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

function Dialog({ title,setConfirm }) {
  
  return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        <button onClick={()=>{setConfirm(true)}}>확인</button>
      </DialogBlock>
    </DarkBackground>
  );
}


export default Dialog;