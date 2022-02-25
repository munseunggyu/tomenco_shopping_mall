import React from 'react';
import {Route,Link} from 'react-router-dom';
import styled from 'styled-components';

const MainHeadBlock = styled.div`
display: flex;
padding-top: 20px;
padding-bottom: 20px;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
width: 100%;
border-bottom: 1px solid #EEEEEE;
background:white;
  button{
    font-size: 1.2rem;
    font-weight:700;

  }
`

function MainHead(){
  return(
    
      <MainHeadBlock>
        <Link to="/">
          <button>토멘코 쇼핑</button>
        </Link>
      </MainHeadBlock>
   
  )
}

export default MainHead;