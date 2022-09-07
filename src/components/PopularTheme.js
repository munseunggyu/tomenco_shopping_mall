import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const PopularThemeBlock = styled.div`
  margin-top:100px;
  width:100%;
  padding-bottom:40px;
  border-bottom:8px solid #EEEEEE;
`

const PopularThemeBtn = styled.button`
  padding:1.5rem 1rem;
  font-size:1rem;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position:center;
  border-radius:10px;
  white-space: nowrap;
  width:120px;
  font-weight:bold;
  color:white;
  
  &:first-child{
    margin-left:10px;
  }
`

function PopularTheme({themesList,setThemesList,ListChange}){
  
  return(
    <PopularThemeBlock >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
      > 
      {
        themesList.map((a,i) => {
          return (
          <SwiperSlide  key={a.id}>
            <PopularThemeBtn
              onClick={ListChange}
              bgImg={a.thumbnail}
              value={a.name} 
              > 
                #{a.name}
            </PopularThemeBtn>
              </SwiperSlide>)
        })
      }
      </Swiper>

    </PopularThemeBlock>
  )
}

export default PopularTheme;