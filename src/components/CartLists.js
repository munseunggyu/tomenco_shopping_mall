import React, { useState } from 'react';
import styled,{css} from 'styled-components';
import test from '../test.jpeg';
import { MdDone } from 'react-icons/md';

const RemoveBtnBlock = styled.div`
  padding:0 10px;
  display:flex;
  width:100%;
  justify-content:flex-end;
  button{
    font-size:18px;
    opacity:0.5;
  }
  
`;

const CartListBlock = styled.div`
  padding:0 10px;
  display:flex;
  width:100%;
  height:200px;
  margin-bottom:10px;
  .checkBoxBlock{
    height:100%;
    display:flex;
    align-items:center;
    width:10%;
    .checkBox{
      width: 32px;
      height: 32px;
      border-radius: 16px;
      border: 1px solid gray;
      background:#EEEEEE;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      cursor: pointer;
      ${props =>
        props.done &&
        css`
          border:none;
          color: black;
          background:yellow;
        `}
    }
  }
  img{
    width:45%;
    height:100%;
    margin-right:7px;
  }
  .itemTP{
    display:flex;
    align-items:flex-start;
    width:45%;
    .itemTP__text{

    }
    .itemTP__price{
      order:1;
      align-self:flex-end;
    }
  }
`;

function CartList(){
  const [done,setDone] = useState(false);
  const OnCheck = () => setDone(!done); 
  return(
  <>
    <RemoveBtnBlock>
      <button>X</button>
    </RemoveBtnBlock>
    <CartListBlock done={done} onClick={OnCheck}>
      <div className='checkBoxBlock'>  <div className='checkBox' > {done && <MdDone />}</div> </div>
      <img src={test} alt="장바구니 상품 이미지" />
      <div className='itemTP'>
        <p className='itemTP__text'>상품 이름</p>
        <p className='itemTP__price'>상품 가격</p>
      </div>
    </CartListBlock>

  </>
  )
};

const CartListsBlock = styled.div`
  margin-top:100px;
`

function CartLists(){
  return(
    <CartListsBlock>
      <CartList />

    </CartListsBlock>    
  )
};


export default CartLists;