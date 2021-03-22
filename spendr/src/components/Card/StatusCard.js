import React, { Component } from 'react'
import request from 'superagent';
import './StatusCard.css'
// import './GoalCard.css'

export default class Statuscard extends Component {

  
  render() {

    return (
      <div class='statusContainer'>
          <div class='userName'>UserName</div>
          <div class='status'>dkfJDKAL;FJDAKLF;DJSAKLF;DSJAKFD;SAJFKDLSA;JFKDSLA;FJDKSA;FJDKSAL;FJDSAKLF;DAJS</div>
          <section class='likesComments'>
          <div class='likes'>6 Likes</div>
          <div class='comments'>6 Comments</div>
          <button class='likeButton'>Like</button> 
          <button class='commentButton'>Comment</button>     
          </section>   
      </div>
    )
  }
}


