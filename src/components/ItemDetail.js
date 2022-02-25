import React, { useState } from 'react';
import styled,{css} from 'styled-components';
import test from '../test.jpeg';

const ItemPriceBlock = styled.div`
  margin-top:70px;
  margin-bottom:24px;
  img{
    width:100%;
    heigh:420px;
    margin-bottom:24px;
  }
  h3{
    margin-left:24px;
    margin-bottom:8px;
    font-size:1.1rem;
    font-weight:700;
  }
  p{
    margin-left:24px;
    color:rgba(0, 0, 0, 0.7);
  }
`;
const ItemButtonBlock = styled.div`
  border-top:1px solid #EEEEEE;
  border-bottom:1px solid #EEEEEE;
  display:flex;
  button{
    width:50%;
    font-size:1.1rem;
    font-weight:700;
    padding-top:14px;
    padding-bottom:14px;  
  }
  .button_left{
    ${({changeColor}) =>{
      return changeColor ? `background:white` : `background:#EEEEEE`
    }}
    }
  }
  .button_right{
    ${({changeColor}) => {
      return changeColor ? `background:#EEEEEE` : `background:white`
    }}
  }
`


function ItemPrice(){
  return(
    <ItemPriceBlock>
      <img src={test} />
      <h3>인증샷을 부르는 춘식이 유리컵</h3>
      <p>가격</p>
    </ItemPriceBlock>
  )
}


function ItemDetail(){
  const [a,setA] = useState(true);
  const Descript = () => {
    setA(true)
  }
  const Reivew = () => {
    setA(false)
  }
  return(
    <>
      <ItemPrice />
      <ItemButtonBlock changeColor={a}>
        <button onClick={Descript} className="button_left">상품 설명</button>
        <button onClick={Reivew} className="button_right">상품 후기</button>
      </ItemButtonBlock>
      
    </>
  )
}



export default ItemDetail;