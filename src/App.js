import React,{useState,useRef, useEffect} from 'react';
import './main.css';
import MainPage from './pages/MainPage';
import { Route,Switch} from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import products from './Data/sampleProducts';
import axios from 'axios';

function App() {
 
  const [productsList,setProductsList] = useState() //제품 데이터
  useEffect(()=> {
    axios.get('https://497d51fd-a677-44f2-8ba7-1563e862914d.mock.pstmn.io/products')
      .then(response => {
        setProductsList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },[])

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true}> 
          <MainPage productsList={productsList} setProductsList={setProductsList} />
        </Route>
        <Route path='/detail/:id'>
          <Detail productsList={productsList}  />
        </Route>
        <Route path='/cart'>
          <Cart productsList={productsList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
