import React, { useState } from 'react';
import styled from 'styled-components';
import BottomBtn from '../BottomBtn';
import Dialog from '../Dialog';
import Price from './Price';
import CartList from './CartList';

const CartListsBlock = styled.div`
  margin-top:100px;
  margin-bottom:200px;
`


function CartLists({basket,setBasket}){
  const [confirm,setConfirm] = useState(true);
  const OnClick = () => setConfirm(false)
  let [total,setTotal] = useState(0)
  
  return(
    <>
      <CartListsBlock>
        {
          basket.map((basketItem,i) => {
            return( 
            <CartList 
            key={basketItem.id}
            basketItem={basketItem}
            total={total}
            setTotal={setTotal}
            setBasket={setBasket}
            basket={basket}
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