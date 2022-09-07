import React from 'react'
import { CgSpinner } from "react-icons/cg";
import styled from 'styled-components';

const SpinnerBlock = styled.div`
  width:100%;
  height: 100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  .spinner{
    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count:infinite;
  }
  @keyframes spin{
    from{
      transform: rotate(0)
    }
    to{
      transform: rotate(360deg)
    }
  }
`

function Spinner(){
  return(
    <SpinnerBlock>
     <CgSpinner className='spinner' size='50'></CgSpinner>
    </SpinnerBlock>

  )
}

export default Spinner