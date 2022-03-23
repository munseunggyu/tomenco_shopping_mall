import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import BottomBtn from '../BottomBtn';
import Dialog from '../Dialog';
import Price from './Price';
import CartList from './CartList';

const CartListsBlock = styled.div`
  margin-top:100px;
  margin-bottom:200px;
`


function CartLists({productsList}){
  const [confirm,setConfirm] = useState(true);
  const OnClick = () => setConfirm(false)
  let [total,setTotal] = useState(0)
  let basketLocal = JSON.parse(localStorage.getItem('basket'))

  return(
    <>
      <CartListsBlock>
        {
          basketLocal.map((basketId,i) => {
            return(
              <CartList 
              key={basketId.id}
              productsList={productsList}
              total={total}
              setTotal={setTotal}
              basketId={basketId}
              basketLocal={basketLocal}
              />
            )
          })
        }
      </CartListsBlock>  
        <Price total={total} />
        <BottomBtn><button onClick={OnClick}>주문하기</button></BottomBtn>
        {
          confirm === true
          ? null
          : <Dialog setConfirm={setConfirm} title="주문되었습니다."/>
        }
    </>  
  )
}


export default CartLists;