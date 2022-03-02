import React from 'react';
import styled from 'styled-components';

const ItemReviewBlock = styled.ul`
  padding:25px 25px 25px 0;
  display:flex;
  justify-content:center;
  align-items: center;
  li{
    margin-bottom:16px;
    padding:25px 8px;
  }
`

function ItemReview(){
return(
  <ItemReviewBlock>
    <li>
      sd
    </li>
  </ItemReviewBlock>
  );
}
export default ItemReview;