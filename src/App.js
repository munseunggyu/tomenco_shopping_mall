import React from 'react';
import './main.css';
import MainPage from './Pages/MainPage';
import { Route,Switch} from 'react-router-dom';
import Detail from './Pages/Detail';
import Cart from './Pages/Cart';

function App() {
console.log(process.env.REACT_APP_API_KEY)
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
      {/* <div id="noMobile">
        <span>Your screen is too big</span>
      </div> */}
    </div>
  );
}

export default App;
