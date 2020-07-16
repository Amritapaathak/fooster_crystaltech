import React from 'react';
import Main from './component/main/Main';
import User from './component/user/User';
import Pages from './component/pages/Pages';
import Menu from './component/menu/Menu';


import {
  
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' exact component={Main} />
      <Route path="/user" exact component={User} />
      <Route path="/pages" exact component={Pages} />
      <Route path="/menu" exact component ={Menu} />
      </Switch>
    </div>
  );
}

export default App;
