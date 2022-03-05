import React from 'react';
import Goback from '../components/Goback';
import MainHead from '../components/MainHead';
import CartLists from '../components/CartLists';


function Cart({basket,setBasket}){
  return(
    <>
      <MainHead>장바구니</MainHead>
      <Goback />
      <CartLists basket={basket} setBasket={setBasket} />
    </>
  )
}

export default Cart;