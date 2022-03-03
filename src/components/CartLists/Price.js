import React from 'react';
import styled from 'styled-components';

const PriceBlock = styled.div`
position:fixed;
bottom:70px;
padding:10px 8px;
width:100%;
background:white;
z-index:4;


.itemDelivery{
  display:flex;
  justify-content:space-between;
  margin-bottom:5px;
  .text{
    opacity:0.5;
  }
  .number{
  }
}
.total{
  display:flex;
  justify-content:space-between;
  margin-bottom:5px;
  .text{
    opacity:0.5;
  }
  .number{
    color:red;
  }
}
`;

function Price({total}){
return(
  <PriceBlock>
    <div className='itemDelivery'>
      <div className='text'>배송비</div>
      <div className='number'>무료</div>
    </div>
    <div className='total'>
      <div className='text'>총 주문금액</div>
      <div className='number'>{total}원</div>
    </div>
  </PriceBlock>
)
}

export default Price;