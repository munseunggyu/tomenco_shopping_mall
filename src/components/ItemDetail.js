import React, { useState } from 'react';
import styled from 'styled-components';
import test from '../test.jpeg';
import BottomBtn from './BottomBtn';
import Dialog from './Dialog';

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
  }`


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
      <img src={test} alt='아이템 이미지' />
      <h3>인증샷을 부르는 춘식이 유리컵</h3>
      <p>가격</p>
    </ItemPriceBlock>
  )
}

const ItemDescriptBlock = styled.div`
  margin-bottom:75px;
  img{
    width:100%;
    height:400px;
  }
`

function ItemDescript(){
  return(
    <ItemDescriptBlock>
      <img src={test} alt="아이템 상세설명 이미지로 대체" />
    </ItemDescriptBlock>
  )
}

const ItemReviewBlock = styled.ul`
  padding:25px 25px 25px 0;
  display:flex;
  justify-content:center;
  align-items;center;
  li{
    margin-bottom:16px;
    padding:25px 8px;
  }
`

function ItemReview(){
return(
  <ItemReviewBlock>
    <li>
      아직 리뷰가 없습니다
    </li>
  </ItemReviewBlock>
)
};




function ItemDetail(){
  const [descript,setDescript] = useState(true);
  const [confirm,setConfirm] = useState(true);
  const OnClick = () => setConfirm(false);
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
      <BottomBtn ><button onClick={OnClick}>장바구니 담기</button></BottomBtn>
        {
          confirm === true
          ? null
          : <Dialog setConfirm={setConfirm} title="장바구니에 상품이 담겼습니다."/>
        }
    </>
  )
}



export default ItemDetail;