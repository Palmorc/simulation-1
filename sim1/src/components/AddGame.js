import React, { Component } from 'react'
import axios from 'axios'

export default class GameAdd extends Component{
  constructor(){
    super();

    this.state = {
      game: {
          name : '',
          developer :'',
          price : 0,
          rating : 0,
          image_url : '',
            }
    }
  }

  addName = (value) => {
    this.setState({ name : value })
  }

  addDeveloper = (value) => {
    this.setState({ developer : value })
  }

  addPrice = (value) => {
    this.setState({ price : parseInt(value,10) })
  }

  addRating = (value) => {
    this.setState({ rating : parseInt(value,10) })
  }

  addImgUrl = (value) => {
    this.setState({ image_url : value })
  }

  cancel = () => {

  }

  submit = () => {
    let obj = {
      name: this.state.name,
      develeoper: this.state.developer,
      price: this.state.price,
      rating: this.state.rating,
      image_url: this.state.image_url
    }
    axios.post(`/api/game`).then(res => {
      this.props.appGame(res.data)
    })
  }

  render(){
    console.log(this);
    return(
      <div>
        <input onChange = {(e) => this.addName(e.target.value)}   placeholder = 'Title'/>
        <input onChange = {(e) => this.addDeveloper(e.target.value)} placeholder = 'Developer'/>
        <input onChange = {(e) => this.addPrice(parseInt(e.target.value))} placeholder = 'Price'/>
        <input onChange = {(e) => this.addRating(parseInt(e.target.value))} placeholder = 'Rating'/>
        <input onChange = {(e) => this.addImgUrl(e.target.value)} placeholder = 'Image URL'/>
        <button onClick = {this.cancel}>Cancel</button>
        <button onClick = {this.submit}>Submit</button>
      </div>
    )
  }
}
