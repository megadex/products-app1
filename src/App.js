import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Edit from './components/Edit';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav/>

        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/edit" component={Edit}/>
          <Route path="/edit/:id" component={Edit}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
