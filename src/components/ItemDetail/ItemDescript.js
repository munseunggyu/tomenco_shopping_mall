import React from 'react';
import styled from 'styled-components';
import test from '../../test.jpeg';

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

export default ItemDescript;