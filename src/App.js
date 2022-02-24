import React from 'react';
import './main.css';
import MainPage from './Pages/MainPage';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route path='/' component={MainPage}/>
      
    </div>
  );
}

export default App;
