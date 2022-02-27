import React from 'react';
import MainHead from '../components/MainHead';
import Goback from '../components/Goback';
import ItemDetail from '../components/ItemDetail';
import CartBtn from '../components/CartBtn';


function Detail(){
  return(
    <>
      <MainHead> 토멘코 쇼핑 </MainHead>
      <Goback />
      <CartBtn />
      <ItemDetail />
    </>
  )
}

export default Detail;