import React from 'react';
import MainHead from '../components/MainHead';
import {Route,Switch} from 'react-router-dom';

function MainPage(){
  return(
    <Switch>
      <Route exact={true} path='/' component={MainHead}/>
    </Switch>
  )
}

export default MainPage;