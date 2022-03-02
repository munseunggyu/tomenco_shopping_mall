import React, { useState } from 'react';
import styled,{css} from 'styled-components';
import BottomBtn from '../BottomBtn';
import Dialog from '../Dialog';
import Price from './Price';
import CartList from './CartList';

const CartListsBlock = styled.div`
  margin-top:100px;
  margin-bottom:200px;
`

function CartLists(){
  const [confirm,setConfirm] = useState(true);
  const OnClick = () => setConfirm(false)
  return(
    <>
      <CartListsBlock>
        <CartList />
      </CartListsBlock>  
        <Price />
        <BottomBtn ><button onClick={OnClick}>주문하기</button></BottomBtn>
        {
          confirm === true
          ? null
          : <Dialog setConfirm={setConfirm} title="주문되었습니다."/>
        }
    </>  
  )
}


export default CartLists;