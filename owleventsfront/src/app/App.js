import React from 'react';
import MainPage from '../pages/mainPage';
import Login from '../pages/login';
import DemoPage from '../pages/demoPage.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/demo">
          <DemoPage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
