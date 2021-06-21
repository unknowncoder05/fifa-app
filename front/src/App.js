import './App.css';
import React from 'react';
import Players from './components/pages/Players'
import Teams from './components/pages/Teams'
import AuthKey from './components/layout/AuthKey'
import Header from './components/layout/Header'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <AuthKey />
      <div className="bannerBack">
        <img className="banner" src="https://www.volkgames.com/wp-content/uploads/2021/01/fifa-21-banner_Mesa-de-trabajo-1-scaled.jpg"></img>
      </div>
      <Switch>
        <Route path="/players">
          <Players />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/">
          <Players />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
