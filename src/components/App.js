import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import SignIn from "./users/SignIn";
import SignUp from './users/SignUp'
import RestaurantHome from './RestaurantHome';
import Home from './Home';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/restaurant_home" exact component={RestaurantHome} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
