import React from 'react';
import styled from 'styled-components';

const ItemReviewBlock = styled.ul`
  padding-top:30px;
  padding-left:30px;
  li{
    .li__block{
      display:flex;
      padding-bottom:20px;
      img{
        width:50px;
        height:50px;
        border-radius:20px;
          }
      .text{
        padding-left:10px;
        .star{
          padding-bottom:15px;
        }
        .name{
          opacity: 0.8;
          font-size:16px;
        }
      }
      p{
        font-size:18px;
      }
    }
    
    
  }
`

function ItemReview({review}){
return(
  <ItemReviewBlock>
    <li>
      <div className="li__block">
        <img src={review.profileImg} alt="사용자 프로필" />
        <div className="text">
          <div className="star" >
            {review.star}
          </div>
          <div className="name">
            {review.name} | {review.day}
          </div>
        </div>
      </div>
      <p>
        {review.text}
      </p>
    </li>
  </ItemReviewBlock>
  );
}
export default ItemReview;