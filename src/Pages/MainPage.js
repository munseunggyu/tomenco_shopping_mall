import React,{useState,useEffect} from 'react';
import axios from 'axios';
import MainHead from '../components/common/MainHead';
import PopularTheme from '../components/PopularTheme';
import MainPageItems from '../components/MainPageItems';
import CartBtn from '../components/common/CartBtn';
import Spinner from '../components/common/Spinner';

const MainPage = () =>{
  const [themesList,setThemesList] = useState([])
  const [tagList,setTagList] = useState([])
  const [clickList,setClickList] = useState(false)
  const [productsList,setProductsList] = useState([]) //제품 데이터
  const [loding,setLoding] = useState(true)
  useEffect(()=> {
    axios.get(`${process.env.REACT_APP_API}/products`)
      .then(response => {
        setProductsList(response.data)
        setTagList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },[])

  useEffect(()=> {
    axios.get(`${process.env.REACT_APP_API}/themes`)
      .then(response => {
        setThemesList(response.data)
        setLoding(false)

      })
      .catch((error) => {
        console.log(error)
      })
  },[])
  const ListChange = (e) =>{
    setClickList(true)
    setProductsList(tagList.filter(product => product.tag === e.target.value))
  }

  return(
   <>
    {loding ? <Spinner /> :(
      <>
      <MainHead> 토멘코 쇼핑 </MainHead>
      
      <CartBtn />
   
      <PopularTheme 
      themesList={themesList} 
      setThemesList = {setThemesList}
      ListChange={ListChange}
      />
      <main>
        <h2 className='ir'> 상품 리스트 </h2>
        <MainPageItems 
        tagList={tagList} 
        productsList={productsList}
        setProductsList={setProductsList}
        clickList={clickList}
        />
      </main>
      </>
    )}  
    </> 
  )
}

export default MainPage;