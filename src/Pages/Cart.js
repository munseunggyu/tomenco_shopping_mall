import React from 'react';
import Goback from '../components/Goback';
import MainHead from '../components/MainHead';
import CartLists from '../components/CartLists';


function Cart(){
  return(
    <>
      <MainHead>장바구니</MainHead>
      <Goback />
      <CartLists />
    </>
  )
}

export default Cart;