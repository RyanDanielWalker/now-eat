import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header'
import SignIn from "./users/SignIn";
import SignUp from './users/SignUp'
import SignOut from './users/SignOut'
import RestaurantHome from './RestaurantHome';
import Home from './Home';
import Friends from './Friends';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signout" exact component={SignOut} />
          <Route path="/restaurant_home" exact component={RestaurantHome} />
          <Route path="/friends" exact component={Friends} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
