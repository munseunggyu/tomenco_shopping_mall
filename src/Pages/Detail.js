import React,{useState,useEffect} from 'react';
import axios from 'axios';
import MainHead from '../components/common/MainHead';
import Goback from '../components/common/Goback';
import ItemDetail from '../components/ItemDetail';
import CartBtn from '../components/common/CartBtn';
import review from '../Data/sampleReview';
import Spinner from '../components/common/Spinner';
function Detail({productsList,nextId}){
  const [reviewList,setReviewList] = useState([])
  const [loding,setLoding] =useState(true)
  useEffect(()=> {
    axios.get(`${process.env.REACT_APP_API_KEY}/reviews`)
      .then(response => {
        setReviewList(response.data)
        setLoding(false)
      })
      .catch((error) => {
        console.log(error)
      })
  },[])
  return(
    <>
    { loding ? <Spinner /> 
   :( <>
      <MainHead> 토멘코 쇼핑 </MainHead>
      <Goback />
      <CartBtn />
      <ItemDetail 
      productsList={productsList}
      nextId={nextId}
      reviewList={reviewList}
      setReviewList={setReviewList}  />
     </>)}
    </>
  )
}

export default Detail;