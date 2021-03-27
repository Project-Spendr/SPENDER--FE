import React, { Component } from 'react';
import GoalCard from '../Card/GoalCard';
// import Statuscard from '../Card/StatusCard';

class Home extends Component {
  render() {
    return (
      <div>
        <GoalCard></GoalCard>
        {/* <Statuscard></Statuscard> */}
      </div>
    );
  }
}

export default Home;