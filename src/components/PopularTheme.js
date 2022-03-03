import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const PopularThemeBlock = styled.div`
  margin-top:100px;
  
  
  padding-bottom:40px;
  border-bottom:8px solid #EEEEEE;
`

const PopularThemeBtn = styled.button`
  padding:1.5rem 1rem;
  font-size:1rem;
  color:white;
  background:black;
  border-radius:10px;
  white-space: nowrap;
  font-weight:bold;
  &:first-child{
    margin-left:10px;
  }
`

function PopularTheme({themesList,setThemesList,ListChange}){
  
  return(
    <PopularThemeBlock color='red' >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
      > 
      {
        themesList.map((a,i) => {
          return <SwiperSlide key={a.id}>
             <PopularThemeBtn onClick={ListChange} value={a.name} > #{a.name} </PopularThemeBtn>
              </SwiperSlide>
        })
      }
      </Swiper>

    </PopularThemeBlock>
  )
}

export default PopularTheme;