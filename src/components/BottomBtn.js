import React from 'react';
import styled from 'styled-components';

const BottomBtnBlock = styled.div`
  position:fixed;
  bottom:0;
  text-align:center;
  width:100%;
  background:#24DBAF;
  button{
    width:100%;
    font-size:18px;
    font-weight:700;
    padding-top:25px;
    padding-bottom:25px;
  }
`

function BottomBtn({children}){
  return  <BottomBtnBlock>{children}</BottomBtnBlock>
}

export default BottomBtn;