import React from 'react';
import styled from 'styled-components';
import test from '../test.jpeg'
import {Link,useHistory,useParams} from 'react-router-dom';

const MainPageItemBlock = styled.li`
  padding-top:43px;
  padding-right:1.5rem;
  padding-left:1.5rem;  
  margin-bottom:40px;
    img{
      width:100%;
      height:240px;
      margin-bottom:12px;
      border-radius:5px 5px 0 0;
    }
    h3{
      font-size:1.1rem;
      font-weight:700;
      margin-bottom:12px;
    }
    p{
      word-break: keep-all;
    }
`;

function MainPageItem({id}){    // 아이디값을 받아와서 연결해준다
  const history = useHistory();

  return(
    <MainPageItemBlock>
        <img
          onClick={()=>{
            history.push(`detail/${id}`); //해당 페이지로 보내준다
          }}
        src={test} alt="img" /> 
        <h3>인증샷을 부르는 춘식이 유리컵</h3>
        <p>안정감있게 쌓을 수 있는 실용적인 
          디자인에 귀여운 춘식이를 더한, 금주의 추천 선물이에요
        </p>
    </MainPageItemBlock>
  )
}

function MainPageItems(){
  const MainItemList = [1,2,3,4]
  return (
    <ul>
    {
      MainItemList.map((a,i) => {
        return (
          <MainPageItem key={i} id={a}   />
        )
      })
    }
    </ul>
  )
}

export default MainPageItems;