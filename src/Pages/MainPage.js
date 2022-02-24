import React from 'react';
import styled from 'styled-components';
import MainHead from '../components/MainHead';
import PopularTheme from '../components/PopularTheme';
import MainPageItems from '../components/MainPageItem';

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