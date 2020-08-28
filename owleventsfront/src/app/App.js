import React from 'react';
import MainPage from '../pages/mainPage';
import DemoPage from '../pages/demoPage.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/demo">
          <DemoPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
