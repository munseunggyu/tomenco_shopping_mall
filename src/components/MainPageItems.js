import React from 'react';
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom';

const MainPageItemBlock = styled.li`
  padding-top:43px;
  padding-right:1.5rem;
  padding-left:1.5rem;  
  margin-bottom:40px;
    img{
      width:100%;
      height:240px;
      margin-bottom:12px;
      border-radius:5px 5px 0 0;
    }
    h3{
      font-size:1.1rem;
      font-weight:700;
      margin-bottom:12px;
    }
    p{
      word-break: keep-all;
    }
`;

function MainPageItem({product,id}){    // 아이디값을 받아와서 연결해준다
  const navigate = useNavigate()
  return(
    <MainPageItemBlock>
        <img
          onClick={()=>{
           navigate(`detail/${id}`); //해당 페이지로 보내준다
          }}
        src={product.thumbnail} alt="img" /> 
        <h3>{product.name}</h3>
        <p>{product.description}</p>
    </MainPageItemBlock>
  )
}

function MainPageItems({productsList,setProductsList,tagList,clickList}){
  return (
    <ul>
    {
      clickList === true
      ? productsList.map((product,i) => {
        return (
          <MainPageItem 
          key={product.id} 
          id={product.id} 
          product={product}   />
        )
        })
      : tagList.map((product,i) => {
        return (
          <MainPageItem 
          key={product.id} 
          id={product.id} 
          product={product}   />
        )
        })
      
    }
    </ul>
  )
}

export default MainPageItems;