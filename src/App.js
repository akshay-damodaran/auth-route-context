import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Auth from './Auth';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Auth>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Auth>
    </div>
  );
}

export default App;
