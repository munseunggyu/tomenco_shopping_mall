import React from 'react';
import styled from 'styled-components';


const ItemPriceBlock = styled.div`
margin-top:70px;
margin-bottom:24px;
img{
  width:100%;
  height:380px;
  margin-bottom:24px;
  padding:10px;
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
function ItemPrice({product}){
  
  return(
    <ItemPriceBlock>
      <img src={product.thumbnail} alt='상품 이미지' />
      <h3>{product.name}</h3>
      <p>{product.price}원</p>
    </ItemPriceBlock>
  )
}

export default ItemPrice;