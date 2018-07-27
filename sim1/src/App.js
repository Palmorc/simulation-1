import React, { Component } from 'react';
import './App.css';

//Components
import AddGame from './components/AddGame'
import DeleteGame from './components/DeleteGame'
import GameList from './components/GameList'
import GameSearch from './components/GameSearch'
import UpdatePrice from './components/UpdatePrice'
//***

import axios from 'axios'




class App extends Component {
  constructor(){
    super();


    this.state = {
      games = {
        name : '',
        developer :''
        price : ,
        rating : ,
        image_url : '', 
      }
    }
  }
  render() {
    return (
      <div className="App">
        <input/>
        <input/>
        <input/>
      </div>
    );
  }
}

export default App;
