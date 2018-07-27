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
      games : []
    }
  }
  componentDidMount(){
    axios.get(`/api/games`).then( res=>{
      this.setState({
        games : res.data
      })
    })
  }

  deleteGame = (element) =>{
    const { id } = element
    axios.delete(`/api/game/${id}`).then( res=>{
      this.setState({ games: res.data })
    } )
  }


  render() {
    return (
      <div className="App">
        <AddGame appGame = {(res) => this.setState({ games : res.data })}/>
        <h1> Games </h1>
        <GameList gameList = {this.state.games} deleteGame={this.deleteGame}/>
      </div>
    );
  }
}

export default App;
