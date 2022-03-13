import React,{useState,useEffect} from 'react';
import axios from 'axios';
import MainHead from '../components/MainHead';
import Goback from '../components/Goback';
import ItemDetail from '../components/ItemDetail';
import CartBtn from '../components/CartBtn';
import review from '../Data/sampleReview';

function Detail({productsList,basket,setBasket,nextId}){
  const [reviewList,setReviewList] = useState([])
  useEffect(()=> {
    axios.get('https://497d51fd-a677-44f2-8ba7-1563e862914d.mock.pstmn.io/reviews')
      .then(response => {
        setReviewList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },[])
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