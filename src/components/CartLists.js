import React, { useState } from 'react';
import styled,{css} from 'styled-components';
import test from '../test.jpeg';
import { MdDone } from 'react-icons/md';
import BottomBtn from './BottomBtn';
import Dialog from './Dialog';

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

const PriceBlock = styled.div`
  position:fixed;
  bottom:70px;
  padding:10px; 8px;
  width:100%;
  background:white;
  z-index:4;

  .itemPrice{
    display:flex;
    margin-bottom:5px;
    justify-content:space-between;
    .text{
      opacity:0.5;
    }
    .number{
    }
  }
  .itemDelivery{
    display:flex;
    justify-content:space-between;
    margin-bottom:5px;
    .text{
      opacity:0.5;
    }
    .number{
    }
  }
  .total{
    display:flex;
    justify-content:space-between;
    margin-bottom:5px;
    .text{
      opacity:0.5;
    }
    .number{
      color:red;
    }
  }
`;

function Price(){
  return(
    <PriceBlock>
      <div className='itemPrice'>
        <div className='text'>상품금액</div>
        <div className='number'>원</div>
      </div>
      <div className='itemDelivery'>
        <div className='text'>배송비</div>
        <div className='number'>원</div>
      </div>
      <div className='total'>
        <div className='text'>총 주문금액</div>
        <div className='number'>원</div>
      </div>
    </PriceBlock>
  )
}

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
  margin-bottom:200px;
`

function CartLists(){
  const [confirm,setConfirm] = useState(true);
  const OnClick = () => setConfirm(false)
  return(
    <>
      <CartListsBlock>
        <CartList />
      </CartListsBlock>  
        <Price />
        <BottomBtn ><button onClick={OnClick}>주문하기</button></BottomBtn>
        {
          confirm === true
          ? null
          : <Dialog setConfirm={setConfirm} title="주문되었습니다."/>
        }
    </>  
  )
};


export default CartLists;