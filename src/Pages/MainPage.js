import React from 'react';
import MainHead from '../components/MainHead';
import PopularTheme from '../components/PopularTheme';
import MainPageItems from '../components/MainPageItems';
import Goback from '../components/Goback';

function MainPage(){
  return(
    <>
      <MainHead />
      <PopularTheme />
      <MainPageItems />
    </>
    )
}

export default MainPage;