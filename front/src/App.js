import './App.css';
import Players from './components/Players'
import Teams from './components/Teams'
import Home from './components/Home'
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
      <Switch>
        <Route path="/players">
          <Players />
        </Route>
        <Route path="/team">
          <Teams />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
