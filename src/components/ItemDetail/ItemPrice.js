import React from 'react';
import styled from 'styled-components';
import test from '../../test.jpeg';


const ItemPriceBlock = styled.div`
margin-top:70px;
margin-bottom:24px;
img{
  width:100%;
  height:420px;
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
function ItemPrice(){
  return(
    <ItemPriceBlock>
      <img src={test} alt='아이템 이미지' />
      <h3>인증샷을 부르는 춘식이 유리컵</h3>
      <p>가격</p>
    </ItemPriceBlock>
  )
}

export default ItemPrice;