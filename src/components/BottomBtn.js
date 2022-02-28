import React from 'react';
import styled from 'styled-components';

const BottomBtnBlock = styled.button`
position:fixed;
bottom:0;
width:100%;
padding-top:25px;
padding-bottom:25px;
background:#24DBAF;
font-weight:700;
font-size:18px;
`

function BottomBtn({children}){
return  <BottomBtnBlock>{children}</BottomBtnBlock>
}

export default BottomBtn;