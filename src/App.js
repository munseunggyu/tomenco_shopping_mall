import React,{useState,useRef} from 'react';
import './main.css';
import MainPage from './pages/MainPage';
import { Route,Switch} from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import products from './Data/sampleProducts';

function App() {
  const [productsList,setProductsList] = useState(products)
  const [basket,setBasket] = useState([])
  const nextId = useRef(1);
  
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true}> 
          <MainPage productsList={productsList} setProductsList={setProductsList} />
        </Route>
        <Route path='/detail/:id'>
          <Detail productsList={productsList} nextId={nextId} basket={basket} setBasket={setBasket}  />
        </Route>
        <Route path='/cart'>
          <Cart basket={basket} setBasket={setBasket} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
