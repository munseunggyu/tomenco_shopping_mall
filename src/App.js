import React,{useState,useRef, useEffect} from 'react';
import './main.css';
import MainPage from './pages/MainPage';
import { Route,Switch} from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import products from './Data/sampleProducts';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true}> 
          <MainPage  />
        </Route>
        <Route path='/detail/:id'>
          <Detail  />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
