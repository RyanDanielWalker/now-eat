import React from 'react';
import SignIn from "./users/SignIn";
import RestaurantControl from './RestaurantControl'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/signin">
          <SignIn />
        </Route> */}
        <Route path="/">
          <RestaurantControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
