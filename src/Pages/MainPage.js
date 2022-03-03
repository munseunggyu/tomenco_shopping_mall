import React,{useState} from 'react';
import MainHead from '../components/MainHead';
import PopularTheme from '../components/PopularTheme';
import MainPageItems from '../components/MainPageItems';
import CartBtn from '../components/CartBtn';
import themes from '../Data/sampleTheme';
import products from '../Data/sampleProducts';

const MainPage = ({productsList,setProductsList}) =>{
  const [themesList,setThemesList] = useState(themes)
  const [tagList,setTagList] = useState(products)
  const [clickList,setClickList] = useState(false)
  const ListChange = (e) =>{
    setClickList(true)
    setProductsList(tagList.filter(product => product.tag === e.target.value))
  }

  return(
    <>
      <MainHead> 토멘코 쇼핑 </MainHead>
      <CartBtn />
      <PopularTheme 
      themesList={themesList} 
      setThemesList = {setThemesList}
      ListChange={ListChange}
       />
      <MainPageItems 
      tagList={tagList} 
      productsList={productsList}
      setProductsList={setProductsList}
      clickList={clickList}
      />
    </>
    )
}

export default MainPage;