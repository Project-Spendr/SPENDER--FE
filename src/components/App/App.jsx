import React from 'react';
import Login from '../Users/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import GoalCard from '../Card/GoalCard';
import Feed from '../List/Feed';
import Signup from '../Users/Signup';
import SideNav from "../SideNav/SideNave"

export default function App() {
  return (
    <>
      <Router>
        <SideNav />
        <Switch>
          <Route exact path='/' component={Signup} />
          <Route exact path='/create' component={GoalCard}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/goals' component={Feed}></Route>
        </Switch>
      </Router>
    </>
  );
}