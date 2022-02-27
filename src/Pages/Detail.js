import React from 'react';
import styled from 'styled-components';
import MainHead from '../components/MainHead';
import test from '../test.jpeg';
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