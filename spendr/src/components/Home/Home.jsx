import React, { Component } from 'react';
import GoalCard from '../Card/GoalCard';
import '../Card/GoalCard.css';

class Home extends Component {
  render() {
    return (
      <div class='finalGoal'>
        <GoalCard></GoalCard>
      </div>
    );
  }
}

export default Home;