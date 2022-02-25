import React from 'react';
import './main.css';
import MainPage from './Pages/MainPage';
import { Route,Switch} from 'react-router-dom';
import Detail from './Pages/Detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true} component={MainPage}/>
        <Route path='/detail'  component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
