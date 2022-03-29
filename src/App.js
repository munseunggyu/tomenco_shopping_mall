import React from 'react';
import './main.css';
import MainPage from './pages/MainPage';
import { Route,Switch} from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

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
      <div id="noMobile">
        <span>no mobile</span>
      </div>
    </div>
  );
}

export default App;
