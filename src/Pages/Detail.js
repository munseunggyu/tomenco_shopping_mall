import React from 'react';
import MainHead from '../components/MainHead';
import Goback from '../components/Goback';
import ItemDetail from '../components/ItemDetail';
import CartBtn from '../components/CartBtn';


function Detail({productsList,basket,setBasket,nextId}){

  return(
    <>
      <MainHead> 토멘코 쇼핑 </MainHead>
      <Goback />
      <CartBtn />
      <ItemDetail 
      productsList={productsList}
      basket={basket} 
      setBasket={setBasket}
      nextId={nextId}  />
    </>
  )
}

export default Detail;