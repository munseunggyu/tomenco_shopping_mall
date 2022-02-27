import React from 'react';
import styled from 'styled-components';
import MainHead from '../components/MainHead';
import test from '../test.jpeg';
import Goback from '../components/Goback';
import ItemDetail from '../components/ItemDetail';


function Detail(){
  return(
    <>
      <MainHead> 토멘코 쇼핑 </MainHead>
      <Goback />
      <ItemDetail />
    </>
  )
}

export default Detail;