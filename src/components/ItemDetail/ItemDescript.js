import React from 'react';
import styled from 'styled-components';
import test from '../../test.jpeg';

const ItemDescriptBlock = styled.div`
  margin-bottom:75px;
  img{
    width:100%;
    height:350px;
    padding:10px;
  }
`

function ItemDescript({product}){
  return(
    <ItemDescriptBlock>
      <img src={product.detail1} alt="상품 설명이 없습니다" />
      <img src={product.detail2} alt="상품 설명이 없습니다" />
    </ItemDescriptBlock>
  )
}

export default ItemDescript;