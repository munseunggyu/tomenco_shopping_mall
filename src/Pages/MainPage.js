import React from 'react';
import MainHead from '../components/MainHead';
import PopularTheme from '../components/PopularTheme';
import MainPageItems from '../components/MainPageItem';

function MainPage({Link}){
  return(
    <>
      <MainHead Link={Link} />
      <PopularTheme />
      <MainPageItems />
    </>
    )
}

export default MainPage;