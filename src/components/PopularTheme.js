import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const PopularThemeBlock = styled.div`
  margin-top:130px;
  padding-left:40px;
  button{
    padding:1.5rem 1rem;
    font-size:1rem;
    color:white;
    background:black;
    border-radius:10px;
    white-space: nowrap;
  }
  padding-bottom:40px;
  border-bottom:8px solid #EEEEEE;
  
`

function PopularTheme(){
  const themeList = [1,2,3,4] //테마 리스트 props로 전송받고 버튼생성해준다
                              //클릭시 하단 상품리스트 변경
  return(
    <PopularThemeBlock>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
      > 
      {
        themeList.map(() => {
          return <SwiperSlide> <button>#겨울 끝장템</button> </SwiperSlide>
        })
      }
      </Swiper>

    </PopularThemeBlock>
  )
}

export default PopularTheme;