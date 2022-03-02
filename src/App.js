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
        <Route path='/' exact={true} component={MainPage}/>
        <Route path='/detail/:id'  component={Detail} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
