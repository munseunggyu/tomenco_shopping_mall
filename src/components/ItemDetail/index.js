import React, { useState } from 'react';
import styled from 'styled-components';
import BottomBtn from '../BottomBtn';
import Dialog from '../Dialog';
import ItemPrice from './ItemPrice';
import ItemDescript from './ItemDescript';
import ItemReview from './ItemReview';

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
      return changeColor ? `background:white;` : `background:#EEEEEE;`
    }}
  }
  .button_right{
    ${({changeColor}) => {
      return changeColor ? `background:#EEEEEE;` : `background:white;`
    }}
  }`

function ItemDetail(){
  const [descript,setDescript] = useState(true);
  const [confirm,setConfirm] = useState(true);
  const OnConfirm = () => setConfirm(false);
  const Descript = () => {
    setDescript(true)
  }
  const Reivew = () => {
    setDescript(false)
  }
  return(
    <>
      <ItemPrice />
      <ItemButtonBlock changeColor={descript}>
        <button onClick={Descript} className="button_left">상품 설명</button>
        <button onClick={Reivew} className="button_right">상품 후기</button>
      </ItemButtonBlock>
      {
        descript === true
        ? <ItemDescript />
        : <ItemReview />
      }
      <BottomBtn ><button onClick={OnConfirm}>장바구니 담기</button></BottomBtn>
        {
          confirm === true
          ? null
          : <Dialog setConfirm={setConfirm} title="상품이 담겼습니다."/>
        }
    </>
  )
}



export default ItemDetail;