import React, {  useState } from 'react';
import styled from 'styled-components';
import BottomBtn from '../BottomBtn';
import Dialog from '../Dialog';
import ItemPrice from './ItemPrice';
import ItemDescript from './ItemDescript';
import ItemReview from './ItemReview';
import { useParams } from 'react-router-dom';

const ItemButtonBlock = styled.div`
  border-top:1px solid #EEEEEE;
  border-bottom:1px solid #EEEEEE;
  display:flex;
  button{
    width:50%;
    font-size:1.1rem;
    font-weight:700;
    padding-top:14px;
    padding-bottom:14px;  
  }
  .button_left{
    ${({changeColor}) =>{
      return changeColor ? `background:white;` : `background:#EEEEEE;`
    }}
  }
  .button_right{
    ${({changeColor}) => {
      return changeColor ? `background:#EEEEEE;` : `background:white;`
    }}
  }`
const NoReview = styled.div`
  text-align:center;
  padding-top:100px;
  opacity: 0.8; 
`

function ItemDetail({productsList,basket,setBasket,nextId,reviewList,setReviewList}){
  const {id} = useParams();
  const product = productsList.find((item) => {return item.id == id});
  const [detailReview,setDetailReivew] = useState([])
  const [descript,setDescript] = useState(true);
  const [confirm,setConfirm] = useState(true);

  const OnConfirm = () => {
    const cartItem = {
      id: nextId.current,
      name: product.name,
      price: product.price,
      thumbnail: product.thumbnail
    }
    setBasket(basket.concat(cartItem))
    nextId.current += 1;
    setConfirm(false)
  }
  const Descript = () => {
    setDescript(true)
  }
  const Reivew = () => {
    setDescript(false)
    setDetailReivew(reviewList.filter(review => review.productName === product.name))
  }
  
  return(
    <>
      <ItemPrice product={product} />
      <ItemButtonBlock changeColor={descript}>
        <button onClick={Descript} className="button_left">상품 설명</button>
        <button onClick={Reivew} className="button_right">상품 후기</button>
      </ItemButtonBlock>
      {
        descript === true
        ? <ItemDescript product={product}/>
        : detailReview.length !== 0
          ? detailReview.map(review => <ItemReview key={review.id} review={review} />)
          : <NoReview>아직 리뷰가 없습니다</NoReview>
      }
      <BottomBtn ><button onClick={OnConfirm}>장바구니 담기</button></BottomBtn>
        {
          confirm === true
          ? null
          : <Dialog setConfirm={setConfirm} title="상품이 담겼습니다."/>
        }
    </>
  )
}



export default ItemDetail;