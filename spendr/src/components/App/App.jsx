import React from 'react';
// import Home from '../Home/Home';
// import Header from '../Header/Header';
import Login from '../Users/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import GoalCard from '../Card/GoalCard';
// import Statuscard from '../Card/StatusCard';
import Feed from '../List/Feed';
import Signup from '../Users/Signup';
// import PrivateRoute from '../../auth/PrivateRoute';

export default function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path = '/' component={Signup} />
          <Route exact path = '/create' component = {GoalCard}></Route>
          <Route exact path = '/login' component = {Login}></Route>
          {/* <Route exact path = '/feed' component = {Statuscard}></Route> */}
          <Route exact path = '/feed' component = {Feed}></Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
    );
}