import React from 'react';
import Goback from '../components/common/Goback';
import MainHead from '../components/common/MainHead';
import CartLists from '../components/CartLists';


function Cart({productsList}){
  return(
    <>
      <MainHead>장바구니</MainHead>
      <Goback />
      <CartLists productsList={productsList} />
    </>
  )
}

export default Cart;