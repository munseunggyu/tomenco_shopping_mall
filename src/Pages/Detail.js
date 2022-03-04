import React,{useState} from 'react';
import MainHead from '../components/MainHead';
import Goback from '../components/Goback';
import ItemDetail from '../components/ItemDetail';
import CartBtn from '../components/CartBtn';
import review from '../Data/sampleReview';

function Detail({productsList,basket,setBasket,nextId}){
  const [reviewList,setReviewList] = useState(review)
  return(
    <>
      <MainHead> 토멘코 쇼핑 </MainHead>
      <Goback />
      <CartBtn />
      <ItemDetail 
      productsList={productsList}
      basket={basket} 
      setBasket={setBasket}
      nextId={nextId}
      reviewList={reviewList}
      setReviewList={setReviewList}  />
    </>
  )
}

export default Detail;