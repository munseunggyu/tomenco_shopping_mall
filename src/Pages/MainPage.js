import React from 'react';
import {Route,Switch} from 'react-router-dom';
import styled from 'styled-components';
import MainHead from '../components/MainHead';
import PopularTheme from '../components/PopularTheme';


function MainPage(){
  return(
    <>
      <Route path='/' component={MainHead}/>
      <PopularTheme />
      
    </>
    )
}

export default MainPage;