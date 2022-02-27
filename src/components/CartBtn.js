import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const CartBtnBlock = styled.button`
  z-index:5;
  position:fixed;
  padding-top: 21.5px;
  top:0;
  font-size:16px;
  font-weight:600;
  right:0;
  margin-right:1rem;
`;

function CartBtn(){
  const history = useHistory();
  return  <CartBtnBlock onClick={()=>{history.push('/cart')}}>장바구니</CartBtnBlock>
}

export default CartBtn;