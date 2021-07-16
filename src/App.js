import React from 'react';
import SignIn from "./../src/components/SignIn";
import RestaurantControl from './components/RestaurantControl'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* I CURRENTLY HAVE NO HEADER */}
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <RestaurantControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
