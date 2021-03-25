import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom';

export default class Feed extends Component {

    state = {
      goals: []
    }

    async componentDidMount() {

    }

  render() {
    return (
      <div>
        <ul>

        </ul>
      </div>
    )
  }
}
