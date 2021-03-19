import React from 'react';
import Home from '../Home/Home';
// import Header from '../Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
// import PrivateRoute from '../../auth/PrivateRoute';

export default function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/create' component = {Home}></Route>
          {/* <Route exact path = '/signup' component = {Signup}></Route> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>);
}