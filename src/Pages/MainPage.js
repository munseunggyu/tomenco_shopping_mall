import React from 'react';
import MainHead from '../components/MainHead';
import PopularTheme from '../components/PopularTheme';
import MainPageItems from '../components/MainPageItems';
import Goback from '../components/Goback';
import CartBtn from '../components/CartBtn';

function MainPage(){
  return(
    <>
      <MainHead> 토멘코 쇼핑 </MainHead>
      <CartBtn />
      <PopularTheme />
      <MainPageItems />
    </>
    )
}

export default MainPage;