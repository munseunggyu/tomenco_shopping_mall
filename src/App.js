import React from 'react';
import './main.css';
import MainPage from './Pages/MainPage';
import { Route,Routes} from 'react-router-dom';
import Detail from './Pages/Detail';
import Cart from './Pages/Cart';

function App() {
  console.log(process.env.REACT_APP_API)
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<MainPage  />}>
        </Route> 
        <Route path='/detail/:id' element={<Detail  />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {/* <div id="noMobile">
        <span>Your screen is too big</span>
      </div> */}
    </div>
  );
}

export default App;
